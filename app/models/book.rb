class Book < ApplicationRecord
    has_many :photos, dependent: :destroy
    has_many :wizards, through: :photos

    validates :name, presence: true, uniqueness: true
end
