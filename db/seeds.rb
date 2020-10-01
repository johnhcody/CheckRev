# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

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

bus3 = Business.create({ 
    name: 'Debugger Demolition', 
    address_1: '193 county st', 
    address_2: 'unit 4', 
    city: 'Lakeville', 
    state: 'MA', 
    zipcode: 85001, 
    longitude: -70.9723, 
    latitude: 41.81051, 
    web_address: 'jhc.com', 
    phone_number: '684-938-4279', 
    business_type: 'Web Development', 
    business_category: 'Professional Services'})
bus3.photo.attach(io: URI.open("https://checkrev-seeds.s3.ap-northeast-2.amazonaws.com/logo.png"), filename: "logo.png")

bus4 = Business.create({
    name: 'Barry\'s Restaurant', 
    address_1: '193 county st', 
    address_2: 'unit 4', 
    city: 'Pheonix', 
    state: 'AZ', 
    zipcode: 89384, 
    longitude: -112.0773, 
    latitude: 74.0053, 
    web_address: 'jhc.com', 
    phone_number: '684-938-4279', 
    business_type: 'Restaurant', 
    business_category: 'Restauant'})
bus4.photo.attach(io: URI.open("https://checkrev-seeds.s3.ap-northeast-2.amazonaws.com/logo.png"), filename: "logo.png")

bus5 = Business.create({ 
    name: 'Speedy Auto Care', 
    address_1: '193 county st', 
    address_2: 'unit 4', 
    city: 'Lakeville', 
    state: 'MA', 
    zipcode: 85001, 
    longitude: -70.9745, 
    latitude: 41.81017, 
    web_address: 'jhc.com', 
    phone_number: '684-938-4279', 
    business_type: 'Web Development', 
    business_category: 'Professional Services'})
bus5.photo.attach(io: URI.open("https://checkrev-seeds.s3.ap-northeast-2.amazonaws.com/logo.png"), filename: "logo.png")

bus6 = Business.create({
    name: 'The Best Restaurant', 
    address_1: '193 county st', 
    address_2: 'Unit 4', 
    city: 'Pheonix', 
    state: 'AZ', 
    zipcode: 89384, 
    longitude: -112.0771, 
    latitude: 74.0055, 
    web_address: 'jhc.com', 
    phone_number: '684-938-4279', 
    business_type: 'Restaurant', 
    business_category: 'Restauant'})
bus6.photo.attach(io: URI.open("https://checkrev-seeds.s3.ap-northeast-2.amazonaws.com/logo.png"), filename: "logo.png")


