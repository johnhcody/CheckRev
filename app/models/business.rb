# == Schema Information
#
# Table name: businesses
#
#  id                :bigint           not null, primary key
#  name              :string           not null
#  address_1         :string           not null
#  address_2         :string           not null
#  city              :string           not null
#  state             :string           not null
#  zipcode           :integer          not null
#  longitude         :float            not null
#  latitude          :float            not null
#  web_address       :string
#  phone_number      :string
#  business_type     :string
#  business_category :string
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
class Business < ApplicationRecord

    validates :name, presence: true

    has_one_attached :photo

    def self.in_bounds(bounds)
        

    end

end
