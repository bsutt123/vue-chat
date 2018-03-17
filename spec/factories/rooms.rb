FactoryBot.define do
  factory :room do
    name "Test room"
    factory :room_with_messages do
      transient do
        message_count 10
      end

      after(:create) do |room, evaluator|
        create_list(:message, evaluator.message_count, room: room )
      end
    end
  end
end
