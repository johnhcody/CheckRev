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
    
end
