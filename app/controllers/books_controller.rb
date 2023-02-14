class BooksController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
wrap_parameters format: []

    def index
        books = Book.all
        render json: books
    end

    def show
        book = Book.find_by(params[:id])
        render json: book
    end

    def create
        book = Book.create(book_params)
        render json: book, status: :created
    end

    private

    def book_params
        params.permit(:name, :description)
    end

    def render_not_found_response
        render json: {error: "Look at that, it appears we don't have that book!"}, status: :not_found 
    end

end
