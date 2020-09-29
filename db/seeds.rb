# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

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
    name: 'JC Software Development', 
    address_1: '193 county st', 
    address_2: 'unit 4', 
    city: 'New York', 
    state: 'NY', zipcode: 89384, 
    longitude: 40.7128, 
    latitude: 74.0060, 
    web_address: 'jhc.com', 
    phone_number: '684938279', 
    business_type: 'Web Development', 
    business_category: 'Professional Services'})
bus1.photo.attach(io: File.open("/Users/rusticair-9/Desktop/coding/app_academy/CheckRev/CheckRev/app/assets/images/logo.png"), filename: "logo.png")

bus2 = Business.create({
    name: 'Dave\'s Diner', 
    address_1: '57 Main St.', 
    address_2: '', 
    city: 'Brooklyn', 
    state: 'NY', zipcode: 89384, 
    longitude: 40.6782, 
    latitude: 73.9442, 
    web_address: 'jhc.com', 
    phone_number: '684938279', 
    business_type: 'Web Development', 
    business_category: 'Professional Services'})

bus2.photo.attach(io: File.open("/Users/rusticair-9/Desktop/coding/app_academy/CheckRev/CheckRev/app/assets/images/logo.png"), filename: "logo.png")

bus3 = Business.create({
    name: 'JC Web Development', 
    address_1: '193 county st', 
    address_2: 'Unit 4', 
    city: 'Boston', 
    state: 'MA', zipcode: 02101, 
    longitude: 42.6289, 
    latitude: 78.7377, 
    web_address: 'jhc.com', 
    phone_number: '684-938-4279', 
    business_type: 'Web Development', 
    business_category: 'Professional Services'})
bus3.photo.attach(io: File.open("/Users/rusticair-9/Desktop/coding/app_academy/CheckRev/CheckRev/app/assets/images/logo.png"), filename: "logo.png")

bus4 = Business.create({
    name: 'A+ Legal Service', 
    address_1: '18 Elm St.', 
    address_2: 'Second Floor', 
    city: 'Chicago, IL', 
    state: 'MA', zipcode: 89384, 
    longitude: 41.8781, 
    latitude: 87.6298, 
    web_address: 'jhc.com', 
    phone_number: '684-938-4279', 
    business_type: 'Web Development', 
    business_category: BUSINESS_CAT.sample})
bus4.photo.attach(io: File.open("/Users/rusticair-9/Desktop/coding/app_academy/CheckRev/CheckRev/app/assets/images/logo.png"), filename: "logo.png")


bus5 = Business.create({
    name: 'jc web dev', 
    address_1: '193 county st', 
    address_2: 'unit 4', 
    city: 'Lakeville', 
    state: 'MA', 
    zipcode: 85001, 
    longitude: 37.7749, 
    latitude: 122.4194, 
    web_address: 'jhc.com', 
    phone_number: '684-938-4279', 
    business_type: 'Web Development', 
    business_category: 'Professional Services'})
bus5.photo.attach(io: File.open("/Users/rusticair-9/Desktop/coding/app_academy/CheckRev/CheckRev/app/assets/images/logo.png"), filename: "logo.png")

bus6 = Business.create({
    name: 'Barry\'s Restaurant', 
    address_1: '193 county st', 
    address_2: 'unit 4', 
    city: 'Pheonix', 
    state: 'AZ', 
    zipcode: 89384, 
    longitude: 33.4484, 
    latitude: 74.0060, 
    web_address: 'jhc.com', 
    phone_number: '684-938-4279', 
    business_type: 'Restaurant', 
    business_category: 'Restauant'})
bus6.photo.attach(io: File.open("/Users/rusticair-9/Desktop/coding/app_academy/CheckRev/CheckRev/app/assets/images/logo.png"), filename: "logo.png")

bos_bus = Business.create({
    name: Faker::Restaurant.name,
    address_1: rand(1..999).to_s + Faker::Address.street_name, 
    address_2: Faker::Address.secondary_address, 
    city: 'San Francisco', 
    state: 'CA', 
    zipcode: Faker::Number.number(digits: 5), 
    longitude: 42.6289 + rand(-10.00..10.00),
    latitude: 78.7377 + rand(-10.00..10.00), 
    web_address: 'www.' + Faker::Restaurant.name + '.com', 
    phone_number: Faker::PhoneNumber.cell_phone, 
    business_type: 'Restaurant' ,
    business_category: BUSINESS_CAT.sample})
    bos_bus.photo.attach(io: File.open("/Users/rusticair-9/Desktop/coding/app_academy/CheckRev/CheckRev/app/assets/images/logo.png"), filename: "logo.png")
    
chi_bus = Business.create({
    name: Faker::Restaurant.name,
    address_1: rand(1..999).to_s + Faker::Address.street_name, 
    address_2: Faker::Address.secondary_address, 
    city: 'San Francisco', 
    state: 'CA', 
    zipcode: Faker::Number.number(digits: 5), 
    longitude: 41.8781 + rand(-10.00..10.00),
    latitude: 87.6298 + rand(-10.00..10.00), 
    web_address: 'www.' + Faker::Restaurant.name + '.com', 
    phone_number: Faker::PhoneNumber.cell_phone, 
    business_type: 'Restaurant' ,
    business_category: BUSINESS_CAT.sample})
    chi_bus.photo.attach(io: File.open("/Users/rusticair-9/Desktop/coding/app_academy/CheckRev/CheckRev/app/assets/images/logo.png"), filename: "logo.png")
        
        
ny_bus = Business.create({
    name: Faker::Restaurant.name,
    address_1: rand(1..999).to_s + Faker::Address.street_name, 
    address_2: Faker::Address.secondary_address, 
    city: 'San Francisco', 
    state: 'CA', 
    zipcode: Faker::Number.number(digits: 5), 
    longitude: 40.7128 + rand(-10.00..10.00),
    latitude: 74.0060 + rand(-10.00..10.00), 
    web_address: 'www.' + Faker::Restaurant.name + '.com', 
    phone_number: Faker::PhoneNumber.cell_phone, 
    business_type: 'Restaurant' ,
    business_category: BUSINESS_CAT.sample})
    ny_bus.photo.attach(io: File.open("/Users/rusticair-9/Desktop/coding/app_academy/CheckRev/CheckRev/app/assets/images/logo.png"), filename: "logo.png")
            
            
            
phx_bus = Business.create({
    name: Faker::Restaurant.name,
    address_1: rand(1..999).to_s + Faker::Address.street_name, 
    address_2: Faker::Address.secondary_address, 
    city: 'San Francisco', 
    state: 'CA', 
    zipcode: Faker::Number.number(digits: 5), 
    longitude: 33.4484 + rand(-10.00..10.00),
    latitude: 112.0740 + rand(-10.00..10.00), 
    web_address: 'www.' + Faker::Restaurant.name + '.com', 
    phone_number: Faker::PhoneNumber.cell_phone, 
    business_type: 'Restaurant' ,
    business_category: BUSINESS_CAT.sample})
    phx_bus.photo.attach(io: File.open("/Users/rusticair-9/Desktop/coding/app_academy/CheckRev/CheckRev/app/assets/images/logo.png"), filename: "logo.png")
                
                
                
sf_bus = Business.create({
    name: Faker::Restaurant.name,
    address_1: rand(1..999).to_s + Faker::Address.street_name, 
    address_2: Faker::Address.secondary_address, 
    city: 'Pheonix', 
    state: 'AZ', 
    zipcode: Faker::Number.number(digits: 5), 
    longitude: 33.4484 + rand(-10.00..10.00),
    latitude: 74.0060 + rand(-10.00..10.00), 
    web_address: 'www.' + Faker::Restaurant.name + '.com', 
    phone_number: Faker::PhoneNumber.cell_phone, 
    business_type: 'Restaurant' ,
    business_category: BUSINESS_CAT.sample})
    sf_bus.photo.attach(io: File.open("/Users/rusticair-9/Desktop/coding/app_academy/CheckRev/CheckRev/app/assets/images/logo.png"), filename: "logo.png")
                    
stl_bus = Business.create({
    name: Faker::Restaurant.name,
    address_1: rand(1..999).to_s + Faker::Address.street_name, 
    address_2: Faker::Address.secondary_address, 
    city: 'Pheonix', 
    state: 'AZ', 
    zipcode: Faker::Number.number(digits: 5), 
    longitude: 38.6270 + rand(-10.00..10.00),
    latitude: 90.1994 + rand(-10.00..10.00), 
    web_address: 'www.' + Faker::Restaurant.name + '.com', 
    phone_number: Faker::PhoneNumber.cell_phone, 
    business_type: 'Restaurant' ,
    business_category: BUSINESS_CAT.sample})
    stl_bus.photo.attach(io: File.open("/Users/rusticair-9/Desktop/coding/app_academy/CheckRev/CheckRev/app/assets/images/logo.png"), filename: "logo.png")
                        
                        
