class AddWizardIdInPhotos < ActiveRecord::Migration[6.1]
  def change
    add_column :photos, :wizard_id, :belongs_to
  end
end
