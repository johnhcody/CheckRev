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
     zipcode: '89039', 
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


bos_bus = Business.create({
    name: Faker::Restaurant.name,
    address_1: rand(1..999).to_s + Faker::Address.street_name, 
    address_2: Faker::Address.secondary_address, 
    city: 'Boston', 
    state: 'MA', 
    zipcode: Faker::Number.number(digits: 5), 
    lng: -71.0677 + rand(-2.00..2.00),
    lat: 42.3565 + rand(-2.00..2.00), 
    web_address: 'www.' + Faker::Restaurant.name.split(' ').join('') + '.com', 
    phone_number: Faker::PhoneNumber.cell_phone, 
    business_type: 'Restaurant' ,
    business_category: BUSINESS_CAT.sample})
    bos_bus.photo.attach(io: URI.open("https://checkrev-seeds.s3.ap-northeast-2.amazonaws.com/rest3-chevanon.png"), filename: "logo.png")
    
chi_bus = Business.create({
    name: Faker::Restaurant.name,
    address_1: rand(1..999).to_s + Faker::Address.street_name, 
    address_2: Faker::Address.secondary_address, 
    city: 'Chicago', 
    state: 'IL', 
    zipcode: Faker::Number.number(digits: 5), 
    lng: 41.8593 + rand(-2.00..2.00),
    lat: -87.6298 + rand(-2.00..2.00), 
    web_address: 'www.' + Faker::Restaurant.name.split(' ').join('') + '.com', 
    phone_number: Faker::PhoneNumber.cell_phone, 
    business_type: 'Restaurant' ,
    business_category: BUSINESS_CAT.sample})
    chi_bus.photo.attach(io: URI.open("https://checkrev-seeds.s3.ap-northeast-2.amazonaws.com/rest4-jeshoots.png"), filename: "logo.png")
        
        
ny_bus1 = Business.create({
    name: Faker::Restaurant.name,
    address_1: rand(1..999).to_s + Faker::Address.street_name, 
    address_2: Faker::Address.secondary_address, 
    city: 'New York', 
    state: 'NY', 
    zipcode: Faker::Number.number(digits: 5), 
    lng: -87.687 + rand(-0.50..0.50),
    lat: 41.8593 + rand(-0.50..0.50), 
    web_address: 'www.' + Faker::Restaurant.name.split(' ').join('') + '.com',
    phone_number: Faker::PhoneNumber.cell_phone, 
    business_type: 'Restaurant' ,
    business_category: BUSINESS_CAT.sample})
    ny_bus1.photo.attach(io: URI.open("https://checkrev-seeds.s3.ap-northeast-2.amazonaws.com/rest5-kaboompics.png"), filename: "logo.png")
        
ny_bus2 = Business.create({
    name: Faker::Restaurant.name,
    address_1: rand(1..999).to_s + Faker::Address.street_name, 
    address_2: Faker::Address.secondary_address, 
    city: 'New York', 
    state: 'NY', 
    zipcode: Faker::Number.number(digits: 5), 
    lng: -87.687 + rand(-0.50..0.50),
    lat: 41.8593 + rand(-0.50..0.50), 
    web_address: 'www.' + Faker::Restaurant.name.split(' ').join('') + '.com',
    phone_number: Faker::PhoneNumber.cell_phone, 
    business_type: 'Restaurant' ,
    business_category: BUSINESS_CAT.sample})
    ny_bus2.photo.attach(io: URI.open("https://checkrev-seeds.s3.ap-northeast-2.amazonaws.com/rest5-kaboompics.png"), filename: "logo.png")
        
ny_bus3 = Business.create({
    name: Faker::Restaurant.name,
    address_1: rand(1..999).to_s + Faker::Address.street_name, 
    address_2: Faker::Address.secondary_address, 
    city: 'New York', 
    state: 'NY', 
    zipcode: Faker::Number.number(digits: 5), 
    lng: -87.687 + rand(-0.50..0.50),
    lat: 41.8593 + rand(-0.50..0.50), 
    web_address: 'www.' + Faker::Restaurant.name.split(' ').join('') + '.com',
    phone_number: Faker::PhoneNumber.cell_phone, 
    business_type: 'Restaurant' ,
    business_category: BUSINESS_CAT.sample})
    ny_bus3.photo.attach(io: URI.open("https://checkrev-seeds.s3.ap-northeast-2.amazonaws.com/rest5-kaboompics.png"), filename: "logo.png")
        
ny_bus4 = Business.create({
    name: Faker::Restaurant.name,
    address_1: rand(1..999).to_s + Faker::Address.street_name, 
    address_2: Faker::Address.secondary_address, 
    city: 'New York', 
    state: 'NY', 
    zipcode: Faker::Number.number(digits: 5), 
    lng: -87.687 + rand(-0.50..0.50),
    lat: 41.8593 + rand(-0.50..0.50), 
    web_address: 'www.' + Faker::Restaurant.name.split(' ').join('') + '.com',
    phone_number: Faker::PhoneNumber.cell_phone, 
    business_type: 'Restaurant' ,
    business_category: BUSINESS_CAT.sample})
    ny_bus4.photo.attach(io: URI.open("https://checkrev-seeds.s3.ap-northeast-2.amazonaws.com/rest5-kaboompics.png"), filename: "logo.png")
            

Review.destroy_all

            
phx_bus = Business.create({
    name: Faker::Restaurant.name,
    address_1: rand(1..999).to_s + Faker::Address.street_name, 
    address_2: Faker::Address.secondary_address, 
    city: 'San Francisco', 
    state: 'CA', 
    zipcode: Faker::Number.number(digits: 5), 
    lng: -112.1127 + rand(-2.00..2.00),
    lat: 33.4474 + rand(-2.00..2.00), 
    web_address: 'www.' + Faker::Restaurant.name.split(' ').join('') + '.com', 
    phone_number: Faker::PhoneNumber.cell_phone, 
    business_type: 'Restaurant' ,
    business_category: BUSINESS_CAT.sample})
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
                        
                


