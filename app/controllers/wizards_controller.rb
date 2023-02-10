class WizardsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def index
    wizard = Wizard.all
    render json: wizard
  end

  private

  def render_not_found_response
    render json: { error: "Wizard not found. Hmmm, I wonder if they apparated somewhere!"}, status: :not_found
  end
  
end
