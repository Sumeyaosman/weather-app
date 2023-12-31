function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[day];
}

function displayForecast(response){
 

  let forecast = response.data.daily;
 console.log(forecast);
  let forecastElement= document.querySelector("#forecast");
  let forecastHTML = `<div class ="row">`;

 
  forecast.forEach (function(forecastDay, index){
    if (index < 6){

 forecastHTML = 
 forecastHTML + 
 `
  <div class="col-2">
    <div class="forecast-day"> ${formatDay(forecastDay.dt)}</div>
    <img
    src="https://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png"
    alt=""
    width="36"/>
 
  <div class="forecast-temp">
    <span class="temp-max">${Math.round(forecastDay.temp.max)}° </span>
    <span class="temp-min"> ${Math.round(forecastDay.temp.min)}°</span>
  </div>
 </div>
 
 `;
}
  });
 
 forecastHTML=forecastHTML + `</div>`;
 forecastElement.innerHTML = forecastHTML;
 }



 function getForecast(coordinates){

  console.log(coordinates);
    let apiKey = "eae061c95483dd066657bfc7525418ed";
    let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=eae061c95483dd066657bfc7525418ed&units=metric`;
    console.log(apiUrl);
    axios.get(apiUrl).then(displayForecast);
    }
  
  






function displayWeather(response){
    let roundedTemp = document.querySelector("#live-temp,#celcius")
     roundedTemp.innerHTML= Math.round(response.data.main.temp);
    let citys= document.querySelector("#city-name")
    citys.innerHTML=(response.data.name);
     let humidity= document.querySelector("#humidity")
     humidity.innerHTML=response.data.main.humidity;
    let wind= document.querySelector("#wind");
    wind.innerHTML=Math.round(response.data.wind.speed);
    let description = document.querySelector("h2,#description")
    description.innerHTML=(response.data.weather[0].main);
    let icon = document.querySelector("#icon");
    console.log(response.data.weather[0].icon)
    icon.setAttribute( "src",
    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@4x.png`)
    icon.setAttribute("alt",response.data.weather[0].description);
    celsiusTemperature= response.data.main.temp;

    getForecast(response.data.coord);

   }
 
 function searchLocation(position){
   let apiKey = "eae061c95483dd066657bfc7525418ed";
   let latitude=position.coords.latitude;
   let longitude=position.coords.longitude;
 let apiUrl= `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=eae061c95483dd066657bfc7525418ed&units=metric`;
   axios.get(apiUrl).then(displayWeather);
 }
 
 
 function displayLocation(event){
   event.preventDefault()
   navigator.geolocation.getCurrentPosition(searchLocation);
 }
 
 let currentLocation = document.querySelector("#current-location-button")
 currentLocation.addEventListener("click",displayLocation);
 
 
 
 
 
 
   
 
 
 
   function searchCity(city){   
     let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=eae061c95483dd066657bfc7525418ed&units=metric`;
     let apiKey = "eae061c95483dd066657bfc7525418ed";
     axios.get(apiUrl).then(displayWeather);
       }
       
 
   
      
   function press(event) {
     event.preventDefault();
     let city = document.querySelector("#city-input").value;
     searchCity(city);
      }
     
     
      let searchForm = document.querySelector("#search-form");
       searchForm.addEventListener("submit",press);
 

       searchCity("Italy") 

   
   
 
 //convert
 
 function changefahrenheit(event){
 event.preventDefault();
 celsiusLink.classList.remove("active");
 fahrenheitlink.classList.add("active");
 let fahrenheittemp= (celsiusTemperature * 9)/ 5 +32
 let temperature = document.querySelector("#live-temp");
 temperature.innerHTML= Math.round(fahrenheittemp);
 }
 
 function changecelius(event){
 event.preventDefault();
 celsiusLink.classList.add("active");
 fahrenheitlink.classList.remove("active");
 let temperature= document.querySelector("#live-temp");
 temperature.innerHTML = Math.round(celsiusTemperature);
 }
 
 
 
 
 let celsiusLink= document.querySelector("#celuis-link")
 celsiusLink.addEventListener("click", changecelius )
 
 
 let celsiusTemperature = null ;

 
 let fahrenheitlink= document.querySelector("#fareheint-link");
 fahrenheitlink.addEventListener("click",changefahrenheit);
 
 




  




 
