class EditBusinessPriceRatingColumnAddContraints < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :price_rating, :integer, null: false, default: 1
  end
end
