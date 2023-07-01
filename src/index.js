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
 
 
   
   let calendar = new Date();
   let days = [
     "Sunday",
     "Monday",
     "Tuesday",
     "Wednesday",
     "Thursday",
     "Friday",
     "Saturday",
   ];
   let day = days[calendar.getDay()];
   let months = [
     "Jan",
     "Feb",
     "Mar",
     "Apr",
     "May",
     "Jun",
     "Jul",
     "Aug",
     "Sep",
     "Oct",
     "Nov",
     "Dec",
   ];
   let month = months[calendar.getMonth()];
   let date2 = calendar.getDate();
   let year = calendar.getFullYear();
   
   function hours12() {
     return (currentTime.getHours() + 24) % 12 || 12;
   }
   
   let currentTime = new Date();
   let hour = currentTime.getHours();
   if (hour === 10) {
     hour = `${hour}0`;
   }
   let minute = currentTime.getMinutes();
   if (minute < 10) {
     minute = `0${minute}`;
   }
   
   let date = document.querySelector("#current-date");
   date.innerHTML = `${day} | ${month} ${date2} | ${hours12(hour)}:${minute}`;
   
   function formatDay(timestamp) {
     let date = new Date(timestamp * 1000);
     let day = date.getDay();
     let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
     return days[day];
   }
 
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
 
 
 searchCity("Italy")