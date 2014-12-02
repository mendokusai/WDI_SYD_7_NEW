# == Schema Information
#
# Table name: recipe_ingredients
#
#  id            :integer          not null, primary key
#  recipe_id     :integer
#  ingredient_id :integer
#  created_at    :datetime
#  updated_at    :datetime
#

class RecipeIngredient < ActiveRecord::Base
	belongs_to :recipe
	belongs_to :ingredient
end
