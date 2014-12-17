class AddUrlAndSoundcloudIdToSongs < ActiveRecord::Migration
  def change
    add_column :songs, :url, :string
    add_column :songs, :soundcloud_id, :integer
  end
end
