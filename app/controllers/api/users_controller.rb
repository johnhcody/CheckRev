class Api::UsersController < ApplicationController
    
    def create
        @user = User.new(user_params)
        if @user.save
            debugger
            login!(@user)
            render :show
        else
            debugger
            render json: @user.errors.full_messages, status: 401
        end
    end

    private
    def user_params
        params.require(:user).permit(:id, :email, :password, :first_name, :last_name, :zipcode, :birthdate)
    end
end

