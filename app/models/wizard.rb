class Wizard < ApplicationRecord
    has_many :photos
    has_many :books, through: :photos

    validates :house, inclusion: {in: ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin']}
end
