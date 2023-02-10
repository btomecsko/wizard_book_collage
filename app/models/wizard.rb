class Wizard < ApplicationRecord
    has_many :photos
    has_many :books, through: :photos
end
