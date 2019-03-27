require 'net/http'
require 'json'

def get_predictions(bus_number, stop_number)
    uri = URI("http://webservices.nextbus.com/service/publicJSONFeed?command=predictions&a=sf-muni&r=#{bus_number}&s=#{stop_number}")
    JSON.parse(Net::HTTP.get(uri))
end

five_predictions = get_predictions('5', 4224)&.dig('predictions')&.dig('direction')&.dig('prediction')
five_r_predictions = get_predictions('5R', 4224)&.dig('predictions')&.dig('direction')&.dig('prediction')

times = []
(five_predictions + five_r_predictions).each do |prediction|
    times.append(prediction['minutes'].to_i)
end

p times.sort

#five_predictions&.dig('predictions')&.dig('direction')&.dig('prediction')[0]&.dig('minutes')

#http://webservices.nextbus.com/service/publicXMLFeed?command=predictions&a=sf-muni&r=5&s=4224