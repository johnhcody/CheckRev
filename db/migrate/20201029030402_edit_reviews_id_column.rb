class EditReviewsIdColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :reviews, :reviewer_id, :integer
  end
end
