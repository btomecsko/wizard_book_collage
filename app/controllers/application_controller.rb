class ApplicationController < ActionController::API
  include ActionController::Cookies

  before_action :authorize

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  private
  
  def authorize
    @current_wizard = Wizard.find_by(id: session[:wizard_id])
    render json: {errors: ["Not authorized"]}, status: :unauthorized unless @current_wizard
  end

  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end

end
