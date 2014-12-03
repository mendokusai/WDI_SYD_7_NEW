class CreateArtists < ActiveRecord::Migration
  def change
    create_table :artists do |t|
      t.string :name
      t.string :hometown
      t.text :bio
      t.string :years_active

      t.timestamps
    end
  end
end
