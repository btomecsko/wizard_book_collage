class RemoveWizardBookIdInPhotos < ActiveRecord::Migration[6.1]
  def change
    remove_column :photos, :wizard_id
    remove_column :photos, :book_id
  end
end
