class IngredientsController < ApplicationController
  def index
  	@ingredients = Ingredient.all
  end

  def new
  	@ingredient = Ingredient.new
  end

  def create
  	@ingredient = Ingredient.new(ingred_params)
  	if @ingredient.save
  		redirect_to ingredient_path(@ingredient)
  	else
  		render :new
  	end
  end

  def show
  	@ingredient = Ingredient.find(params[:id])
  end

  def edit
  	@ingredient = Ingredient.find(params[:id])
  end

  def update
  	@ingredient = Ingredient.find(params[:id])
  	if @ingredient.update(ingred_params)
  	else
  		render :edit
  	end
  	redirect_to @ingredient
  end

  def destroy
  	@ingredient = Ingredient.find(params[:id])
  	@ingredient.destroy
  	redirect_to ingredients_path
  end


  	private
  		def ingred_params
  			params.require(:ingredient).permit(:name, 
																  				:measurement, 
																  				:cost, 
																  				:image,
                                          :ingredient_id)
  		end
end
