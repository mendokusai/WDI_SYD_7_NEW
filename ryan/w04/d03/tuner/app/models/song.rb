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
end
