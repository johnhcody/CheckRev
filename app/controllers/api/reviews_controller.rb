class Api::ReviewsController < ApplicationController

     def index 
        @reviews = Review.all.where(business_id: params[:business_id])
    end
    
    def show
        @review = Review.find(params[:id])
    end
    
    def create 
        @review = Review.new(review_params)
        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def update
        @review = Review.find(params[:id])
        debugger
        if @review.update(review_params)
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end
    
    def destroy
        @review = Review.find(params[:id])

        if @review.destroy
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    private

    def review_params
        params.require(:review).permit(:business_id, :body, :rating, :author_id)
    end
end
