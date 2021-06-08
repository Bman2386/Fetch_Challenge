class Point < ApplicationRecord
    # validates :points_available, :owner_id, :payer, :payer_id, presence: true
    
    belongs_to :user,
        foreign_key: :owner_id
        
    belongs_to :shop,
        foreign_key: :payer_id
end
