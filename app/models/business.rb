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
class Business < ApplicationRecord

    validates :name, presence: true

    has_one_attached :photo

    has_many :reviews,
    primary_key: :id,
    foreign_key: :business_id,
    class_name: :Review

    has_one :business_hours,
    primary_key: :id,
    foreign_key: :business_id,
    class_name: :Hour

    def self.in_bounds(bounds)
        

    end

end
