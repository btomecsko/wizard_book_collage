class BookSerializer < ActiveModel::Serializer
  attributes :id, :name, :description
  has_many :photos
  has_many :wizards
end
