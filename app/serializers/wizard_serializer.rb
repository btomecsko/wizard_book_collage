class WizardSerializer < ActiveModel::Serializer
  attributes :first, :last, :house, :username
  has_many :photos
  has_many :books
end
