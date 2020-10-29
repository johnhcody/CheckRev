class Edit < ActiveRecord::Migration[5.2]
  def change
    rename_column :reviews, :tbody, :body
  end
end
