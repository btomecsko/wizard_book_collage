class PhotoSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :date, :wizard_id, :book_id
end
