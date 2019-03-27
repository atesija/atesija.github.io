require 'net/http'
require 'json'

def get_predictions(url)
    uri = URI(url)
    JSON.parse(Net::HTTP.get(uri))#&.dig('prediction')
end

five_predictions = get_predictions('http://webservices.nextbus.com/service/publicJSONFeed?command=predictions&a=sf-muni&r=5&s=4224')
five_r_predictions = get_predictions('http://webservices.nextbus.com/service/publicJSONFeed?command=predictions&a=sf-muni&r=5R&s=4224')

#five_predictions&.dig('predictions')&.dig('direction')&.dig('prediction')[0]&.dig('minutes')