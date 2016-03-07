class AsyncLiveController < ApplicationController
  include ActionController::Live

  def index
    response.headers['Content-Type'] = 'application/json'
    delay = rand(4..10)
    sleep(delay)
    response.stream.write({delay: delay}.to_json)
  ensure
    response.stream.close
  end
end
