require 'mysql2'
require 'sinatra'

# This is obv not best practice to have the PW on here, but whatevs, this db will be down after this is over :)
@@mysqlclient = Mysql2::Client.new(:host => "whacktest.ced345elx9gg.us-west-2.rds.amazonaws.com", :username => "whack", :database => "whackplant", :password => "wh4ck3rs")

get '/' do
  erb :index
end

# Shows the users on the screen
get '/users/' do
  res = Array.new
  result = @@mysqlclient.query("SELECT id, username FROM users",:as => :array)
  result.each do | uid,name |
    res.push(uid)
    res.push(name)
  end
  return res.to_s
end
