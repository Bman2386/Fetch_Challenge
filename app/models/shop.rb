class Shop < ApplicationRecord
    validates :shop_name, presence: true
    
    has_many :points,
        foreign_key: :payer_id
end
