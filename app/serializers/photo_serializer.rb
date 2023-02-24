class PhotoSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :date
  belongs_to :wizard
  belongs_to :book
end
