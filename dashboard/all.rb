require 'net/http'
require 'json'

class Hash
    def deep_find(key, object=self, found=[])
        if object.respond_to?(:key?) && object.key?(key)
            found << object[key]
            return found.flatten
        elsif object.is_a? Enumerable
            object.each { |*a| deep_find(key, a.last, found) }
            return found.flatten
        end
    end
end

def get_predictions(bus_number, stop_number)
    uri = URI("http://webservices.nextbus.com/service/publicJSONFeed?command=predictions&a=sf-muni&r=#{bus_number}&s=#{stop_number}")
    predictions = JSON.parse(Net::HTTP.get(uri)).deep_find("prediction")
    z = predictions.map { |p| {bus_number => p&.dig('minutes')&.to_i } }
    z.sort_by { |hsh| hsh[bus_number] }
end

five_predictions = get_predictions('5', 4224)
five_r_predictions = get_predictions('5R', 4224)

times = []
(five_predictions + five_r_predictions).each do |prediction|
    times.append(prediction['minutes'].to_i)
end

p times.sort

#five_predictions&.dig('predictions')&.dig('direction')&.dig('prediction')[0]&.dig('minutes')

#http://webservices.nextbus.com/service/publicXMLFeed?command=predictions&a=sf-muni&r=5&s=4224