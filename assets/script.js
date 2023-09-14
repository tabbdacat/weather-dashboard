function getApi(city) {
    // var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?zip=96786,us&appid=ef86c0944076d1643a343ec8b308ba52';
//       var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?id='+ cityId + '&appid=ef86c0944076d1643a343ec8b308ba52';
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



let currentTempResponse = data.list[0].main.temp;
let currentCity = data.city.name;
let currentCountry = data.city.country;

currentTemp.textContent = currentTempResponse;
convertKelvinToFahrenheit(currentTempResponse);

currentLocation.textContent = currentCity + ", " + currentCountry

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


let currentTemp = document.querySelector("#current-temp");
let currentLocation = document.querySelector("#current-location")

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

    currentTemp.textContent = fahrenheit + " degrees F";
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