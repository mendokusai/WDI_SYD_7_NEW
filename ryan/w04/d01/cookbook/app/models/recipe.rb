# == Schema Information
#
# Table name: recipes
#
#  id           :integer          not null, primary key
#  name         :string(255)
#  course       :string(255)
#  serving_size :string(255)
#  instructions :text
#  image        :string(255)
#  book_id      :integer
#  created_at   :datetime
#  updated_at   :datetime
#

class Recipe < ActiveRecord::Base

	validates_presence_of :name, :serving_size, :course, :image
	validates :instructions, length: {minimum: 50}

	belongs_to :book
	has_many :recipe_ingredients
	has_many :ingredients, through: :recipe_ingredients

end
