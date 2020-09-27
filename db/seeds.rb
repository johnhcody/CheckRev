# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


test = User.create({ 
     first_name: 'Guest', 
     last_name: 'User', 
     email: 'danny@devito.com', 
     zipcode: '89039', 
     password: 'password', 
     birthdate: '05/04/1990', 
     })


bus = Business.create({
    name: 'jc web dev', 
    address_1: '193 county st', 
    address_2: 'unit 4', 
    city: 'chiang mai', 
    state: 'MA', zipcode: 89384, 
    longitude: 40.7128, 
    latitude: 74.0060, 
    web_address: 'jhc.com', 
    phone_number: '684938279', 
    business_type: 'Web Development', 
    business_category: 'Professional Services'})