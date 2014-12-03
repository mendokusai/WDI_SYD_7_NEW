class MixtapesController < ApplicationController
  before_action :find_mixtape, only: [:show, :edit, :update, :destroy]

  def index
  	@mixtapes = Mixtape.all
  end

 def new
  	@mixtape = Mixtape.new
  end

  def show
  end

  def edit
  end

  def create
  	@mixtape = Mixtape.new(mix_params)
  	if @mixtape.save
  		redirect_to mixtape_path(@mixtape)
  	else
  		render :new
  	end
  end

  def update
  	if @mixtape.update(mix_params)
  	else
  		render :edit
  	end
  	redirect_to @mixtape
  end

  def destroy
  	@mixtape.destroy
  	redirect_to mixtapes_path
  end

private
	def find_mixtape
		@mixtape = Mixtape.find(params[:id])
	end

	def mix_params
		params.require(:mixtape).permit(:name, :description)
	end

end
