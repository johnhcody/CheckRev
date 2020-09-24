# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


guest = User.create({ 
                    first_name: 'Guest', 
                    last_name: 'User', 
                    email: 'danny@devito.com', 
                    zipcode: '89039', 
                    password: 'password', 
                    birthdate: '05/04/1990', 
                    })


#  id              :bigint           not null, primary key
#  first_name      :string           not null
#  last_name       :string           not null
#  email           :string           not null
#  zipcode         :integer          not null
#  password_digest :string           not null
#  session_token   :string           not null
#  birthdate       :datetime
#  created_at      :datetime         not null
#  updated_at      :datetime         not null