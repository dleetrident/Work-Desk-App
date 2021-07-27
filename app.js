const express = require("express")
const bodyParser = require("body-parser")
const app = express()

const https = require("https")

app.use(bodyParser.urlencoded({extended: true}))

require("dotenv").config()


app.set("view engine","ejs")
app.use("/api/",require("./routes/hello"))

app.post("/",function(req,res){
  const query = req.body.cityName
  const apiKey = "8802d4272ab9bfc1d6221ad1eb6895ee"
  const unit = "metric"
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&units=" + unit +"&appid=" + apiKey
  https.get(url, function(response){
    response.on("data",function(data){
      const weatherData = JSON.parse(data)
      const weatherTemp = Math.round(weatherData.main.temp)
      const weatherDescription = weatherData.weather[0].description
      const weatherLocation = weatherData.name
      const weatherIcon = "http://openweathermap.org/img/wn/" + weatherData.weather[0].icon + "@2x.png"
      res.write("<h1>The weather in " + weatherLocation + " is " + weatherDescription + "</h1>")
  res.write("<p>The temperature is " + weatherTemp + " degrees celcius</p>")
  res.write("<img src='" + weatherIcon + "'></img>")
  res.send()
    })
  })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, function(req,res){
  console.log(`listening on port ${PORT}`)
})
