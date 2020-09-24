class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])

        if @user.nil?
            render json: ["Incorrect username or password"], status: 401
        else
            login!(@user)
            render "api/users/show"
        end
    end

    def destroy 
        if logged_in?
            logout!
            render json: {}
        else
            render json: ["Not Logged In"]
        end
    end

end
