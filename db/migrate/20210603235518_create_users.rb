class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.integer :points_total
      t.string :password_digest
      t.string :session_token
      t.timestamps
    end
    add_index :users, :username
    add_index :users, :session_token
  end
end
