class EditBusinessPriceRatingColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :businesses, :price_rating, :integer
  end
end
