# This was written to simplify a workflow of manually matching APN data in a csv. This uses the LA city API to get geom map data by APN and ads the data to a csv.

require 'csv'
require 'httparty'
require 'json'

url = ENV['csv_url']
csv = CSV.read(url, :headers=>true)

def get_geom_data_from_api(apn) do
  api_url = "https://data.lacity.org/resource/sa2q-dxtv.json?bpp=#{apn}"
  response = HTTParty.get(api_url)
  case response.code
    when 200
      body = JSON.parse(response.body)
      if body.length > 0
        geom = body[0]['the_geom']
      else
        geom = ''
      end
    when 404
      puts "lacity api endpoint not found."
      geom = ''
    when 500...600
      puts "lacity API error #{response.code}"
      geom = ''
  end
  # geom string.....
  gstring = geom.to_s
  return gstring
end

# Loop through each row in the CSV
csv.each do |row|
  apn = row["APN"].gsub('-','')
  geom = get_geom_data_from_api(apn)
  g = geom.gsub('\"', "'")
  # write to new "geom" header for each row, and change from ruby to json. The JSON parser does not like the geom response as a hash.
  row["geom"] = g.gsub('=>', ':')
end

# write back to original csv file
CSV.open(url, "w") do |f|
  f << csv.headers
  csv.each{|row| f << row}
end
