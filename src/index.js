function formatDate(timestamp){
let date = new Date (timestamp);


let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[date.getDay()];
return `${day} ${formatHours(timestamp)}`;
}

function formatHours(timestamp){
    let date = new Date (timestamp);
let hours = date.getHours();
if(hours < 10){
    hours = `0${hours}`;
}
let minutes = date.getMinutes();
if (minutes < 10){
    minutes = `0${minutes}`;
}
  
return `${hours}:${minutes}`;
}

function displayTemperature(response){

let temperatureElement = document.querySelector("#temperature");
let cityElement = document.querySelector ("#city");
let descriptionElement = document.querySelector ("#description");
let humidityElement = document.querySelector ("#humidity");
let windElement = document.querySelector ("#wind");
let dateElement= document.querySelector ("#date");
let iconElement = document.querySelector ("#icon");

celsiusTemperature = response.data.main.temp;

temperatureElement.innerHTML = Math.round 
(celsiusTemperature);
cityElement.innerHTML = response.data.name;
descriptionElement.innerHTML = response.data.weather[0].description;
humidityElement.innerHTML = response.data.main.humidity;
windElement.innerHTML = Math.round(response.data.wind.speed);
dateElement.innerHTML = formatDate (response.data.dt * 1000);
iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
iconElement.setAttribute("alt", response.data.weather[0].description);
}

function displayForecast(response){
    let forecastElement = document.querySelector("#forecast");
    let forecast =response.data.list[0];

    forecastElement.innerHTML =

     `
    <div class ="col-3">
                       <h4>${formatHours(forecast.dt * 1000)}</h4>
                    <img src=" http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" />
                       <ul>
                           <li>Temp:${Math.round(forecast.main.temp)}°C
                           </li>
                           <li>Humid:${Math.round(forecast.main.humidity)}%
                           </li>
                           <li>Wind:${Math.round(forecast.wind.speed)}km/hr
                            </li>
                       </ul>

                   </div>`;

    forecast =response.data.list[1];
    forecastElement.innerHTML += `
    <div class ="col-3">
                       <h4>${formatHours(forecast.dt * 1000)}</h4>
                    <img src=" http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" />
                       <ul>
                           <li>Temp:${Math.round(forecast.main.temp)}°C
                           </li>
                           <li>Humid:${Math.round(forecast.main.humidity)}%
                           </li>
                           <li>Wind:${Math.round(forecast.wind.speed)}km/hr
                            </li>
                       </ul>
                   </div>`;
     forecast =response.data.list[2];
    forecastElement.innerHTML += `
    <div class ="col-3">
                       <h4>${formatHours(forecast.dt * 1000)}</h4>
                    <img src=" http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" />
                       <ul>
                           <li>Temp:${Math.round(forecast.main.temp)}°C
                           </li>
                           <li>Humid:${Math.round(forecast.main.humidity)}%
                           </li>
                           <li>Wind:${Math.round(forecast.wind.speed)}km/hr
                            </li>
                       </ul>
                   </div>`;   
     forecast =response.data.list[3];
    forecastElement.innerHTML += `
    <div class ="col-3">
                       <h4>${formatHours(forecast.dt * 1000)}</h4>
                    <img src=" http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" />
                       <ul>
                           <li>Temp:${Math.round(forecast.main.temp)}°C
                           </li>
                           <li>Humid:${Math.round(forecast.main.humidity)}%
                           </li>
                           <li>Wind:${Math.round(forecast.wind.speed)}km/hr
                            </li>
                       </ul>
                   </div>`;                         
}



function search(city){
let apiKey = "da1d328f018f16ec1bc2ba618e2314d8";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


axios.get(apiUrl).then(displayTemperature);

apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayForecast);
}

function handleSubmit(event){
    event.preventDefault();
    let cityInputElement = document.querySelector ("#city-input");
    search(cityInputElement.value);
}

function displayFahrenheit(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    let fahrenheitTemperature = (celsiusTemperature*9)/5+32;
    temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

function displayCelsius (event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML= Math.round(celsiusTemperature);
}



let celsiusTemperature = null;

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let fahrenheitLink = document.querySelector ("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheit);

let celsiusLink =document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsius);


search("London");