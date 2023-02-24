class SessionsController < ApplicationController
skip_before_action :authorize, only: :create

#login session
  def create
    wizard = Wizard.find_by(username: params[:username])
    if wizard&.authenticate(params[:password])
      session[:wizard_id] = wizard.id
      render json: wizard
    else
      render json: { errors: ["Wrong information, are you sure you belong here?"] }, status: :unauthorized
    end
  end

  #logout session
  def destroy
    session.delete :wizard_id
    head :no_content
  end

end
