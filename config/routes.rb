Rails.application.routes.draw do
  root to: 'pages#home'

  get "/pages/:page" => "pages#show"
end
