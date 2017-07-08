Rails.application.routes.draw do

  get 'facts/index'

  get 'facts/new'

  root 'home#index'

  get '/life' => 'life#index'

  get '/beauty' => 'beauty#index'

  get '/memory' => 'trivia#index'

  resources :comments

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
