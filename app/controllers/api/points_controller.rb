class Api::PointsController < ApplicationController

    def index
        temp = Point.all 
        @points = temp.where(owner_id: c_id).all
        # @points = Point.all
        render :index
    end

    def new
        render :new
    end

    def create
        @point = Point.new(point_params)
        if @point.save!
            render :show
        else
            render json: @point.errors.full_messages, status: 401
        end
    end

    def show
        @point = Point.find(params[:id])
    end


    def update
        #needs to find points associated with user, and organize by oldest 1st
        #subtract spent points from totals
        #delete points that reaches 0
        #cannot let points go negative
        temp = Point.all 
        owner_points = temp.where(owner_id: params[:points][:owner_id])



        if !owner_points 
            render ["You're out of points"] 
            return
        end
        
        total_points = 0
        sorted_points = owner_points.sort_by(&:created_at) #{ |created_at, time| time} #turns into array here
        owner_points.each { |total| total_points += total[:points_available] }
        spend = params[:points][:spend_amount].to_i
        if spend > total_points
                render ["You don't have enough points"]
                return
        end
            
        i = 0
        until spend == 0 
            if spend > sorted_points[i][:points_available]
                        spend -= sorted_points[i][:points_available]
                        sorted_points[i].update_attributes(points_available: 0)
                        sorted_points[i].save
                        
            end
            if spend == sorted_points[i][:points_available]
                sorted_points[i].update_attributes(points_available: 0)
                sorted_points[i].save
                        spend = 0
            end
            if spend < sorted_points[i][:points_available]
                        temp_points = sorted_points[i][:points_available] -= spend
                        sorted_points[i].update_attributes(points_available: temp_points)
                        sorted_points[i].save
                        spend = 0
            end
            i += 1
        end
        render :index
    end

    def destroy
        @point = Point.find(params[:id])
        if @point
          @point.destroy
        else
          render ['Could not find those points']
        end
    end

    private
    def point_params
        params.require(:point).permit(
            :points_available,
            :owner_id,
            :payer,
            :payer_id,
            :spend_amount,
            :created_at
        )
    end

    def c_id
        params[:owner_id]
    end
end