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
#  price_rating      :integer
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


    def self.per_page
        8
    end

    def self.page(per_page = self.per_page)
        pages = count / per_page.to_f
        pages += 1 if pages % 1 > 0
        pages.to_i
    end

    def paginate(page: 1, per_page: self.per_page)
      page = page.to_i
      per_page = per_page.to_i

      offset = (page - 1) * per_page
      limit(per_page).offset(offset)
    end


    def self.in_bounds(bounds)
        #debugger
    self.where("lat < ?", bounds[:northEast][:lat])
      .where("lat > ?", bounds[:southWest][:lat])
      .where("lng > ?", bounds[:southWest][:lng])
      .where("lng < ?", bounds[:northEast][:lng])
    end

    def self.match_price(price_rating)
        #debugger
        price_rating == "0" ? self.where("price_rating > 0") : self.where("price_rating = ?", price_rating) 
    end

    def self.match_city(city)
        self.where("city ILIKE ?", city)
    end



    def self.match_type(business_type)

        if business_type.length == 1 
            self.where("business_type = ?", business_type[0])
        elsif business_type.length == 2
            self.where("business_type = ?", business_type[0]).or(self.where("business_type = ?", business_type[1]))
        elsif business_type.length == 3
            self.where("business_type = ?", business_type[0]).or(self.where("business_type = ?", business_type[1])).or(self.where("business_type = ?", business_type[2]))
        end

    end

end
