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
    name: 'JC Web Dev', 
    address_1: '193 county st', 
    address_2: 'unit 4', 
    city: 'Lakeville', 
    state: 'MA', 
    zipcode: 85001, 
    longitude: -70.9702, 
    latitude: 41.81022, 
    web_address: 'jhc.com', 
    phone_number: '684-938-4279', 
    business_type: 'Web Development', 
    business_category: 'Professional Services'})
bus1.photo.attach(io: URI.open("https://checkrev-seeds.s3.ap-northeast-2.amazonaws.com/logo.png"), filename: "logo.png")

bus2 = Business.create({
    name: 'Dave\'s Diner', 
    address_1: '193 county st', 
    address_2: 'unit 4', 
    city: 'Pheonix', 
    state: 'AZ', 
    zipcode: 89384, 
    longitude: -112.0771, 
    latitude: 74.0063, 
    web_address: 'jhc.com', 
    phone_number: '684-938-4279', 
    business_type: 'Restaurant', 
    business_category: 'Restauant'})
bus2.photo.attach(io: URI.open("https://checkrev-seeds.s3.ap-northeast-2.amazonaws.com/logo.png"), filename: "logo.png")


bos_bus = Business.create({
    name: Faker::Restaurant.name,
    address_1: rand(1..999).to_s + Faker::Address.street_name, 
    address_2: Faker::Address.secondary_address, 
    city: 'Boston', 
    state: 'MA', 
    zipcode: Faker::Number.number(digits: 5), 
    longitude: -71.0677 + rand(-2.00..2.00),
    latitude: 42.3565 + rand(-2.00..2.00), 
    web_address: 'www.' + Faker::Restaurant.name + '.com', 
    phone_number: Faker::PhoneNumber.cell_phone, 
    business_type: 'Restaurant' ,
    business_category: BUSINESS_CAT.sample})
    bos_bus.photo.attach(io: URI.open("https://checkrev-seeds.s3.ap-northeast-2.amazonaws.com/logo.png"), filename: "logo.png")
    
chi_bus = Business.create({
    name: Faker::Restaurant.name,
    address_1: rand(1..999).to_s + Faker::Address.street_name, 
    address_2: Faker::Address.secondary_address, 
    city: 'Chicago', 
    state: 'IL', 
    zipcode: Faker::Number.number(digits: 5), 
    longitude: 41.8593 + rand(-2.00..2.00),
    latitude: -87.6298 + rand(-2.00..2.00), 
    web_address: 'www.' + Faker::Restaurant.name + '.com', 
    phone_number: Faker::PhoneNumber.cell_phone, 
    business_type: 'Restaurant' ,
    business_category: BUSINESS_CAT.sample})
    chi_bus.photo.attach(io: URI.open("https://checkrev-seeds.s3.ap-northeast-2.amazonaws.com/logo.png"), filename: "logo.png")
        
        
ny_bus = Business.create({
    name: Faker::Restaurant.name,
    address_1: rand(1..999).to_s + Faker::Address.street_name, 
    address_2: Faker::Address.secondary_address, 
    city: 'New York', 
    state: 'NY', 
    zipcode: Faker::Number.number(digits: 5), 
    longitude: -87.687 + rand(-2.00..2.00),
    latitude: 41.8593 + rand(-2.00..2.00), 
    web_address: 'www.' + Faker::Restaurant.name + '.com', 
    phone_number: Faker::PhoneNumber.cell_phone, 
    business_type: 'Restaurant' ,
    business_category: BUSINESS_CAT.sample})
    ny_bus.photo.attach(io: URI.open("https://checkrev-seeds.s3.ap-northeast-2.amazonaws.com/logo.png"), filename: "logo.png")
            
            
            
phx_bus = Business.create({
    name: Faker::Restaurant.name,
    address_1: rand(1..999).to_s + Faker::Address.street_name, 
    address_2: Faker::Address.secondary_address, 
    city: 'San Francisco', 
    state: 'CA', 
    zipcode: Faker::Number.number(digits: 5), 
    longitude: -112.1127 + rand(-2.00..2.00),
    latitude: 33.4474 + rand(-2.00..2.00), 
    web_address: 'www.' + Faker::Restaurant.name + '.com', 
    phone_number: Faker::PhoneNumber.cell_phone, 
    business_type: 'Restaurant' ,
    business_category: BUSINESS_CAT.sample})
    phx_bus.photo.attach(io: URI.open("https://checkrev-seeds.s3.ap-northeast-2.amazonaws.com/logo.png"), filename: "logo.png")
                
                    
sf_bus = Business.create({
    name: Faker::Restaurant.name,
    address_1: rand(1..999).to_s + Faker::Address.street_name, 
    address_2: Faker::Address.secondary_address, 
    city: 'Pheonix', 
    state: 'AZ', 
    zipcode: Faker::Number.number(digits: 5), 
    longitude: -122.4398 + rand(-2.00..2.00),
    latitude: 37.7555 + rand(-2.00..2.00), 
    web_address: 'www.' + Faker::Restaurant.name + '.com', 
    phone_number: Faker::PhoneNumber.cell_phone, 
    business_type: 'Restaurant' ,
    business_category: BUSINESS_CAT.sample})
    sf_bus.photo.attach(io: URI.open("https://checkrev-seeds.s3.ap-northeast-2.amazonaws.com/logo.png"), filename: "logo.png")
                    
stl_bus = Business.create({
    name: Faker::Restaurant.name,
    address_1: rand(1..999).to_s + Faker::Address.street_name, 
    address_2: Faker::Address.secondary_address, 
    city: 'Pheonix', 
    state: 'AZ', 
    zipcode: Faker::Number.number(digits: 5), 
    longitude: -90.2087 + rand(-2.00..2.00),
    latitude: 38.6147 + rand(-2.00..2.00), 
    web_address: 'www.' + Faker::Restaurant.name + '.com', 
    phone_number: Faker::PhoneNumber.cell_phone, 
    business_type: 'Restaurant' ,
    business_category: BUSINESS_CAT.sample})
    stl_bus.photo.attach(io: URI.open("https://checkrev-seeds.s3.ap-northeast-2.amazonaws.com/logo.png"), filename: "logo.png")
                        
                


