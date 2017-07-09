Rails.application.routes.draw do

  root '/beauty' => 'beauty#index'
  
  get 'facts/index'
  get 'facts/new'
  get 'home#index'

  get '/life' => 'life#index'

  get '/memory' => 'trivia#index'




  resources :comments

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
