class BooksController < ApplicationController

    def index
        books = Book.all
        render json: books
    end

    def show
        book = find_book
        render json: book, include: :photos
    end

    def create
        book = Book.create!(book_params)
        render json: book, status: :accepted
    end

    # def update
    #     book = find_book
    #     book.update(book_params)
    #     render json: book, status: :accepted
    # end

    # def destroy
    #     book = find_book
    #     book.destroy
    #     head :no_content
    # end

    private

    def find_book
        Book.find(params[:id])
    end

    def book_params
        params.permit(:name, :description)
    end

end
