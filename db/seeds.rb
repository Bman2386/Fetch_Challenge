# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Point.delete_all
User.delete_all
Shop.delete_all

guest = User.create({
    username: 'Guest',
    password: 'hunter12',
})

amex = Shop.create({
    id: 1,
    shop_name: 'American Express'
})

b_of_a = Shop.create({
    id: 2,
    shop_name: 'Bank of America'
})

citi = Shop.create({
    id: 3,
    shop_name: 'Citibank'
})

chase = Shop.create({
    id: 4,
    shop_name: 'Chase Bank'
})
visa = Shop.create({
    id: 5,
    shop_name: 'Visa'
})

discover = Shop.create({
    id: 6,
    shop_name: 'Discover'
})

wells_fargo = Shop.create({
    id: 7,
    shop_name: 'Wells Fargo'
})