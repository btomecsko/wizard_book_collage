class WizardSerializer < ActiveModel::Serializer
  attributes :id, :first, :last, :house, :username, :password_digest
end
