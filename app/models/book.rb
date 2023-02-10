class Book < ApplicationRecord
    has_many :photos
    has_many :wizards, through: :photos
end
