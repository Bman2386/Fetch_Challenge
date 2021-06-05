class Api::PointsController < ApplicationController

    def index
        temp = Point.all 
        @points = temp.where(owner_id_params: owner_id).all
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
        #delete points if reaches 0
        #cannot let points go negative
        #adds points for payee
        temp = Point.all 
        owner_points = temp.where(owner_id_params: owner_id).all
    
        if owner_points
            total_points = 0
            sorted_points = owner_points.sort_by(:created_at) #turns into array here
            owner_points.each do |total|
            total_points += total[:points_available]
            end 

            if spend_params[:spend_amount] > total_points
                render ["You don't have enough points"]
            else
                i = 0
                #add spend amount to shop
                until spend_params[:spend_amount] == 0
                    if spend_params[:spend_amount] > sorted_points[i][:points_available]
                        spend_params[:spend_amount] -= sorted_points[i][:points_available]
                        sorted_points[i].destroy
                        i++
                    elsif spend_params[:spend_amount] == sorted_points[i][:points_available]
                        sorted_points[i].destroy
                        spend_params[:spend_amount] = 0
                    else
                        sorted_points[i].update_attributes(sorted_points[i][:points_available] -= spend_params[:spend_amount])
                        spend_params[:spend_amount] = 0
                    end
                end
            end
        else
           render ["You're out of points"] 
        end
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
            :payer_id
        )
    end

    def owner_id_params
        params[:owner_id]
    end

    def spend_params
        params[:spend_amount]
    end
end