class PhotosController < ApplicationController
    skip_before_action :authorize, only: :index

    #GET /photos
    def index
        render json: Photo.all
    end

    #GET /photos/:id
    def show
        photo = find_photo
        render json: photo
    end

    #POST /photos with invalid error rescue validator
    def create
        photo = @current_wizard.photos.create!(photo_params)
        render json: photo, status: :created
    end

    #PATCH /photos/:id
    def update
        photo = find_photo
        Photo.update(photo_params)
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

end
