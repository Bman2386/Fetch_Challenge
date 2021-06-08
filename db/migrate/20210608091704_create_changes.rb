class CreateChanges < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :points_total
    remove_column :shops, :shop_points
  end
end
