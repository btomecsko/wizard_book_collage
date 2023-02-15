class WizardsController < ApplicationController
  #Rescue to handle error handling when record does not exist
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  #GET /wizards
  def index
    render json: Wizard.all
  end

  #GET /wizards/:id
  def show
    wizard = find_wizard
    render json: wizard
  end

  #POST /wizards
  def create
    wizard = Wizard.create(wizard_params)
    render json: wizard, status: :created
  end

  #PATCH /wizards/:id
  def update
    wizard = find_wizard
      wizard.update(wizard_params)
      render json: wizard, status: :accepted
  end

  #DELETE /wizards/:id
  def destroy
    wizard = find_wizard
      wizard.destroy
      head :no_content
  end

  private

  #Helper method to find a wizard from their id in the params hash
  def find_wizard
    Wizard.find(params[:id])
  end

  def wizard_params
    params.permit(:first, :last, :house)
  end

  def render_not_found_response
    render json: { error: "Wizard not found. Hmmm, I wonder if they apparated somewhere!"}, status: :not_found
  end

end
