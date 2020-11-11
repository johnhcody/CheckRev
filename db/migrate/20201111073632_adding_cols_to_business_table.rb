class AddingColsToBusinessTable < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :amenities, :string
  end
end
