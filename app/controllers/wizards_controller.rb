class WizardsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  wrap_parameters format: []

  def index
    render json: Wizard.all
  end

  def show
    wizard = Wizard.find_by(id:params[:id])
    render json: wizard
  end

  def create
    wizard = Wizard.create(wizard_params)
    render json: wizard, status: :created
  end

  def update
    wizard = Wizard.find_by(id:params[:id])
    if wizard
      wizard.update(wizard_params)
      render json: wizard, status: :accepted
    else
      render json: {error: "The wizard cannot seem to be located!"}, status: :not_found
    end
  end

  def destroy
    wizard = Wizard.find_by(id:params[:id])
    if wizard
      wizard.destroy
      head :no_content
    else
      render json: {error: "The wizard seems to have apparated out of the facility!"}, status: :not_found
    end
  end

  private

  def wizard_params
    params.permit(:first, :last, :house)
  end

  def render_not_found_response
    render json: { error: "Wizard not found. Hmmm, I wonder if they apparated somewhere!"}, status: :not_found
  end

end
