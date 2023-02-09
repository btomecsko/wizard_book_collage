class CreatePhotos < ActiveRecord::Migration[6.1]
  def change
    create_table :photos do |t|
      t.string :name
      t.string :image
      t.date :date
      t.integer :wizard_id
      t.integer :book_id

      t.timestamps
    end
  end
end
