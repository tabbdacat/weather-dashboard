function getApi(city) {
    // var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=honolulu&appid=ef86c0944076d1643a343ec8b308ba52';
var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=ef86c0944076d1643a343ec8b308ba52';


fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        console.log(data.city.name);
        console.log(data.list[0].wind.speed);
        console.log(data.list[0].main.temp);
        console.log(data.list[0].main.humidity);
        console.log(data.list[0].dt_txt);

        // let weatherDisplay = document.querySelectorAll(".hide");
        // weatherDisplay.classList.remove("hide");

let currentTempResponse = data.list[0].main.temp;
let currentCity = data.city.name;
let currentCountry = data.city.country;
let currentHumidityData = data.list[0].main.humidity;
let currentWindData = data.list[0].wind.speed;
let icon = data.list[0].weather[0].icon;

currentTemp.textContent = currentTempResponse;
convertKelvinToFahrenheit(currentTempResponse);

weatherIcon[0].setAttribute("src", "https://openweathermap.org/img/wn/" + icon + "@2x.png");
currentLocation.textContent = currentCity + ", " + currentCountry;
currentHumidity.textContent = "Hum: " + currentHumidityData + "%";
currentWind.textContent = "Wind: " + currentWindData + " mph";


let dayTwoTempResponse = data.list[7].main.temp;
let dayTwoHumidityData = data.list[7].main.humidity;
let dayTwoWindData = data.list[7].wind.speed;
let dayTwoicon = data.list[7].weather[0].icon;
weatherIcon[1].setAttribute("src", "https://openweathermap.org/img/wn/" + dayTwoicon + "@2x.png");
dayTwoHumidity.textContent = "Hum: " + dayTwoHumidityData + "%";
dayTwoWind.textContent = "Wind: " + dayTwoWindData + " mph";

dayTwoTemp.textContent = dayTwoTempResponse;
convertKelvinToFahrenheit(dayTwoTempResponse);

// weatherIcon[0].setAttribute("src", "https://openweathermap.org/img/wn/" + icon + "@2x.png");
// currentLocation.textContent = currentCity + ", " + currentCountry;
// currentHumidity.textContent = "Hum: " + currentHumidityData + "%";
// currentWind.textContent = "Wind: " + currentWindData + " mph";

    });

}
const searchBtn = document.querySelector("#search-btn");
let cityInput = document.querySelector("#city-input");


searchBtn.addEventListener("click", function() {
  console.log("click!");
  let city = cityInput.value.trim();

  console.log(city);

  getApi(city);
});

let weatherIcon = document.querySelectorAll("img");
let currentTemp = document.querySelector("#current-temp");
let currentLocation = document.querySelector("#current-location");
let currentHumidity = document.querySelector("#current-humidity");
let currentWind = document.querySelector("#current-wind");
let dayTwoTemp = document.querySelector("#day-two-temp");
let dayTwoHumidity = document.querySelector("#day-two-humidity");
let dayTwoWind = document.querySelector("#day-two-wind");

// Source: https://codepen.io/CorbinMB/pen/OBXjMj
function convertKelvinToFahrenheit(x) {
    const kelvin = x;
    // Converting kelvin to celsius by subtracting 273.
    const celsius = kelvin - 273;
    // Conversion to fahrenheit.
    let fahrenheit = celsius * ( 9 / 5 ) + 32;
    // This rounds the fahrenheit temparture.
    fahrenheit = Math.floor(fahrenheit);
    // Print to console.
    console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

    currentTemp.textContent = fahrenheit + "° F";
    dayTwoTemp.textContent = fahrenheit + "° F";
}
// function getGeocodeAPI() {
//     let requestUrlTwo = 'http://api.openweathermap.org/geo/1.0/direct?q=Wahiawa,hi,us&appid=ef86c0944076d1643a343ec8b308ba52';

//     fetch(requestUrlTwo)
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (data) {
//         console.log(data);
//     });
// }

// getGeocodeAPI()

// Adds code to display the current date 
let $today = dayjs();
console.log($today);
$('#current-day').text($today.format('MMMM D, YYYY'));

$('#day-two').text($today.add(1, 'day').format('M/D'));
$('#day-three').text($today.add(2, 'day').format('M/D'));
$('#day-four').text($today.add(3, 'day').format('M/D'));
$('#day-five').text($today.add(4, 'day').format('M/D'));