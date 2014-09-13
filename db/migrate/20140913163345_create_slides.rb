class CreateSlides < ActiveRecord::Migration
  def change
    create_table :slides do |t|
      t.text :slide_html
      t.integer :slide_weight
      t.integer :slide_length
      t.references :slideshow, index: true

      t.timestamps
    end
  end
end
