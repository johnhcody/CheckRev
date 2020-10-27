class Hours < ActiveRecord::Migration[5.2]
  def change
    create_table :hours do |t|
      t.integer :business_id, null: false
      t.datetime :sun_open
      t.datetime :sun_close  
      t.datetime :mon_open
      t.datetime :mon_close  
      t.datetime :tues_open
      t.datetime :tues_close  
      t.datetime :wed_open
      t.datetime :wed_close  
      t.datetime :thur_open
      t.datetime :thur_close  
      t.datetime :fri_open
      t.datetime :fri_close  
      t.datetime :sat_open
      t.datetime :sat_close
      t.string :notes  
      t.timestamps
    end
  end
end
