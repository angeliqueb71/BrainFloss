class HomeController < ApplicationController
  def index
    @apis = api.all
    @confact = api.where(category: "confucius").shuffle.first

    @anifact = api.where(category: "animal").shuffle.first

    @proverb = api.where(category: "proverbs").shuffle.first

    @socfact = api.where(category: "socrates").shuffle.first

    @haifact = api.where(category: "haiku").shuffle.first
  end
  def new
    @api = api.new
  end

  def create
    api = api.new(
    type: params[:fact][:type],
    content: params[:fact][:content]
  )
  end
end
