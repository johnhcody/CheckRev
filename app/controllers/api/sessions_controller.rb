class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])

        if @user.nil?
            render json: { message: "Incorrect username or password"}, status 401
        else
            login!(@user)
            render json: { message: "Login Successful",
                                id: @user.id }
        end

        def destroy 
            if logged_in?
                logout!
                render json: {},
            else
                render json: { message: "Not Logged In" }, status 404
            end
        end

    end
end
