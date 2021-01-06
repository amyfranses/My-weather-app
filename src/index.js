let now = new Date();

let h2 = document.querySelector("h2");

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();

let days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
let day = days[now.getDay()];
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec"
];
let month = months[now.getMonth()];
h2.innerHTML = `${day} ${month} ${date}, ${hours}:${minutes}, ${year}`;

//WEEK 5 HOMEWORK

let apiKey = "da1d328f018f16ec1bc2ba618e2314d8";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

function showTemperature(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = `Temperature ${temperature}°C`;
  let description = response.data.weather[0].main;
  let descriptionElement = document.querySelector("#today-description");
  descriptionElement.innerHTML = `${description}`;
  let humidity = Math.round(response.data.main.humidity);
  let humidityElement = document.querySelector("#today-humidity");
  humidityElement.innerHTML = `Humidity ${humidity}% `;
  let wind = Math.round(response.data.wind.speed);
  let windElement = document.querySelector("#today-wind");
  windElement.innerHTML = `Wind speed ${wind} km/hr`;
}

function searchCity(city) {
  let apiKey = "da1d328f018f16ec1bc2ba618e2314d8";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}
function handleCitySubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-city-input");
  searchCity(searchInput.value);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", handleCitySubmit);

searchCity("Vancouver");



