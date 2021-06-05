class Point < ApplicationRecord
    validates :points_available, :owner_id, :payer, :payer_id, presence: true
    
    belongs_to :user

    belongs_to :shop
end
