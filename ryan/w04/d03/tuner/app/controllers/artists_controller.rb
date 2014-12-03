class ArtistsController < ApplicationController
  def index
  	@artists = Artist.all
  end

  def show
  	@artist = Artist.find(params[:id])
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
  	@artist = Artist.find(params[:id])
  end

  def update
  	@artist = Artist.find(params[:id])
  	if @artist.update(artist_params)
  	else
  		render :edit
  	end
  	redirect_to @artist
  end

  def destroy
  	@artist = Artist.find(params[:id])
  	@artist.destroy
  	redirect_to artists_path
  end

  private
  	def artist_params
  		params.require(:artist).permit(:name,
  			:hometown, :bio, :years_active)
  	end



end
