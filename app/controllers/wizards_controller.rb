class WizardsController < ApplicationController
  skip_before_action :authorize, only: :create

  #GET /wizards/:id based on the current logged in wizard
  def show
    render json: @current_wizard, include: :photos
  end

  #POST /wizards with authorization
  def create
    wizard = Wizard.create!(wizard_params)
    session[:wizard_id] = wizard.id
    render json: wizard, status: :created
  end
  

  private

  def wizard_params
    params.permit(:first, :last, :house, :username, :password, :password_confirmation)
  end

end
