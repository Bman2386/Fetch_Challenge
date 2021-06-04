class CreatePoints < ActiveRecord::Migration[5.2]
  def change
    create_table :points do |t|
      t.integer :points_available
      t.integer :owner_id, null: false
      t.timestamps
    end
    add_index :points, :points_available
  end
end
