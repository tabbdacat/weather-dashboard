function getApi() {
    var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?zip=96786,us&appid=ef86c0944076d1643a343ec8b308ba52';
//       var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?id='+ cityId + '&appid=ef86c0944076d1643a343ec8b308ba52';


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


    });

}
getApi();

