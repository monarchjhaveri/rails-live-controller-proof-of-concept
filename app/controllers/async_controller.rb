class AsyncController < ApplicationController
  def index
    delay = rand(1..10)
    sleep(delay)
    render json: {delay: delay}
  end
end
