class ArtistsController < ApplicationController
  before_action :find_artist, only: [:show, :edit, :update, :destroy]

  def index
  	@artists = Artist.all
  end

  def show
  end

  def new
  	@artist = Artist.new
  end

  def create
  	@artist = Artist.new(artist_params)
  	if @artist.save
  		redirect_to artist_path(@artist)
  	else
  		render :new
  	end
  end

  def edit
  end

  def update
  	if @artist.update(artist_params)
  	else
  		render :edit
  	end
  	redirect_to @artist
  end

  def destroy
  	@artist.destroy
  	redirect_to artists_path
  end

  private
  	def find_artist
  		@artist = Artist.find(params[:id])
  	end

  	def artist_params
  		params.require(:artist).permit(:name,
  			:hometown, :bio, :years_active)
  	end



end
