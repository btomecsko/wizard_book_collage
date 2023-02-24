class Wizard < ApplicationRecord
    has_many :photos
    has_many :books, through: :photos

    has_secure_password

    #validators
    validates :house, inclusion: {in: ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin']}
    validates :username, presence: true, uniqueness: true
    validates :first, presence: true
end
