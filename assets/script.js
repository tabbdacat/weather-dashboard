const searchBtn = document.querySelector("#search-btn");
let cityInput = document.querySelector("#city-input");
let $today = dayjs();

// Fetches API data for city entered
function getApi(city) {
      // var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=honolulu&appid=ef86c0944076d1643a343ec8b308ba52';
      var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=imperial&appid=ef86c0944076d1643a343ec8b308ba52';

      // fetches info from weather API
      fetch(requestUrl)
            .then(function (response) {
                  // alert if fetch response not successful
                  if (response.status !== 200) {
                        alert("Data could not be found. Please try again.");
                        window.location.reload();
                        return null;
                  }
                  return response.json();
            })
            .then(function (data) {

                  // variables listed coordinating with HTML elements
                  const weatherIcon = document.querySelectorAll(".img");
                  const currentTemp = document.querySelector("#current-temp");
                  const currentLocation = document.querySelector("#current-location");
                  const currentHumidity = document.querySelector("#current-humidity");
                  const currentWind = document.querySelector("#current-wind");
                  const dayOneTemp = document.querySelector("#day-one-temp");
                  const dayOneHumidity = document.querySelector("#day-one-humidity");
                  const dayOneWind = document.querySelector("#day-one-wind");
                  const dayTwoTemp = document.querySelector("#day-two-temp");
                  const dayTwoHumidity = document.querySelector("#day-two-humidity");
                  const dayTwoWind = document.querySelector("#day-two-wind");
                  const dayThreeTemp = document.querySelector("#day-three-temp");
                  const dayThreeHumidity = document.querySelector("#day-three-humidity");
                  const dayThreeWind = document.querySelector("#day-three-wind");
                  const dayFourTemp = document.querySelector("#day-four-temp");
                  const dayFourHumidity = document.querySelector("#day-four-humidity");
                  const dayFourWind = document.querySelector("#day-four-wind");
                  const dayFiveTemp = document.querySelector("#day-five-temp");
                  const dayFiveHumidity = document.querySelector("#day-five-humidity");
                  const dayFiveWind = document.querySelector("#day-five-wind");
                  // Variables listed coordinating with weather data
                  let currentTempResponse = data.list[0].main.temp;
                  let currentCity = data.city.name;
                  let currentCountry = data.city.country;
                  let currentHumidityData = data.list[0].main.humidity;
                  let currentWindData = data.list[0].wind.speed;
                  let icon = data.list[0].weather[0].icon;
                  let dayOneTempResponse = data.list[7].main.temp;
                  let dayOneHumidityData = data.list[7].main.humidity;
                  let dayOneWindData = data.list[7].wind.speed;
                  let dayOneicon = data.list[7].weather[0].icon;
                  let dayTwoTempResponse = data.list[15].main.temp;
                  let dayTwoHumidityData = data.list[15].main.humidity;
                  let dayTwoWindData = data.list[15].wind.speed;
                  let dayTwoicon = data.list[15].weather[0].icon;
                  let dayThreeTempResponse = data.list[23].main.temp;
                  let dayThreeHumidityData = data.list[23].main.humidity;
                  let dayThreeWindData = data.list[23].wind.speed;
                  let dayThreeicon = data.list[23].weather[0].icon;
                  let dayFourTempResponse = data.list[31].main.temp;
                  let dayFourHumidityData = data.list[31].main.humidity;
                  let dayFourWindData = data.list[31].wind.speed;
                  let dayFouricon = data.list[31].weather[0].icon;
                  let dayFiveTempResponse = data.list[39].main.temp;
                  let dayFiveHumidityData = data.list[39].main.humidity;
                  let dayFiveWindData = data.list[39].wind.speed;
                  let dayFiveicon = data.list[39].weather[0].icon;

                  // Main weather box data
                  weatherIcon[0].setAttribute("src", "https://openweathermap.org/img/wn/" + icon + "@2x.png");
                  currentLocation.textContent = currentCity + ", " + currentCountry;
                  currentHumidity.textContent = "Hum: " + currentHumidityData + "%";
                  currentWind.textContent = "Wind: " + Math.round(currentWindData) + " mph";
                  currentTemp.textContent = Math.round(currentTempResponse) + "° F";

                  // Day 1 weather box data
                  weatherIcon[1].setAttribute("src", "https://openweathermap.org/img/wn/" + dayOneicon + "@2x.png");
                  dayOneHumidity.textContent = "Hum: " + dayOneHumidityData + "%";
                  dayOneWind.textContent = "Wind: " + Math.round(dayOneWindData) + " mph";
                  dayOneTemp.textContent = Math.round(dayOneTempResponse) + "° F";

                  // Day 2 weather box data
                  weatherIcon[2].setAttribute("src", "https://openweathermap.org/img/wn/" + dayTwoicon + "@2x.png");
                  dayTwoHumidity.textContent = "Hum: " + dayTwoHumidityData + "%";
                  dayTwoWind.textContent = "Wind: " + Math.round(dayTwoWindData) + " mph";
                  dayTwoTemp.textContent = Math.round(dayTwoTempResponse) + "° F";

                  // Day 3 weather box data
                  weatherIcon[3].setAttribute("src", "https://openweathermap.org/img/wn/" + dayThreeicon + "@2x.png");
                  dayThreeHumidity.textContent = "Hum: " + dayThreeHumidityData + "%";
                  dayThreeWind.textContent = "Wind: " + Math.round(dayThreeWindData) + " mph";
                  dayThreeTemp.textContent = Math.round(dayThreeTempResponse) + "° F";

                  // Day 4 weather box data
                  weatherIcon[4].setAttribute("src", "https://openweathermap.org/img/wn/" + dayFouricon + "@2x.png");
                  dayFourHumidity.textContent = "Hum: " + dayFourHumidityData + "%";
                  dayFourWind.textContent = "Wind: " + Math.round(dayFourWindData) + " mph";
                  dayFourTemp.textContent = Math.round(dayFourTempResponse) + "° F";

                  // Day 5 weather box data
                  console.log(dayFiveicon);
                  weatherIcon[5].setAttribute("src", "https://openweathermap.org/img/wn/" + dayFiveicon + "@2x.png");
                  dayFiveHumidity.textContent = "Hum: " + dayFiveHumidityData + "%";
                  dayFiveWind.textContent = "Wind: " + Math.round(dayFiveWindData) + " mph";
                  dayFiveTemp.textContent = Math.round(dayFiveTempResponse) + "° F";
            });
}

// Event listener uses city entered and calls functions
searchBtn.addEventListener("click", function () {
      let city = cityInput.value.trim();

      getApi(city);
      displayWeather();
      storeCity(city);
      displayCitySaved();
      cityInput.value = '';
});

// displays previously displayed cities
function displayCitySaved() {
      let cityHistory = $("#city-history");
      cityHistory.html('');
      for (var i = 0; i < citySavedArray.length; i++) {
            // the cities in iteration
            const previousCity = $("<p>");
            previousCity.text(citySavedArray[i]);
            previousCity.on("click", function () {
                  console.log($(this).text());
                  getApi($(this).text());
                  displayWeather();
            })
            cityHistory.append(previousCity);
      }
}
// retrieves local storage items and places them into an array
let citySavedArray = JSON.parse(localStorage.getItem("city")) || [];

// stores array of cities as strings in local storage
function storeCity(city) {
      citySavedArray.push(city);
      localStorage.setItem("city", JSON.stringify(citySavedArray));
}

// Makes 5 day forecast appear
function displayWeather() {
      let forecastBoxes = document.querySelector(".forecast");
      let currentDay = document.querySelector(".current-day");
      let gif = document.querySelector(".gif");

      forecastBoxes.classList.remove("hide");
      currentDay.classList.remove("hide");
      gif.classList.add("hide");
}

// Adds code to display the current date 
$('#current-day').text($today.format('MMMM D, YYYY'));
$('#day-one').text($today.add(1, 'day').format('M/D'));
$('#day-two').text($today.add(2, 'day').format('M/D'));
$('#day-three').text($today.add(3, 'day').format('M/D'));
$('#day-four').text($today.add(4, 'day').format('M/D'));
$('#day-five').text($today.add(5, 'day').format('M/D'));

// calls upon function
displayCitySaved(); 