class Api::BusinessesController < ApplicationController

    BUSINESSES_PER_PAGE = 8

    def index 
        # @businesses = Business.all
        # # @businesses = Business.order(:id).limit(BUSINESSES_PER_PAGE).offset(@page * BUSINESSES_PER_PAGE)
        # render :index
        # #     render json: {
    #     businesses: Business.paginate(page: page)
    #                  .order(sort_by + ' ' + order),
    #     page: page,
    #     pages: Business.pages
    #   }
        
        # @businesses = Business.paginate(:page => params[:page])
        # render json: {
        #     businesses: @businesses,
        #     page: @businesses.current_page,
        #     pages: @busineses.total_pages
        # }    

        #debugger
        @businesses = params[:bounds] ? Business.includes(:reviews).in_bounds(params[:bounds]).limit(8) : Business.all.limit(8)

        if params[:bounds] && params[:priceRating] && params[:business_type]
            @businesses = Business.includes(:reviews).in_bounds(params[:bounds]).match_price(params[:priceRating]).match_type(params[:business_type]).limit(8)
        elsif params[:city] && params[:bounds]
            @businesses = Business.includes(:reviews).in_bounds(params[:bounds]).match_city(params[:city])
        elsif params[:priceRating] && params[:bounds]
            @businesses = Business.includes(:reviews).in_bounds(params[:bounds]).match_price(params[:priceRating]).limit(8)            
        elsif params[:business_type] && params[:bounds]
            @businesses = Business.includes(:reviews).in_bounds(params[:bounds]).match_type(params[:business_type]).limit(8)
        end
        render :index
    end

    def create 
        @business = Business.create!(business_params)
    end

    
    def show
        @business = Business.find(params[:id])
    end

    private

    def business_params
        params.require(:business).permit(:name, :address_1, :address_2, :city, :zipcode, :lng, :lat, :web_address, :phone_number, :business_type, :business_category, :state, :reviews, :price_rating)
    end

    def set_page 
        @page = params[:page].to_i || 1
    end

end
