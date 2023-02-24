class WizardsController < ApplicationController
  #filter to skip the authorization clause to allow a wizard to be created
  skip_before_action :authorize, only: :create

  #GET /wizards/:id based on the current logged in wizard
  def show
    render json: @current_wizard, include: :photos
  end

  #POST /wizards to create new wizard
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
