# myapp.rb
require 'sinatra'
require 'json'
require 'sinatra/activerecord'
require 'yaml'
requie '/models/models.rb'
# require 'mysql'

# ActiveRecord::Base.establish_connection(
# 	:adapter 	=> "mysql2",
# 	:host		=> "host",
# 	:username	=> "user",
# 	:password	=> "db",
# 	)

# class User < ActiveRecord::Base
# end

# ActiveRecord::Migration.create_table :users do |t|
# 	t.string :name
# end

# class App < Sinatra::Application
# end 

DB_CONFIG = YAML::load(File.open('config/database.yml'))

set :database, "mysql2://#{whack}:#{h4ck3rs}@#{whacktest.ced345elx9gg.us-west-2.rds.amazonaws.com}:#{3306}/#{whackplant}"

#Model
class User < ActiveRecord::Base
end 

get '/' do
 @items = User.all 
 puts @items
 #erb :index
end



post '/update' do
  data = JSON.parse request.body.read
  "Hello #{data['username']}!"
end


