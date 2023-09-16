function getApi(city) {
    // var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=honolulu&appid=ef86c0944076d1643a343ec8b308ba52';
var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=imperial&appid=ef86c0944076d1643a343ec8b308ba52';


fetch(requestUrl)
      .then(function (response) {
        // alert if fetch response not successful
        if (response.status !== 200) {
          alert("Data could not be found. Please try again.");
          return null;
        }
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
let currentHumidityData = data.list[0].main.humidity;
let currentWindData = data.list[0].wind.speed;
let icon = data.list[0].weather[0].icon;


weatherIcon[0].setAttribute("src", "https://openweathermap.org/img/wn/" + icon + "@2x.png");
currentLocation.textContent = currentCity + ", " + currentCountry;
currentHumidity.textContent = "Hum: " + currentHumidityData + "%";
currentWind.textContent = "Wind: " + Math.round(currentWindData) + " mph";
currentTemp.textContent = Math.round(currentTempResponse) + "° F";

let dayOneTempResponse = data.list[7].main.temp;
let dayOneHumidityData = data.list[7].main.humidity;
let dayOneWindData = data.list[7].wind.speed;
let dayOneicon = data.list[7].weather[0].icon;
weatherIcon[1].setAttribute("src", "https://openweathermap.org/img/wn/" + dayOneicon + "@2x.png");
dayOneHumidity.textContent = "Hum: " + dayOneHumidityData + "%";
dayOneWind.textContent = "Wind: " + Math.round(dayOneWindData) + " mph";
dayOneTemp.textContent = Math.round(dayOneTempResponse) + "° F";


let dayTwoTempResponse = data.list[15].main.temp;
let dayTwoHumidityData = data.list[15].main.humidity;
let dayTwoWindData = data.list[15].wind.speed;
let dayTwoicon = data.list[15].weather[0].icon;
weatherIcon[2].setAttribute("src", "https://openweathermap.org/img/wn/" + dayTwoicon + "@2x.png");
dayTwoHumidity.textContent = "Hum: " + dayTwoHumidityData + "%";
dayTwoWind.textContent = "Wind: " + Math.round(dayTwoWindData) + " mph";
dayTwoTemp.textContent = Math.round(dayTwoTempResponse) + "° F";


let dayThreeTempResponse = data.list[23].main.temp;
let dayThreeHumidityData = data.list[23].main.humidity;
let dayThreeWindData = data.list[23].wind.speed;
let dayThreeicon = data.list[23].weather[0].icon;
weatherIcon[3].setAttribute("src", "https://openweathermap.org/img/wn/" + dayThreeicon + "@2x.png");
dayThreeHumidity.textContent = "Hum: " + dayThreeHumidityData + "%";
dayThreeWind.textContent = "Wind: " + Math.round(dayThreeWindData) + " mph";
dayThreeTemp.textContent = Math.round(dayThreeTempResponse) + "° F";


let dayFourTempResponse = data.list[31].main.temp;
let dayFourHumidityData = data.list[31].main.humidity;
let dayFourWindData = data.list[31].wind.speed;
let dayFouricon = data.list[31].weather[0].icon;
weatherIcon[4].setAttribute("src", "https://openweathermap.org/img/wn/" + dayFouricon + "@2x.png");
dayFourHumidity.textContent = "Hum: " + dayFourHumidityData + "%";
dayFourWind.textContent = "Wind: " + Math.round(dayFourWindData) + " mph";
dayFourTemp.textContent = Math.round(dayFourTempResponse) + "° F";


let dayFiveTempResponse = data.list[39].main.temp;
let dayFiveHumidityData = data.list[39].main.humidity;
let dayFiveWindData = data.list[39].wind.speed;
let dayFiveicon = data.list[39].weather[0].icon;
console.log(dayFiveicon);
weatherIcon[5].setAttribute("src", "https://openweathermap.org/img/wn/" + dayFiveicon + "@2x.png");
dayFiveHumidity.textContent = "Hum: " + dayFiveHumidityData + "%";
dayFiveWind.textContent = "Wind: " + Math.round(dayFiveWindData) + " mph";
dayFiveTemp.textContent = Math.round(dayFiveTempResponse) + "° F";


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
  displayWeather();
  getApi(city);
});

function displayWeather() {
let forecastBoxes = document.querySelector(".forecast");
forecastBoxes.classList.remove("hide");
}

let weatherIcon = document.querySelectorAll(".img");
let currentTemp = document.querySelector("#current-temp");
let currentLocation = document.querySelector("#current-location");
let currentHumidity = document.querySelector("#current-humidity");
let currentWind = document.querySelector("#current-wind");
let dayOneTemp = document.querySelector("#day-one-temp");
let dayOneHumidity = document.querySelector("#day-one-humidity");
let dayOneWind = document.querySelector("#day-one-wind");
let dayTwoTemp = document.querySelector("#day-two-temp");
let dayTwoHumidity = document.querySelector("#day-two-humidity");
let dayTwoWind = document.querySelector("#day-two-wind");
let dayThreeTemp = document.querySelector("#day-three-temp");
let dayThreeHumidity = document.querySelector("#day-three-humidity");
let dayThreeWind = document.querySelector("#day-three-wind");
let dayFourTemp = document.querySelector("#day-four-temp");
let dayFourHumidity = document.querySelector("#day-four-humidity");
let dayFourWind = document.querySelector("#day-four-wind");
let dayFiveTemp = document.querySelector("#day-five-temp");
let dayFiveHumidity = document.querySelector("#day-five-humidity");
let dayFiveWind = document.querySelector("#day-five-wind");


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
$('#day-one').text($today.add(1, 'day').format('M/D'));
$('#day-two').text($today.add(2, 'day').format('M/D'));
$('#day-three').text($today.add(3, 'day').format('M/D'));
$('#day-four').text($today.add(4, 'day').format('M/D'));
$('#day-five').text($today.add(5, 'day').format('M/D'));