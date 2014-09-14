class AddPhonenumberToSlideshow < ActiveRecord::Migration
  def change
    add_column :slideshows, :phonenumber, :string
  end
end
