module RequestSpecHelper
  # Parse JSON response to ruby hash
  def json_data
    json = JSON.parse(response.body)["data"]
    if json.is_a?(Hash)
      json.deep_symbolize_keys
    elsif json.is_a?(Array)
      json.map {|x| x.deep_symbolize_keys }
    end
  end

end