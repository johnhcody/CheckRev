class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :email, null: false, unique: true
      t.integer :zipcode, null: false
      t.string :password_diges, null: false
      t.string :session_token, null: false, unique: true
      t.datetime :birthdate
      t.timestamps
    end
    add_index :users, :email
    add_index :users, :zipcode
  end
end
