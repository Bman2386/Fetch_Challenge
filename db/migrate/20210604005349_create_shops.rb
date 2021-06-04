class CreateShops < ActiveRecord::Migration[5.2]
  def change
    create_table :shops do |t|
      t.string :shop_name, null: false
      t.integer :shop_points
      t.timestamps
    end
  end
end
