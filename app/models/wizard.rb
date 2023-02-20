class Wizard < ApplicationRecord
    has_many :photos
    has_many :books, through: :photos

    #Add dependent: :destroy to photos above if deleting User is enabled

    has_secure_password

    validates :house, inclusion: {in: ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin']}
    validates :username, presence: true, uniqueness: true
    validates :first, presence: true
end
