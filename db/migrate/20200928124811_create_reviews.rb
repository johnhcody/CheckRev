class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :reviewer_id, null: false
      t.integer :business_id, null: false
      t.text :tbody, null: false
      t.integer :price_rating, null: false
      t.integer :rating
      t.timestamps
    end
  end
end
