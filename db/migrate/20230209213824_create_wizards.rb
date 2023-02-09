class CreateWizards < ActiveRecord::Migration[6.1]
  def change
    create_table :wizards do |t|
      t.string :first
      t.string :last
      t.string :house
      t.string :username
      t.string :password_digest

      t.timestamps
    end
  end
end
