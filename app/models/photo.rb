class Photo < ApplicationRecord
    belongs_to :wizard
    belongs_to :book

    validates :image, presence: true
end
