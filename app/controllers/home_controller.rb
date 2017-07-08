class HomeController < ApplicationController
  def index
    @fact = Fact.all
    @confact = Fact.where(category: "confucius").shuffle.first

    @anifact = Fact.where(category: "animal").shuffle.first

    @proverb = Fact.where(category: "proverbs").shuffle.first

    @socfact = Fact.where(category: "socrates").shuffle.first

    @haifact = Fact.where(category: "haiku").shuffle.first
  end

  def new
    @fact = Fact.new
  end

  def create
    @fact = Fact.new(
    type: params[:fact][:type],
    content: params[:fact][:content]
  )
  end
end
