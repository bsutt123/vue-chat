require 'rails_helper'

RSpec.describe Room, type: :model do
  it {should validate_presence_of(:name)}
end
