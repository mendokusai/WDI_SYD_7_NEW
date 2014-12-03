# == Schema Information
#
# Table name: songs
#
#  id         :integer          not null, primary key
#  name       :string(255)
#  year       :string(255)
#  genre      :string(255)
#  length     :string(255)
#  artist_id  :integer
#  created_at :datetime
#  updated_at :datetime
#

class Song < ActiveRecord::Base

	validates_presence_of :name, :year

	has_many :mixtape_songs
	has_many :mixtape, through: :mixtape_songs
	belongs_to :artist


end
