class PhotosController < ApplicationController
    #Rescue to handle error handling when record does not exist
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    #GET /photos
    def index
        photos = Photo.all
        render json: photos, include: :wizard
    end

    #GET /photos/:id
    def show
        photo = find_photo
        render json: photo
    end

    #POST /photos with invalid error rescue validator
    def create
        photo = Photo.create!(photo_params)
        render json: Photo, status: :accepted
    rescue ActiveRecord::RecordInvalid => invalid 
        render json:{error: invalid.record.errors}, status: :unprocessable_entity
    end

    #PATCH /photos/:id
    def update
        photo = find_photo
        Photo.update(Photo_params)
        render json: photo, status: :accepted
    end

    #DELETE /photos/:id
    def destroy
        photo = find_photo
        Photo.destroy
         head :no_content
    end

    private

    #Helper method to find a Photo from their id in the params hash
    def find_photo
        Photo.find(params[:id])
    end

    def photo_params
        params.permit(:name, :image, :date, :wizard_id, :book_id)
    end

    def render_not_found_response
        render json: { error: "Photo not found. Hmmm, I wonder if they apparated somewhere!"}, status: :not_found
    end

end
