Rails.application.routes.draw do
  scope :api do
    mount_devise_token_auth_for 'User', at: 'auth'
    resources :rooms do
      resources :messages
    end
  end
end
