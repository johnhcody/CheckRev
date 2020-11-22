# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'
require 'faker'

CITIES = ["New York", "Boston", "San Francisco", "St. Louis", "Phoenix", "Chicago"]

PROFESSIONAL_SERIVCES_CAT = ["Accounting", "Banking", "Legal", "Finance", "Insurance", "Investing", "Web Design", "Marketing"]

RESTAURANT_CAT = ["Vegetarian", "Thai", "Seafood", "Mexican", "Italian", "Dessert", "Bar", "Cafe"]

HOME_SERVICES_CAT = ["Cleaning", "Landscaping", "Security", "Real Estate", "Construction", "Interior design", "Property Management", "Roofing"]

RESTAURANT_PHOTOS = ["https://checkrev-seeds.s3.ap-northeast-2.amazonaws.com/rest1-daria.png", "https://checkrev-seeds.s3.ap-northeast-2.amazonaws.com/rest2-nastyasensei.png", "https://checkrev-seeds.s3.ap-northeast-2.amazonaws.com/rest3-chevanon.png",
"https://checkrev-seeds.s3.ap-northeast-2.amazonaws.com/rest4-jeshoots.png", "https://checkrev-seeds.s3.ap-northeast-2.amazonaws.com/rest5-kaboompics.png", "https://checkrev-seeds.s3.ap-northeast-2.amazonaws.com/rest6-pixabay.png", "https://checkrev-seeds.s3.ap-northeast-2.amazonaws.com/rest7-burak.png", "https://checkrev-seeds.s3.ap-northeast-2.amazonaws.com/rest8-quang-nguyen-vinh.png"]

HOME_PHOTOS = ["https://checkrev-seeds.s3.ap-northeast-2.amazonaws.com/home-services-200.png", "https://checkrev-seeds.s3.ap-northeast-2.amazonaws.com/prof-services-2.png", "https://checkrev-seeds.s3.ap-northeast-2.amazonaws.com/home-services-3.png", "https://checkrev-seeds.s3.ap-northeast-2.amazonaws.com/home-services-4+(1).png", 
    "https://checkrev-seeds.s3.ap-northeast-2.amazonaws.com/home-services-5.png", "https://checkrev-seeds.s3.ap-northeast-2.amazonaws.com/home-services-6.png", "https://checkrev-seeds.s3.ap-northeast-2.amazonaws.com/home-services-7.png", "https://checkrev-seeds.s3.ap-northeast-2.amazonaws.com/home-services-8.png", "https://checkrev-seeds.s3.ap-northeast-2.amazonaws.com/home-services-9.png" ]

PROFESSIONAL_PHOTOS = ["https://checkrev-seeds.s3.ap-northeast-2.amazonaws.com/prof-services-200.png", "https://checkrev-seeds.s3.ap-northeast-2.amazonaws.com/prof-services-2.png", "https://checkrev-seeds.s3.ap-northeast-2.amazonaws.com/prof-services-3.png", "https://checkrev-seeds.s3.ap-northeast-2.amazonaws.com/prof-services-4.png", 
    "https://checkrev-seeds.s3.ap-northeast-2.amazonaws.com/prof-services-5.png", "https://checkrev-seeds.s3.ap-northeast-2.amazonaws.com/prof-services-6.png", "https://checkrev-seeds.s3.ap-northeast-2.amazonaws.com/prof-services-7.png" ]


RESTAURANT_AMENITIES = ["Dogs Allowed", "Karaoke", "Live Music", "Free Wifi", "Has TV", "Accepts Credit Cards", "Open to All", "Serves Coffee", "Vegetarian Options"]

OTHER_AMENITIES = ["Accepts Credit Cards", "Open to All", "Parking Lot", "Satisfaction Guaranteed", "Great Atmosphere", "Offers Insurance", "Discounts Available", "Service Oriented"]

User.destroy_all

Business.destroy_all

Review.destroy_all

test = User.create({ 
     first_name: 'Guest', 
     last_name: 'User', 
     email: 'danny@devito.com', 
     zipcode: '11212', 
     password: 'password', 
     birthdate: '05/04/1990',
     state: 'New York',
     city: 'New York'

     })

25.times do |business|
name_bos = Faker::Company.name + ' ' + Faker::Company.suffix 
bos_bus = Business.create({
    name: name_bos,
    address_1: rand(1..999).to_s + ' ' + Faker::Address.street_name, 
    address_2: Faker::Address.secondary_address, 
    city: 'Boston', 
    state: 'MA', 
    zipcode: Faker::Number.number(digits: 5), 
    lng: sprintf('%.4f', -71.0592 + rand(-0.0060..0.0060)).to_f,
    lat: sprintf('%.4f', 42.3613 + rand(-0.01..0.01)).to_f, 
    web_address: 'www.' + name_bos.split(' ').join('').downcase + '.com',
    phone_number: Faker::PhoneNumber.cell_phone, 
    business_type: 'Professional Services', 
    business_category: PROFESSIONAL_SERIVCES_CAT.sample,
    price_rating: rand(1..4),
    amenities: OTHER_AMENITIES.sample(4).join(',')
    })
bos_bus.photo.attach(io: URI.open(PROFESSIONAL_PHOTOS.sample), filename: "logo.png")
end

25.times do |business|
name_bos2 = Faker::Restaurant.name
bos_bus2 = Business.create({
    name: name_bos2,
    address_1: rand(1..999).to_s + ' ' + Faker::Address.street_name, 
    address_2: Faker::Address.secondary_address, 
    city: 'Boston', 
    state: 'MA', 
    zipcode: Faker::Number.number(digits: 5),
    lng: sprintf('%.4f', -71.0592 + rand(-0.0060..0.0060)).to_f,
    lat: sprintf('%.4f', 42.3613 + rand(-0.01..0.01)).to_f, 
    web_address: 'www.' + name_bos2.split(' ').join('').downcase + '.com', 
    phone_number: Faker::PhoneNumber.cell_phone, 
    business_type: 'Restaurant' ,
    business_category: RESTAURANT_CAT.sample,
    price_rating: rand(1..4),
    amenities: OTHER_AMENITIES.sample(4).join(',')
    })
    bos_bus2.photo.attach(io: URI.open(RESTAURANT_PHOTOS.sample), filename: "logo.png")
end

25.times do |business|
name_bos3 = Faker::Company.name
bos_bus3 = Business.create({
    name: name_bos3,
    address_1: rand(1..999).to_s + ' ' + Faker::Address.street_name, 
    address_2: Faker::Address.secondary_address, 
    city: 'Boston', 
    state: 'MA', 
    zipcode: Faker::Number.number(digits: 5),
    lng: sprintf('%.4f', -71.0592 + rand(-0.0060..0.0060)).to_f,
    lat: sprintf('%.4f', 42.3613 + rand(-0.01..0.01)).to_f, 
    web_address: 'www.' + name_bos3.split(' ').join('').downcase + '.com', 
    phone_number: Faker::PhoneNumber.cell_phone, 
    business_type: 'Home Services' ,
    business_category: HOME_SERVICES_CAT.sample,
    price_rating: rand(1..4),
    amenities: OTHER_AMENITIES.sample(4).join(',')
    })
    bos_bus3.photo.attach(io: URI.open(HOME_PHOTOS.sample), filename: "logo.png")
end

25.times do |business|
name_chi = Faker::Restaurant.name
chi_bus = Business.create({
    name: name_chi,
    address_1: rand(1..999).to_s + ' ' + Faker::Address.street_name, 
    address_2: Faker::Address.secondary_address, 
    city: 'Chicago', 
    state: 'IL', 
    zipcode: Faker::Number.number(digits: 5), 
    lng: sprintf('%.4f', -87.6298 + rand(-0.100..0.100)).to_f,
    lat: sprintf('%.4f', 41.8781 + rand(-0.050..0.0050)).to_f,
    web_address: 'www.' + name_chi.split(' ').join('').downcase + '.com', 
    phone_number: Faker::PhoneNumber.cell_phone, 
    business_type: 'Restaurant' ,
    business_category: RESTAURANT_CAT.sample,
    price_rating: rand(1..4),
    amenities: RESTAURANT_AMENITIES.sample(4).join(',')
    })
    chi_bus.photo.attach(io: URI.open(RESTAURANT_PHOTOS.sample), filename: "logo.png")
end

25.times do |business|
name_chi2 = Faker::Company.name + ' ' + Faker::Company.suffix 
chi_bus2 = Business.create({
    name: name_chi2,
    address_1: rand(1..999).to_s + ' ' + Faker::Address.street_name, 
    address_2: Faker::Address.secondary_address, 
    city: 'Chicago', 
    state: 'IL', 
    zipcode: Faker::Number.number(digits: 5), 
    lng: sprintf('%.4f', -87.6298 + rand(-0.100..0.100)).to_f,
    lat: sprintf('%.4f', 41.8781 + rand(-0.050..0.0050)).to_f,
    web_address: 'www.' + name_chi2.split(' ').join('').downcase + '.com', 
    phone_number: Faker::PhoneNumber.cell_phone, 
    business_type: 'Professional Services' ,
    business_category: PROFESSIONAL_SERIVCES_CAT.sample,
    price_rating: rand(1..4),
    amenities: OTHER_AMENITIES.sample(4).join(',')
    })
    chi_bus2.photo.attach(io: URI.open(PROFESSIONAL_PHOTOS.sample), filename: "logo.png")
end

25.times do |business|
name_chi3 = Faker::Company.name
chi_bus3 = Business.create({
    name: name_chi3,
    address_1: rand(1..999).to_s + ' ' + Faker::Address.street_name, 
    address_2: Faker::Address.secondary_address, 
    city: 'Chicago', 
    state: 'IL', 
    zipcode: Faker::Number.number(digits: 5), 
    lng: sprintf('%.4f', -87.6298 + rand(-0.100..0.100)).to_f,
    lat: sprintf('%.4f', 41.8781 + rand(-0.050..0.0050)).to_f,
    web_address: 'www.' + name_chi3.split(' ').join('').downcase + '.com', 
    phone_number: Faker::PhoneNumber.cell_phone, 
    business_type: 'Home Services' ,
    business_category: HOME_SERVICES_CAT.sample,
    price_rating: rand(1..4),
    amenities: OTHER_AMENITIES.sample(4).join(',')
    })
    chi_bus3.photo.attach(io: URI.open(HOME_PHOTOS.sample), filename: "logo.png")
end

25.times do |business|
name_ny = Faker::Restaurant.name
ny_bus = Business.create({
    name: name_ny,
    address_1: rand(1..999).to_s + ' ' + Faker::Address.street_name, 
    address_2: Faker::Address.secondary_address, 
    city: 'New York', 
    state: 'NY', 
    zipcode: Faker::Number.number(digits: 5), 
    lng: sprintf('%.4f', -74.0001 + rand(-0.100..0.100)).to_f,
    lat: sprintf('%.4f', 40.7238 + rand(-0.050..0.0050)).to_f,
    web_address: 'www.' + name_ny.split(' ').join('').downcase + '.com', 
    phone_number: Faker::PhoneNumber.cell_phone, 
    business_type: 'Restaurant' ,
    business_category: RESTAURANT_CAT.sample,
    price_rating: rand(1..4),
    amenities: RESTAURANT_AMENITIES.sample(4).join(',')
    })
    ny_bus.photo.attach(io: URI.open(RESTAURANT_PHOTOS.sample), filename: "logo.png")
end

25.times do |business|
name_ny2 = Faker::Company.name + ' ' + Faker::Company.suffix 
ny_bus2 = Business.create({
    name: name_ny2,
    address_1: rand(1..999).to_s + ' ' + Faker::Address.street_name, 
    address_2: Faker::Address.secondary_address, 
    city: 'New York', 
    state: 'NY', 
    zipcode: Faker::Number.number(digits: 5), 
    lng: sprintf('%.4f', -74.0001 + rand(-0.100..0.100)).to_f,
    lat: sprintf('%.4f', 40.7238 + rand(-0.050..0.0050)).to_f,
    web_address: 'www.' + name_ny2.split(' ').join('').downcase + '.com', 
    phone_number: Faker::PhoneNumber.cell_phone, 
    business_type: 'Professional Services' ,
    business_category: PROFESSIONAL_SERIVCES_CAT.sample,
    price_rating: rand(1..4),
    amenities: OTHER_AMENITIES.sample(4).join(',')
    })
    ny_bus2.photo.attach(io: URI.open(PROFESSIONAL_PHOTOS.sample), filename: "logo.png")
end

25.times do |business|
name_ny3 = Faker::Company.name
ny_bus3 = Business.create({
    name: name_ny3,
    address_1: rand(1..999).to_s + ' ' + Faker::Address.street_name, 
    address_2: Faker::Address.secondary_address, 
    city: 'New York', 
    state: 'NY', 
    zipcode: Faker::Number.number(digits: 5), 
    lng: sprintf('%.4f', -74.0001 + rand(-0.100..0.100)).to_f,
    lat: sprintf('%.4f', 40.7238 + rand(-0.050..0.0050)).to_f,
    web_address: 'www.' + name_ny3.split(' ').join('').downcase + '.com', 
    phone_number: Faker::PhoneNumber.cell_phone, 
    business_type: 'Home Services' ,
    business_category: HOME_SERVICES_CAT.sample,
    price_rating: rand(1..4),
    amenities: OTHER_AMENITIES.sample(4).join(',')
    })
ny_bus3.photo.attach(io: URI.open(HOME_PHOTOS.sample), filename: "logo.png")
end

25.times do |business|
name_phx = Faker::Restaurant.name
phx_bus = Business.create({
    name: name_phx,
    address_1: rand(1..999).to_s + ' ' + Faker::Address.street_name, 
    address_2: Faker::Address.secondary_address, 
    city: 'Phoenix', 
    state: 'AZ', 
    zipcode: Faker::Number.number(digits: 5), 
    lng: sprintf('%.4f', -112.0748 + rand(-0.100..0.100)).to_f,
    lat: sprintf('%.4f', 33.4474 + rand(-0.050..0.0050)).to_f,
    web_address: 'www.' + name_phx.split(' ').join('').downcase + '.com', 
    phone_number: Faker::PhoneNumber.cell_phone, 
    business_type: 'Restaurant' ,
    business_category: RESTAURANT_CAT.sample,
    price_rating: rand(1..4),
    amenities: RESTAURANT_AMENITIES.sample(4).join(',')
    })
phx_bus.photo.attach(io: URI.open(RESTAURANT_PHOTOS.sample), filename: "logo.png")
end

25.times do |business|
name_phx2 = Faker::Company.name
phx_bus2 = Business.create({
    name: name_phx2,
    address_1: rand(1..999).to_s + ' ' + Faker::Address.street_name, 
    address_2: Faker::Address.secondary_address, 
    city: 'Phoenix', 
    state: 'AZ', 
    zipcode: Faker::Number.number(digits: 5), 
    lng: sprintf('%.4f', -112.0748 + rand(-0.100..0.100)).to_f,
    lat: sprintf('%.4f', 33.4474 + rand(-0.050..0.0050)).to_f,
    web_address: 'www.' + name_phx2.split(' ').join('').downcase + '.com', 
    phone_number: Faker::PhoneNumber.cell_phone, 
    business_type: 'Home Services' ,
    business_category: HOME_SERVICES_CAT.sample,
    price_rating: rand(1..4),
    amenities: OTHER_AMENITIES.sample(4).join(',')
    })
phx_bus2.photo.attach(io: URI.open(HOME_PHOTOS.sample), filename: "logo.png")
end

25.times do |business|
name_phx3 = Faker::Company.name + ' ' + Faker::Company.suffix
phx_bus3 = Business.create({
    name: name_phx3,
    address_1: rand(1..999).to_s + ' ' + Faker::Address.street_name, 
    address_2: Faker::Address.secondary_address, 
    city: 'Phoenix', 
    state: 'AZ', 
    zipcode: Faker::Number.number(digits: 5), 
    lng: sprintf('%.4f', -112.0748 + rand(-0.100..0.100)).to_f,
    lat: sprintf('%.4f', 33.4474 + rand(-0.050..0.0050)).to_f,
    web_address: 'www.' + name_phx3.split(' ').join('').downcase + '.com', 
    phone_number: Faker::PhoneNumber.cell_phone, 
    business_type: 'Professional Services' ,
    business_category: PROFESSIONAL_SERIVCES_CAT.sample,
    price_rating: rand(1..4),
    amenities: OTHER_AMENITIES.sample(4).join(',')
    })
phx_bus3.photo.attach(io: URI.open(PROFESSIONAL_PHOTOS.sample), filename: "logo.png")
end

25.times do |business|
name_sf = Faker::Restaurant.name
sf_bus = Business.create({
    name: name_sf,
    address_1: rand(1..999).to_s + ' ' + Faker::Address.street_name, 
    address_2: Faker::Address.secondary_address, 
    city: 'San Francisco', 
    state: 'CA', 
    zipcode: Faker::Number.number(digits: 5), 
    lng: sprintf('%.4f', -122.4000 + rand(-0.0800..0.0800)).to_f,
    lat: sprintf('%.4f', 37.7350 + rand(-0.0800..0.0800)).to_f,
    web_address: 'www.' + name_sf.split(' ').join('').downcase + '.com', 
    phone_number: Faker::PhoneNumber.cell_phone, 
    business_type: 'Restaurant' ,
    business_category: RESTAURANT_CAT.sample,
    price_rating: rand(1..4),
    amenities: RESTAURANT_AMENITIES.sample(4).join(',')
    })
sf_bus.photo.attach(io: URI.open(RESTAURANT_PHOTOS.sample), filename: "logo.png")
end

25.times do |business|
name_sf2 = Faker::Company.name
sf_bus2 = Business.create({
    name: name_sf2,
    address_1: rand(1..999).to_s + ' ' + Faker::Address.street_name, 
    address_2: Faker::Address.secondary_address, 
    city: 'San Francisco', 
    state: 'CA', 
    zipcode: Faker::Number.number(digits: 5), 
    lng: sprintf('%.4f', -122.4000 + rand(-0.0800..0.0800)).to_f,
    lat: sprintf('%.4f', 37.7350 + rand(-0.0800..0.0800)).to_f,
    web_address: 'www.' + name_sf2.split(' ').join('').downcase + '.com', 
    phone_number: Faker::PhoneNumber.cell_phone, 
    business_type: 'Home Services' ,
    business_category: HOME_SERVICES_CAT.sample,
    price_rating: rand(1..4),
    amenities: OTHER_AMENITIES.sample(4).join(',')
    })
sf_bus2.photo.attach(io: URI.open(HOME_PHOTOS.sample), filename: "logo.png")
end

25.times do |business|
name_sf3 = Faker::Company.name + ' ' + Faker::Company.suffix
sf_bus3 = Business.create({
    name: name_sf3,
    address_1: rand(1..999).to_s + ' ' + Faker::Address.street_name, 
    address_2: Faker::Address.secondary_address, 
    city: 'San Francisco', 
    state: 'CA', 
    zipcode: Faker::Number.number(digits: 5), 
    lng: sprintf('%.4f', -122.4000 + rand(-0.0800..0.0800)).to_f,
    lat: sprintf('%.4f', 37.7350 + rand(-0.0800..0.0800)).to_f,
    web_address: 'www.' + name_sf3.split(' ').join('').downcase + '.com', 
    phone_number: Faker::PhoneNumber.cell_phone, 
    business_type: 'Professional Services' ,
    business_category: PROFESSIONAL_SERIVCES_CAT.sample,
    price_rating: rand(1..4),
    amenities: OTHER_AMENITIES.sample(4).join(',')
    })
    sf_bus3.photo.attach(io: URI.open(PROFESSIONAL_PHOTOS.sample), filename: "logo.png")
end

25.times do |business|
name_stl = Faker::Restaurant.name
stl_bus = Business.create({
    name: name_stl,
    address_1: rand(1..999).to_s + ' ' + Faker::Address.street_name, 
    address_2: Faker::Address.secondary_address, 
    city: 'St. Louis', 
    state: 'MO', 
    zipcode: Faker::Number.number(digits: 5), 
    lng: sprintf('%.4f', -90.2087 + rand(-0.100..0.100)).to_f,
    lat: sprintf('%.4f', 38.6270 + rand(-0.050..0.0050)).to_f,
    web_address: 'www.' + name_stl.split(' ').join('').downcase + '.com', 
    phone_number: Faker::PhoneNumber.cell_phone, 
    business_type: 'Restaurant' ,
    business_category: RESTAURANT_CAT.sample,
    price_rating: rand(1..4),
    amenities: OTHER_AMENITIES.sample(4).join(',')
    })
stl_bus.photo.attach(io: URI.open(RESTAURANT_PHOTOS.sample), filename: "logo.png")
end

25.times do |business|
name_stl2 = Faker::Company.name
stl_bus2 = Business.create({
    name: name_stl2,
    address_1: rand(1..999).to_s + ' ' + Faker::Address.street_name, 
    address_2: Faker::Address.secondary_address, 
    city: 'St. Louis', 
    state: 'MO', 
    zipcode: Faker::Number.number(digits: 5), 
    lng: sprintf('%.4f', -90.2087 + rand(-0.100..0.100)).to_f,
    lat: sprintf('%.4f', 38.6270 + rand(-0.050..0.0050)).to_f,
    web_address: 'www.' + name_stl2.split(' ').join('').downcase + '.com', 
    phone_number: Faker::PhoneNumber.cell_phone, 
    business_type: 'Home Services' ,
    business_category: HOME_SERVICES_CAT.sample,
    price_rating: rand(1..4),
    amenities: OTHER_AMENITIES.sample(4).join(',')
    })
stl_bus2.photo.attach(io: URI.open(HOME_PHOTOS.sample), filename: "logo.png")
end

25.times do |business|
name_stl3 = Faker::Company.name + ' ' + Faker::Company.suffix
stl_bus3 = Business.create({
    name: name_stl3,
    address_1: rand(1..999).to_s + ' ' + Faker::Address.street_name, 
    address_2: Faker::Address.secondary_address, 
    city: 'St. Louis', 
    state: 'MO', 
    zipcode: Faker::Number.number(digits: 5), 
    lng: sprintf('%.4f', -90.2087 + rand(-0.100..0.100)).to_f,
    lat: sprintf('%.4f', 38.6270 + rand(-0.050..0.0050)).to_f,
    web_address: 'www.' + name_stl3.split(' ').join('').downcase + '.com', 
    phone_number: Faker::PhoneNumber.cell_phone, 
    business_type: 'Professional Services' ,
    business_category: PROFESSIONAL_SERIVCES_CAT.sample,
    price_rating: rand(1..4),
    amenities: OTHER_AMENITIES.sample(4).join(',')
    })
stl_bus3.photo.attach(io: URI.open(PROFESSIONAL_PHOTOS.sample), filename: "logo.png")
end