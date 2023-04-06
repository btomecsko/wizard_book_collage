Rails.application.routes.draw do
  
  resources :photos 
  resources :books, only: [:index, :show, :create]
  #resources :wizards, only: [:index, :update]

  get "/search/:term", to: "books#search"
  
  get "/wizards/get_names/:length", to: "wizards#get_names"

  #grab the wizards name with 4 charachters or more
  
  post "/signup", to: "wizards#create"
  get "/me", to: "wizards#show"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
