class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.string :name
      t.string :year
      t.string :genre
      t.string :length
      t.integer :artist_id

      t.timestamps
    end
  end
end
