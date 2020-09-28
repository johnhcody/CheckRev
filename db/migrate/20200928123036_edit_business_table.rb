class EditBusinessTable < ActiveRecord::Migration[5.2]
  def change
    change_column_null :businesses, :address_2, false
  end
end

