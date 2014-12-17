json.array!(@articles) do |article|
  json.extract! article, :id, :title, :context
  json.url article_url(article, format: :json)
end
