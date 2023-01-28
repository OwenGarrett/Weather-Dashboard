// API KEY 
var apiKey = "8014a1ac0a4ac149beb5fec93b61ac5a";


// QUERY SELECTORS 
var searchButton = document.querySelector("#search-button");
var searchInput = document.querySelector("#search-input");
var fiveDayForecastContainer = document.querySelector("#js-five-day-forecast")


// FUNCTIONS TO GET API WEATHER DATA

function geoCodingFetch(query) {
  var apiURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&appid=" +
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

function api5DaysFetch(lat, lon) {
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
      var listOfForecastItems=data.list
      console.log(listOfForecastItems)
    });
}

searchButton.addEventListener("click", function () {
  var city = searchInput.value;
  geoCodingFetch(city);
});

function renderForecastCard(title){
  var cardEl =document.createElement('div');
  cardEl.classList.add("five-day-forecast-card");
  var titleEl= document.createElement('p');
  titleEl.innerText=title
  cardEl.appendChild(titleEl)

fiveDayForecastContainer.appendChild(cardEl)
}

