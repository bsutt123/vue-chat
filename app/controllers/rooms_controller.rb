class RoomsController < ApplicationController

  before_action :set_room, only: [:show, :update, :destroy]

  def index
    @rooms = Room.all
    json_response(serialize(@rooms))
  end

  def show
    json_response(serialize(@room))
  end

  def create
    @room = Room.create(room_params)
    json_response(serialize(@room), :created)
  end

  def update
    @room.update(room_params) if @room
    head :no_content
  end

  def destroy
    @room.destroy if @room
    head :no_content
  end

  private

  def room_params
    params.permit(:name)
  end

  def serialize(object)
    RoomSerializer.new(object).serialized_json
  end

  def set_room
    @room = Room.find(params[:id])
  end

end
