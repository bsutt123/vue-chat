class MessagesController < ApplicationController
  before_action :set_room, only: [:index, :create]
  before_action :set_message, only: [:show, :update, :destroy]


  def index
    @messages = @room.messages
    json_response(serialize(@messages))
  end

  def show
    json_response(serialize(@message))
  end

  def create
    @message = @room.messages.create(message_params)
    json_response(serialize(@message), :created)
  end

  def update
    @message.update(message_params) if @message
    head :no_content
  end

  def destroy
    @message.destroy if @message
    head :no_content
  end

  private

  def message_params
    params.permit(:content)
  end

  def serialize(object)
    MessageSerializer.new(object).serialized_json
  end

  def set_room
    @room = Room.find(params[:room_id])
  end

  def set_message
    @message = Message.find(params[:id])
  end
end
