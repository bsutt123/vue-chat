class MessageSerializer
  include FastJsonapi::ObjectSerializer
  attributes :content
  belongs_to :room
end
