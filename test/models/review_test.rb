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
require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
