require 'sinatra'
require 'json'

get '/' do
  erb :index
end

post '/update' do
  data = JSON.parse request.body.read
  "Hello #{data['username']}!"
end
