Rails.application.routes.draw do
  
  resources :photos, only: [:index, :show, :create, :update] 
  resources :books, only: [:index, :show, :create, :update]
  resources :wizards, only: [:index, :show, :create, :update, :destroy]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
