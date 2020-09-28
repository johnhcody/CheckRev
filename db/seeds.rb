# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

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
    business_category: 'Professional Services'})

bus5 = Business.create({
    name: 'jc web dev', 
    address_1: '193 county st', 
    address_2: 'unit 4', 
    city: 'San Francisco', 
    state: 'CA', zipcode: 85001, 
    longitude: 37.7749, 
    latitude: 122.4194, 
    web_address: 'jhc.com', 
    phone_number: '684-938-4279', 
    business_type: 'Web Development', 
    business_category: 'Professional Services'})

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