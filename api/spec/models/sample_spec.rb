require "rails_helper"

RSpec.describe Sample, type: :model do
  describe "validations" do
    subject { build(:sample) }

    # presence: true をテスト
    it 'is valid with a name' do
      expect(subject).to be_valid
    end

    it 'is invalid without a name' do
      subject.name = nil
      expect(subject).to_not be_valid
    end

    # length: { maximum: 20 } をテスト
    it 'is invalid if the name is longer than 20 characters' do
      subject.name = 'a' * 21
      expect(subject).to_not be_valid
    end

    it 'is valid if the name is 20 characters or shorter' do
      subject.name = 'a' * 20
      expect(subject).to be_valid
    end
  end
end
