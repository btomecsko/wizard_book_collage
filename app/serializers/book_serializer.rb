class BookSerializer < ActiveModel::Serializer
  attributes :name, :description
  has_many :photos
  has_many :wizards
end
