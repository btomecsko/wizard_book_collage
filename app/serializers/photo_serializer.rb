class PhotoSerializer < ActiveModel::Serializer
  attributes :name, :image, :date
  belongs_to :wizard
  belongs_to :book
end
