class ChangeWizardBookIdInPhotos < ActiveRecord::Migration[6.1]
  def change
    change_column :photos, :wizard_id, :belongs_to
    change_column :photos, :book_id, :belongs_to
  end
end
