class PhotosController < ApplicationController

    def index
        photos = Photo.all
        render json: photos
    end

end
