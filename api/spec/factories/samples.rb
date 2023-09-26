FactoryBot.define do
  factory :sample do
    name { Faker::Name.name }
  end
end
