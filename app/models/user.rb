# == Schema Information
#
# Table name: users
#
#  id             :bigint           not null, primary key
#  first_name     :string           not null
#  last_name      :string           not null
#  email          :string           not null
#  zipcode        :integer          not null
#  password_diges :string           not null
#  session_token  :string           not null
#  birthdate      :datetime
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
class User < ApplicationRecord
end
