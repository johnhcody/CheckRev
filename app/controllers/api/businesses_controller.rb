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

        # debugger

        #bounds, category, priceRating, business_type
        # @businesses = params[:bounds] ? Business.includes(:reviews).in_bounds(params[:bounds]).limit(8) : Business.all.limit(8)
        # @businesses = params[:bounds] ? Business.includes(:reviews).in_bounds(params[:bounds]).limit(8) : Business.custom.limit(8)
        #debugger
         # debugger
        if !params[:bounds] && !params[:category] && !params[:priceRating] && !params[:business_type]
            
            # debugger
            @businesses = Business.custom
        elsif params[:bounds] && !params[:category] && !params[:priceRating] && !params[:business_type]
            
            # debugger
            @businesses = Business.includes(:reviews).in_bounds(params[:bounds]).limit(8)
        elsif params[:bounds] && params[:category] && params[:priceRating] && params[:business_type]
            
            # debugger
            @businesses = Business.includes(:reviews).in_bounds(params[:bounds]).match_category(params[:category]).match_price(params[:priceRating]).match_type(params[:business_type]).limit(8)
        elsif params[:bounds] && params[:priceRating] && params[:business_type] && !params[:category]
            
            # debugger
            @businesses = Business.includes(:reviews).in_bounds(params[:bounds]).match_price(params[:priceRating]).match_type(params[:business_type]).limit(8)
        elsif params[:bounds] && params[:category] && params[:business_type] && !params[:priceRating]
            
            # debugger
            @businesses = Business.includes(:reviews).in_bounds(params[:bounds]).match_category(params[:category]).match_type(params[:business_type]).limit(8)
        elsif params[:bounds] && params[:category] && params[:priceRating] && !params[:business_type]
            
            # debugger
            @businesses = Business.includes(:reviews).in_bounds(params[:bounds]).match_category(params[:category]).match_price(params[:priceRating]).limit(8)
        elsif params[:bounds] && params[:category] && !params[:priceRating] && !params[:business_type]
            
            # debugger
            @businesses = Business.includes(:reviews).in_bounds(params[:bounds]).match_category(params[:category]).limit(8)
        elsif params[:bounds] && params[:priceRating] && !params[:category] && !params[:business_type]
            
            # debugger
            @businesses = Business.includes(:reviews).in_bounds(params[:bounds]).match_price(params[:priceRating]).limit(8)            
        elsif params[:bounds] && params[:business_type] && !params[:category] && !params[:priceRating]
            
            # debugger
            @businesses = Business.includes(:reviews).in_bounds(params[:bounds]).match_type(params[:business_type]).limit(8) 
        elsif !params[:bounds] && params[:business_type] && !params[:category] && !params[:priceRating]
            
            # debugger
            @businesses = Business.includes(:reviews).match_type(params[:business_type]).limit(8)
        elsif !params[:bounds] && !params[:business_type] && params[:category] && !params[:priceRating]
            
            # debugger
            @businesses = Business.includes(:reviews).match_category(params[:category]).limit(8)    
        elsif !params[:bounds] && !params[:business_type] && !params[:category] && params[:priceRating]
            
            # debugger
            @businesses = Business.includes(:reviews).match_price(params[:priceRating]).limit(8)
        elsif !params[:bounds] && params[:business_type] && params[:category] && !params[:priceRating]
            
            # debugger
            @businesses = Business.includes(:reviews).match_type(params[:business_type]).match_category(params[:category]).limit(8)
        elsif !params[:bounds] && !params[:business_type] && params[:category] && params[:priceRating]
            
            # debugger
            @businesses = Business.includes(:reviews).match_price(params[:priceRating]).match_category(params[:category]).limit(8)
        elsif !params[:bounds] && params[:business_type] && !params[:category] && params[:priceRating]
            
            # debugger
            @businesses = Business.includes(:reviews).match_type(params[:business_type]).match_price(params[:priceRating]).limit(8)
        elsif !params[:bounds] && params[:business_type] && params[:category] && params[:priceRating]
            
            # debugger
            @businesses = Business.includes(:reviews).match_type(params[:business_type]).match_category(params[:category]).match_price(params[:priceRating]).limit(8)
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
        params.require(:business).permit(:name, :address_1, :address_2, :city, :zipcode, :lng, :lat, :web_address, :phone_number, :business_type, :business_category, :state, :reviews, :price_rating, :amenities)
    end

    def set_page 
        @page = params[:page].to_i || 1
    end

end

# SF Coords
#   lng: -83.5227,
#   lat: 37.7088,