class BooksController < ApplicationController
  before_action :find_book, only: [:show, :edit, :update, :destroy]

  def index
  	@books = Book.all
  end

  def new
  	@book = Book.new
  end

  def create
  	@book = Book.new(book_params)
  	if @book.save
	  	redirect_to book_path(@book)
  	else
  		render :new
  	end
  end

  def show
  end

  def edit
  end

  def update 
  	if @book.update(book_params)
  	else
  		render :edit
  	end
  	redirect_to @book
  end

  def destroy
  	@book.destroy
  	redirect_to books_path
  end

  private 

    def find_book
      @book = Book.find(params[:id])
    end

  	def book_params
  		params.require(:book).permit(:title, 
						  										:cuisine, 
						  										:chef,
						  										:image,
                                  {recipe_ids:[]})
  	end
end
