# == Schema Information
#
# Table name: reviews
#
#  id           :bigint           not null, primary key
#  business_id  :integer          not null
#  body         :text             not null
#  price_rating :integer          not null
#  rating       :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  author_id    :integer          not null
#
class Review < ApplicationRecord

    validates :body, presence: { message: " - All Reviews must have text"}
    validates_numericality_of :price_rating, value: {
        greater_than: 0,
        less_than: 6, 
        message: "Price Ratings must be between 1 and 5" }
    
    #has_one_attached :photo

    belongs_to :business,
    primary_key: :id,
    foreign_key: :business_id,
    class_name: :Business

    belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

end
