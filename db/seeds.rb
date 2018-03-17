# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

5.times do
  Room.create(name: Faker::Beer.name)
end

rooms = Room.all

rooms.each do |room|
  12.times do
    Message.create(content: Faker::HarryPotter.quote, room: room)
  end
end

messages = Message.all

puts "created #{rooms.length} Rooms"
puts "created #{messages.length} Messages"