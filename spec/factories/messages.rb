FactoryBot.define do
  factory :message do
    content { Faker::HarryPotter.quote }
    room
  end
end
