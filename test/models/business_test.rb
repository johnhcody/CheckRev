# == Schema Information
#
# Table name: businesses
#
#  id                :bigint           not null, primary key
#  name              :string           not null
#  address_1         :string           not null
#  address_2         :string
#  city              :string           not null
#  state             :string           not null
#  zipcode           :integer          not null
#  lng               :float            not null
#  lat               :float            not null
#  web_address       :string
#  phone_number      :string
#  business_type     :string
#  business_category :string
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
require 'test_helper'

class BusinessTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
