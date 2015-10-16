require 'webrick'
require 'json'

port = ENV['PORT'].nil? ? 4505 : ENV['PORT'].to_i

puts "Server started: http://localhost:#{port}/"

root = File.expand_path '.'
server = WEBrick::HTTPServer.new Port: port, DocumentRoot: root

trap('INT') { server.shutdown }

server.start
