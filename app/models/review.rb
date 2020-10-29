# == Schema Information
#
# Table name: reviews
#
#  id           :bigint           not null, primary key
#  reviewer_id  :integer          not null
#  business_id  :integer          not null
#  body         :text             not null
#  price_rating :integer          not null
#  rating       :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Review < ApplicationRecord

    validates :body, presence: { message: " - All Reviews must have text"}
    validates :price_rating, presence: { message: " - Let people know what you thought of the price"}
    validates_inclusion_of :price_rating, :in: 1..5, message: "Price Ratings must be between 1 and 5"
    
    belongs_to :business,
    primary_key: :id,
    foreign_key: :business_id,
    class_name: :Review,
    



end
