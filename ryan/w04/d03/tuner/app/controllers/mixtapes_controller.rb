class MixtapesController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]
  before_action :find_mixtape, only: [:edit, :update, :destroy]

  def index
  	@mixtapes = Mixtape.all
  end

 def new
  	@mixtape = Mixtape.new
  end

  def show
    @mixtape = Mixtape.find(params[:id])
  end

  def edit
  end

  def create
  	@mixtape = current_user.mixtapes.build(mix_params)
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
		if current_user.admin?
      @mixtape = Mixtape.find(params[:id])
    else
      @mixtape = current_user.mixtapes.find(params[:id])
    end
	end

	def mix_params
		params.require(:mixtape).permit(:name, 
																	:description,
																	{song_ids:[]} )
	end

end
