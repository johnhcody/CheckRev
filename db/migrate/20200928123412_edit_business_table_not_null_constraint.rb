class EditBusinessTableNotNullConstraint < ActiveRecord::Migration[5.2]
  def change
    change_column_null :businesses, :address_2, true
  end
end
