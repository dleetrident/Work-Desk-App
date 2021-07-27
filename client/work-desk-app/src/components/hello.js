import React, {useState,useEffect} from "react"

export const Hello = function(){
const [state,setState] = useState([])
const [weather,setWeather] = useState({
"coord": {
"lon": 0,
"lat": 0
},
"weather": [
{
"id": 0,
"main": "",
"description": "",
"icon": ""
}
],
"base": "",
"main": {
"temp": 0,
"feels_like": 0,
"temp_min": 0,
"temp_max": 0,
"pressure": 0,
"humidity": 0
},
"visibility": 0,
"wind": {
"speed": 0,
"deg": 0
},
"clouds": {
"all": 0
},
"dt": 0,
"sys": {
"type": 0,
"id": 0,
"country": "",
"sunrise": 0,
"sunset": 0
},
"timezone": 0,
"id": 0,
"name": "",
"cod": 0
})
useEffect(function(){
  fetch("/api/").then(res => {
    if(res.ok){
      return res.json()
    }
  }).then(jsonResponse => setState(jsonResponse))
},[])
fetch(state.hello)
  .then(response => response.json())
  .then(data => setWeather(data));


return (<div>{weather.main.temp}</div>)
}
