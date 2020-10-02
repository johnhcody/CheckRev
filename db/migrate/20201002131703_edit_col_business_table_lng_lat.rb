class EditColBusinessTableLngLat < ActiveRecord::Migration[5.2]
  def change
    rename_column :businesses, :longitude, :lng
    rename_column :businesses, :latitude, :lat
  end
end
