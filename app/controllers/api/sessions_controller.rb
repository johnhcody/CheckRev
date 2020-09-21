class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])

        if @user.nil?
            render json: { message: "Incorrect username or password"}
        else
            login!(@user)
            render :show
        end
    end

    def destroy 
        if logged_in?
            logout!
            render json: {},
        else
            render json: { message: "Not Logged In" }
        end
    end

end
