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

BUSINESS_CAT = ["Professional Services", "Restaurants", "Home Services"]




User.destroy_all


test = User.create({ 
     first_name: 'Guest', 
     last_name: 'User', 
     email: 'danny@devito.com', 
     zipcode: '94016', 
     password: 'password', 
     birthdate: '05/04/1990', 
     })

Business.destroy_all



bus1 = Business.create({ 
    name: 'JC\'s Kitchen', 
    address_1: '193 county st', 
    address_2: 'unit 4', 
    city: 'Lakeville', 
    state: 'MA', 
    zipcode: 85001, 
    lng: -70.9702, 
    lat: 41.81022, 
    web_address: 'www.jhc.com', 
    phone_number: '684-938-4279', 
    business_type: 'Web Development', 
    business_category: 'Professional Services'})
bus1.photo.attach(io: URI.open("https://checkrev-seeds.s3.ap-northeast-2.amazonaws.com/rest1-daria.png"), filename: "logo.png")

# bus2 = Business.create({
#     name: 'Dave\'s Diner', 
#     address_1: '193 county st', 
#     address_2: 'unit 4', 
#     city: 'Pheonix', 
#     state: 'AZ', 
#     zipcode: 89384, 
#     lng: -112.0771, 
#     lat: 74.0063, 
#     web_address: 'jhc.com', 
#     phone_number: '684-938-4279', 
#     business_type: 'Restaurant', 
#     business_category: 'Restauant'})
# bus2.photo.attach(io: URI.open("https://checkrev-seeds.s3.ap-northeast-2.amazonaws.com/rest2-nastyasensei.png"), filename: "logo.png")

name_bos = Faker::Restaurant.name
bos_bus = Business.create({
    name: name_bos,
    address_1: rand(1..999).to_s + Faker::Address.street_name, 
    address_2: Faker::Address.secondary_address, 
    city: 'Boston', 
    state: 'MA', 
    zipcode: Faker::Number.number(digits: 5), 
    lng: -71.0592 + rand(-0.0005..0.0005),
    lat: 42.3613 + rand(-0.01..0.01), 
    web_address: 'www.' + name_bos(' ').join('') + '.com', 
    phone_number: Faker::PhoneNumber.cell_phone, 
    business_type: 'Restaurant' ,
    business_category: BUSINESS_CAT.sample}),
    price_rating: rand(1..4)
    bos_bus.photo.attach(io: URI.open("https://checkrev-seeds.s3.ap-northeast-2.amazonaws.com/rest3-chevanon.png"), filename: "logo.png")

name_chi = Faker::Restaurant.name
chi_bus = Business.create({
    name: name_chi,
    address_1: rand(1..999).to_s + Faker::Address.street_name, 
    address_2: Faker::Address.secondary_address, 
    city: 'Chicago', 
    state: 'IL', 
    zipcode: Faker::Number.number(digits: 5), 
    lng: 41.8781 + rand(-0.100..0.100),
    lat: -87.6298 + rand(-0.050..0.0050), 
    web_address: 'www.' + name_chi(' ').join('') + '.com', 
    phone_number: Faker::PhoneNumber.cell_phone, 
    business_type: 'Restaurant' ,
    business_category: BUSINESS_CAT.sample}),
    price_rating: rand(1..4)
    chi_bus.photo.attach(io: URI.open("https://checkrev-seeds.s3.ap-northeast-2.amazonaws.com/rest4-jeshoots.png"), filename: "logo.png")
        
name_ny = Faker::Restaurant.name        
ny_bus1 = Business.create({
    name: name_ny,
    address_1: rand(1..999).to_s + Faker::Address.street_name, 
    address_2: Faker::Address.secondary_address, 
    city: 'New York', 
    state: 'NY', 
    zipcode: Faker::Number.number(digits: 5), 
    lng: -74.0001 + rand(-0.0050..0.0050),
    lat: 40.7238 + rand(-0.0050..0.0050), 
    web_address: 'www.' + name_ny(' ').join('') + '.com',
    phone_number: Faker::PhoneNumber.cell_phone, 
    business_type: 'Restaurant' ,
    business_category: BUSINESS_CAT.sample}),
    price_rating: rand(1..4)
    ny_bus1.photo.attach(io: URI.open("https://checkrev-seeds.s3.ap-northeast-2.amazonaws.com/rest5-kaboompics.png"), filename: "logo.png")

name_ny_2 = Faker::Restaurant.name
ny_bus2 = Business.create({
    name: name_ny_2,
    address_1: rand(1..999).to_s + Faker::Address.street_name, 
    address_2: Faker::Address.secondary_address, 
    city: 'New York', 
    state: 'NY', 
    zipcode: Faker::Number.number(digits: 5), 
    lng: -74.0001 + rand(-0.0050..0.0050),
    lat: 40.7238 + rand(-0.0050..0.0050), 
    web_address: 'www.' + name_ny_2(' ').join('') + '.com',
    phone_number: Faker::PhoneNumber.cell_phone, 
    business_type: 'Restaurant' ,
    business_category: BUSINESS_CAT.sample}),
    price_rating: rand(1..4)
    ny_bus2.photo.attach(io: URI.open("https://checkrev-seeds.s3.ap-northeast-2.amazonaws.com/rest2-nastyasensei.png"), filename: "logo.png")

name_ny_3 = Faker::Restaurant.name
ny_bus3 = Business.create({
    name: Faker::Restaurant.name,
    address_1: rand(1..999).to_s + Faker::Address.street_name, 
    address_2: Faker::Address.secondary_address, 
    city: 'New York', 
    state: 'NY', 
    zipcode: Faker::Number.number(digits: 5), 
    lng: -74.0001 + rand(-0.0050..0.0050),
    lat: 40.7238 + rand(-0.0050..0.0050), 
    web_address: 'www.' + name_ny_3(' ').join('') + '.com',
    phone_number: Faker::PhoneNumber.cell_phone, 
    business_type: 'Restaurant' ,
    business_category: BUSINESS_CAT.sample}),
    price_rating: rand(1..4)
    ny_bus3.photo.attach(io: URI.open("https://checkrev-seeds.s3.ap-northeast-2.amazonaws.com/rest7-burak.png"), filename: "logo.png")

name_ny_4 = Faker::Restaurant.name    
ny_bus4 = Business.create({
    name: name_ny_4,
    address_1: rand(1..999).to_s + Faker::Address.street_name, 
    address_2: Faker::Address.secondary_address, 
    city: 'New York', 
    state: 'NY', 
    zipcode: Faker::Number.number(digits: 5), 
    lng: -74.0001 + rand(-0.0050..0.0050),
    lat: 40.7238 + rand(-0.0050..0.0050), 
    web_address: 'www.' + name_ny_4(' ').join('') + '.com',
    phone_number: Faker::PhoneNumber.cell_phone, 
    business_type: 'Restaurant' ,
    business_category: BUSINESS_CAT.sample}),
    price_rating: rand(1..4)
    ny_bus4.photo.attach(io: URI.open("https://checkrev-seeds.s3.ap-northeast-2.amazonaws.com/rest8-quang-nguyen-vinh.png"), filename: "logo.png")
            

Review.destroy_all

name_phx = Faker::Restaurant.name            
phx_bus = Business.create({
    name: name_phx,
    address_1: rand(1..999).to_s + Faker::Address.street_name, 
    address_2: Faker::Address.secondary_address, 
    city: 'San Francisco', 
    state: 'CA', 
    zipcode: Faker::Number.number(digits: 5), 
    lng: -112.0748 + rand(-0.150..0.150),
    lat: 33.4474 + rand(-0.0150..0.0150), 
    web_address: 'www.' + name_phx(' ').join('') + '.com', 
    phone_number: Faker::PhoneNumber.cell_phone, 
    business_type: 'Restaurant' ,
    business_category: BUSINESS_CAT.sample}),
    price_rating: rand(1..4)
    phx_bus.photo.attach(io: URI.open("https://checkrev-seeds.s3.ap-northeast-2.amazonaws.com/rest6-pixabay.png"), filename: "logo.png")
                
                    
# sf_bus = Business.create({
#     name: Faker::Restaurant.name,
#     address_1: rand(1..999).to_s + Faker::Address.street_name, 
#     address_2: Faker::Address.secondary_address, 
#     city: 'Pheonix', 
#     state: 'AZ', 
#     zipcode: Faker::Number.number(digits: 5), 
#     lng: -122.4398 + rand(-2.00..2.00),
#     lat: 37.7555 + rand(-2.00..2.00), 
#     web_address: 'www.' + Faker::Restaurant.name.split(' ').join('') + '.com',
#     phone_number: Faker::PhoneNumber.cell_phone, 
#     business_type: 'Restaurant' ,
#     business_category: BUSINESS_CAT.sample})
#     sf_bus.photo.attach(io: URI.open("https://checkrev-seeds.s3.ap-northeast-2.amazonaws.com/rest7-burak.png"), filename: "logo.png")
                    
# stl_bus = Business.create({
#     name: Faker::Restaurant.name,
#     address_1: rand(1..999).to_s + Faker::Address.street_name, 
#     address_2: Faker::Address.secondary_address, 
#     city: 'Pheonix', 
#     state: 'AZ', 
#     zipcode: Faker::Number.number(digits: 5), 
#     lng: -90.2087 + rand(-2.00..2.00),
#     lat: 38.6147 + rand(-2.00..2.00), 
#     web_address: 'www.' + Faker::Restaurant.name.split(' ').join('') + '.com', 
#     phone_number: Faker::PhoneNumber.cell_phone, 
#     business_type: 'Restaurant' ,
#     business_category: BUSINESS_CAT.sample})
#     stl_bus.photo.attach(io: URI.open("https://checkrev-seeds.s3.ap-northeast-2.amazonaws.com/rest8-quang-nguyen-vinh.png"), filename: "logo.png")
                        
                


