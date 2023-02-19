class WizardSerializer < ActiveModel::Serializer
  attributes :first, :last, :house, :username, :password_digest
  has_many :photos
  has_many :books
end
