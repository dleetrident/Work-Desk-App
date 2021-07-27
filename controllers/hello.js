exports.hello = function(req,res){
  const query = "London"
  const apiKey = "8802d4272ab9bfc1d6221ad1eb6895ee"
  const unit = "metric"
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&units=" + unit +"&appid=" + apiKey
  res.json({"hello": url})
  }
