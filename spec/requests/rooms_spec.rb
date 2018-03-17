require 'rails_helper'

RSpec.describe RoomsController, type: :request do

  let!(:rooms) { create_list(:room, 10) }
  let(:room_id) { rooms.first.id }

  describe "GET /api/rooms" do

    before { get '/api/rooms' }

    it 'returns a list of rooms' do
      expect(json_data).not_to be_empty
      expect(json_data.size).to eq(10)
    end

    it 'returns a status code 200' do
      expect(response).to have_http_status(200)
    end

  end

  describe "GET /api/rooms/:id" do

    before { get "/api/rooms/#{room_id}" }

    context 'when the record exists' do

      it 'gets the right record' do
        expect(json_data).not_to be_empty
        expect(json_data[:id]).to eq(room_id.to_s)
      end

    end

    context "when the record does not exist" do

      let(:room_id) { 100 }

      it 'responds with a 404' do
        expect(response).to have_http_status(404)
      end

    end

    describe "POST /todos" do

      before { post "/api/rooms", params: valid_attributes }
      let(:valid_attributes) { {name: "Brady"} }

      context "valid attributes" do

        it 'creates a new record' do
          json = json_data
          expect(json).not_to be_empty
          expect(json[:attributes][:name]).to eq("Brady")
        end

        it 'returns the right status' do
          expect(response).to have_http_status(201)
        end

      end

      context "invalid attributes" do

        let(:valid_attributes) {{other: "Brady"}}
        it "doesn't create a record" do
          json = json_data
          expect(json[:id]).to be_nil
        end

      end
    end

    describe "PUT /rooms/:id " do
      let(:valid_attributes) { {name: "New Name"}}
      context "valid id to update with" do
        before { put "/api/rooms/#{room_id}", params: {name: "Brady 2"}}

        it 'updates the record' do
          expect(response.body).to be_empty
        end

        it 'returns a status code 204' do
          expect(response).to have_http_status(204)
        end
      end
    end

    describe "DELETE /rooms/:id" do
      before {delete "/api/rooms/#{room_id}"}

      it 'returns a status code 204' do
        expect(response).to have_http_status(204)
      end

    end

  end
end