# == Schema Information
#
# Table name: users
#
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
#
class User < ApplicationRecord

    validates :first_name, presence: { message: " - Please input your first name" }
    validates :last_name, presence: { message: " - Please input your last name" }
    validates :email, presence: { message: " - Please input your email" }
    validates :email, uniqueness: { message: " - A username with the email already exists"}
    validates :password, length: { 
        minimum: 6,
        message: " - Password must be at least 6 characters long",
        allow_nil: true } 
    validates :zipcode, presence: { message: " - Please input your last name" }
    validates :birthdate, presence: { message: " - Please input your birthday (MM/DD/YYYY)" }
    validates :password_digest, :session_token, presence: true

    after_initialize :ensure_session_token

    attr_reader :password

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        (user && user.is_password?(password)) ? user : nil
    end

    def password=(password) 
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_session_token 
        self.session_token ||= SecureRandom.urlsafe_base64(16)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64(16)
        self.save!
        self.session_token
    end

end
