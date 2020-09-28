@businesses.each do |business|
       json.set! business.id do 
        json.partial! 'business', business: business
        json.photoUrl rails_blob_url(business.photo)
    end
end

# json.array! @businesses do |business|
#     json.extract! business, :id, :name, :address_1, :address_2, :city, :zipcode, :longitude, :web_address, :phone_number, :business_type, :business_category
# end
