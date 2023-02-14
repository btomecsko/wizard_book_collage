class WizardsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  wrap_parameters format: []

  def index
    render json: Wizard.all
  end

  def show
    wizard = Wizard.find_by(params[:id])
    render json: wizard
  end

  def create
    wizard = Wizard.create(wizard_params)
    render json: wizard, status: :created
  end

  private

  def wizard_params
    params.permit(:first, :last, :house)
  end

  def render_not_found_response
    render json: { error: "Wizard not found. Hmmm, I wonder if they apparated somewhere!"}, status: :not_found
  end

end
