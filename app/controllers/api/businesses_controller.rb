class Api::BusinessesController < ApplicationController

    def index 
        @businesses = Business.all
        #debugger
        render :index
    end

    def create 
        @business = Business.create!(business_params)
    end

    
    def show
        @business = Business.find(params[:id])
        render :show
    end

    private

    def business_params
        params.require(:business).permit(:name, :address_1, :address_2, :city, :zipcode, :longitude, :latitude, :web_address, :phone_number, :business_type, :business_category)
    end
end
