class Api::ShopsController < ApplicationController
    def index
        @shops = Shop.all 
        render :index
    end

    def show
        @shop = Shop.find(params[:id])
        render :show
    end

    def update
        @shop =  Shop.find(params[:id])
        if @shop && @shop.update_attributes(shop_params)
          render :show
        elsif !@shop
          render json: ['Could not locate that Payer'], status: 400
        else
          render json: @shop.errors.full_messages, status: 401
        end
    end

    private
    def shop_params
        params.require(:shop).permit(
            :shop_name,
            :shop_points
        )
    end
end
