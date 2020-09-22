class Api::UsersController < ApplicationController
    
    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            debugger
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    private
    def user_params
        debugger
        params.require(:user).permit(:email, :password)
    end
end
