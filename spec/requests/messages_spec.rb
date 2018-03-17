require 'rails_helper'

RSpec.describe RoomsController, type: :request do
  let(:room) { create(:room_with_messages, message_count: 10) }
  let(:messages) { room.messages }
  let(:room_id) { room.id }
  let(:first_message) { room.messages.first }
  let(:message_id) { room.messages.first.id }

  describe 'GET messages' do
    before { get "/api/rooms/#{room_id}/messages"}

    it "should return a list of rooms" do
      expect(json_data).not_to be_empty
      expect(json_data.size).to eq(10)
    end

    it "returns a status code 200" do
      expect(response).to have_http_status(200)
    end
  end

  describe 'GET messages/:id' do
    before { get "/api/rooms/#{room_id}/messages/#{message_id}"}

    context 'when the record exists' do
      it 'gets the right record' do
        expect(json_data).not_to be_empty
        expect(json_data[:id]).to eq(message_id.to_s)
      end
    end

    context 'when the record does not exist' do
      let(:message_id) { 1001 }
      it 'responds with a 404' do
        expect(response).to have_http_status(404)
      end
    end
  end

  describe 'POST messages/' do
    before { post "/api/rooms/#{room_id}/messages", params: valid_attributes}
    let(:valid_attributes) { {content: "This is some content"} }

    it "creates a new record" do
      json = json_data
      expect(json).not_to be_empty
      expect(json[:attributes][:content]).to eq(valid_attributes[:content])
    end

    it 'returns a status 201' do
      expect(response).to have_http_status(201)
    end

    context 'invalid attributes' do
      let(:valid_attributes) { { other: "Brady"} }

      it 'does not create a record' do
        expect(json_data[:id]).to be_nil
      end
    end
  end

  describe 'PUT messages/:id' do
    let (:valid_attributes) { { content: "New Content" } }

    context 'message id exists' do
      before { put  "/api/rooms/#{room_id}/messages/#{message_id}" }

      it 'updates the record' do
        expect(response.body).to be_empty
      end

      it 'returns a status code 204' do
        expect(response).to have_http_status(204)
      end
    end
  end

  describe 'DELETE /message/:id' do
    before { delete "/api/rooms/#{room_id}/messages/#{message_id}" }

    it 'returns a status code 204' do
      expect(response).to have_http_status(204)
    end
  end
end