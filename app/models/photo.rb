class Photo < ApplicationRecord
    belongs_to :wizard
    belongs_to :book
end
