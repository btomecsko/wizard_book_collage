class PhotosController < ApplicationController

    #GET /photos
    def index
        render json: Photo.all
    end

    #GET /photos/:id
    def show
        photo = find_photo
        render json: photo
    end

    #POST /photos based on the logged in wizard
    def create
        photo = @current_wizard.photos.create!(photo_params)
        render json: photo, status: :created
    end

    #PATCH /photos/:id
    def update
        photo = find_photo
        if photo.wizard_id == @current_wizard.id 
            photo.update(photo_params)
            render json: photo, status: :accepted
        else
            render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
    end

    #DELETE /photos/:id
    def destroy
        photo = find_photo
        if photo.wizard_id == @current_wizard.id
        photo.destroy
        head :no_content
    else
        render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
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
