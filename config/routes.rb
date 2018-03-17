Rails.application.routes.draw do
  scope :api do
    resources :rooms do
      resources :messages
    end
  end
end
