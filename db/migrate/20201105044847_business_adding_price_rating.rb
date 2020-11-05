class BusinessAddingPriceRating < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :price_rating, :integer
  end
end
