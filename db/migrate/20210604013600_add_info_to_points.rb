class AddInfoToPoints < ActiveRecord::Migration[5.2]
  def change
    add_column :points, :payer, :string
    add_column :points, :payer_id, :integer
  end
end
