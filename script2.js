//Declare a variables
let city = "";
let searchCityEl = $("#search-city");
let searchButtonEl = $("#search-button");
let clearButtonEl = $("#clear-history");
let currentCityEl = $("#current-city");
let currentTemperatureEl = $("#temperature");
let currentHumidtyEl = $("#humidity");
let currentWSpeedEl = $("#wind-speed");
let UvIndexEl = $("#uv-index");
let cityname = [];
let dateEl = "(" + moment().format("L") + ")";
//Set up the API key
let APIKey = "a0aca8a89948154a4182dcecc780b513";

// searches to see if it exists in the local storage
const SCity = JSON.parse(localStorage.getItem("cities")) || [];
// store cities in local storage
function storeCities() {
  localStorage.setItem("cityname", JSON.stringify(cityname));
}
// Display the current and future.
function displayWeather(event) {
  event.preventDefault();
  if (searchCity.val().trim() !== "") {
    city = searchCity.val().trim();
    currentWeather(city);
  }
}
// Here we create the AJAX call and build URL
function currentWeather(city) {}
//returns the UVIindex response.
function UVIndex(ln, lt) {}
// display the 5 days forecast for the current city.
function forecast(cityid) {}
//add city to the search history
function addToList(city) {
  let listEl = $("<li>" + city.toUpperCase() + "</li>");
  $(listEl).attr("class", "list-group-item");
  $(listEl).attr("data-value", city.toUpperCase());
  $(".list-group").append(listEl);
}
// display city from history list
function pastSearch(event) {
  let liEl = event.target;
  if (event.target.matches("li")) {
    city = liEl.textContent.trim();
    currentWeather(city);
  }
}
// load last city
function loadlastCity() {}
//Clear the search history from the page
function clearHistory(event) {
  event.preventDefault();
  cityname = [];
  localStorage.removeItem("cityname");
  document.location.reload();
}
//Click Handlers
$("#search-button").on("click", displayWeather);
$(document).on("click", pastSearch);
$(window).on("load", loadlastCity);
$("#clear-history").on("click", clearHistory);
