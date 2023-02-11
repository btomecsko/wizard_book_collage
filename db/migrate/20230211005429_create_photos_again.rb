class CreatePhotosAgain < ActiveRecord::Migration[6.1]
  def change
    create_table :photos do |t|
      t.string :name
      t.string :image
      t.date :date
      t.belongs_to :wizard, null: false, foreign_key: true
      t.belongs_to :book, null: false, foreign_key: true
      t.timestamps
    end
  end
end
