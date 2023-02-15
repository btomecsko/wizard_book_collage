class Book < ApplicationRecord
    has_many :photos
    has_many :wizards, through: :photos

    validates :name, presence: true
end
