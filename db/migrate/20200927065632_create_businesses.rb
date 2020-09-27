class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.string :name, null: false
      t.string :address_1, null: false
      t.string :address_2, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.integer :zipcode, null: false
      t.float :longitude, null: false
      t.float :latitude, null: false
      t.string :web_address
      t.string :phone_number
      t.string :business_type
      t.string :business_category
      t.timestamps
    end
    add_index :businesses, :name
    add_index :businesses, :city
    add_index :businesses, :longitude
    add_index :businesses, :latitude
  end
end
