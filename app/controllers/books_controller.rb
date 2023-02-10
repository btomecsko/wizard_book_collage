class BooksController < ApplicationController

rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        books = Book.all
        render json: books
    end

    private

    def render_not_found_response
        render json: {error: "Look at that, it appears we don't have that book!"}, status: :not_found 
    end

end
