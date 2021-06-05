class Shop < ApplicationRecord
    validates :shop_name, :shop_points, presence: true
    
    has_many :points,
        foreign_key: :payer_id
end
