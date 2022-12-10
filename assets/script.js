// var apiKey="8014a1ac0a4ac149beb5fec93b61ac5a"
// var apiURL =
//   "https://api.openweathermap.org/data/2.5/weather?q=Indianapolis&appid=" + apiKey;
//   fetch(apiURL)
//   .then(function(response){
//     return response.json()
//   })
//   .then(function(data){

//     console.log(data)
//     var lat = data.coord.lat
//     var lon = data.coord.lon

//   var api5DayURL =
//     "https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid=" + apiKey;
//     fetch(api5DayURL)
//     .then(function(response){
//         return response.json()
//     })
//     .then(function(data){
//         console.log(data)
//     })
// })

var apiKey = "8014a1ac0a4ac149beb5fec93b61ac5a";

function geoCodingFetch(){
    var apiURL =
    "https://api.openweathermap.org/data/2.5/weather?q=Indianapolis&appid=" +
    apiKey;
    fetch(apiURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        var lat = data.coord.lat;
        var lon = data.coord.lon;
        api5DaysFetch(lat, lon);
    });
  }

  function api5DaysFetch(lat, lon){
    var api5DayURL =
      "https://api.openweathermap.org/data/2.5/forecast?lat=" +
      lat +
      "&lon=" +
      lon +
      "&appid=" +
      apiKey;
    fetch(api5DayURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
  }

  geoCodingFetch();