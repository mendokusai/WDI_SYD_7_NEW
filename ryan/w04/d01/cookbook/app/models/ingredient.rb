# == Schema Information
#
# Table name: ingredients
#
#  id          :integer          not null, primary key
#  name        :string(255)
#  measurement :string(255)
#  cost        :string(255)
#  image       :string(255)
#  created_at  :datetime
#  updated_at  :datetime
#

class Ingredient < ActiveRecord::Base
	validates :name, presence: true, uniqueness: true
	validates :measurement, presence: true
	validates :image, presence: true

	has_many :recipe_ingredients
	has_many :recipes, through: :recipe_ingredients
end
