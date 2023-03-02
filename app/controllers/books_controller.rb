class BooksController < ApplicationController
    skip_before_action :authorize, only: :index

    #GET request for all books
    def index
        books = Book.all
        render json: books, include: :photos
    end
    #GET request for a book based on id params
    def show
        book = find_book
        render json: book, include: :photos
    end
    #POST request to create new book
    def create
        book = Book.create!(book_params)
        render json: book, status: :created
    end

    private

    def find_book
        Book.find(params[:id])
    end

    def book_params
        params.permit(:name, :description)
    end

end
