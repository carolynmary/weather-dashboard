$(document).ready(function () {
  var usersSearch = "";
  var historyList = JSON.parse(localStorage.getItem("usersSearch")) || []; // Array of cities searched
  // var cityName = historyList[0];
  var cityID = [""];
  var apiKey = "&appid=72d6f50b9321f45148779dadfd9505b5";


  // store user input to local storage
  $("#searchBtn").click(function () {
    usersSearch = $(this).siblings("#searchInput").val().trim(); // identifies and saves the users search input
    historyList.unshift(usersSearch); // adds users' search to historyList
    localStorage.setItem("usersSearch", JSON.stringify(historyList)); // save usersEvent to localStorage
    $(this).siblings("#searchInput").val(null); // clear input field
    createHistoryButtons();
    cityNameToID();
    getCurrentWeather();
  });

  // display the search history in the history list
  function createHistoryButtons() {
    // Deleting the history buttons prior to adding new (necessary to avoid repeat buttons)
    $("#history").empty();
    // Looping through array of cities and adding button
    for (var i = 0; i < historyList.length; i++) {
      var addBtn = $("<button>");
      addBtn.addClass("btn btn-primary btn-lg btn-block");
      addBtn.attr("type", "button");
      addBtn.text(historyList[i]); // Providing the button's text with city name at index i
      $("#history").append(addBtn);
    };
  };
  createHistoryButtons();

  // clears history array and local storage
  $("#clearHistory").click(function () {
    historyList = [];
    localStorage.removeItem("usersSearch");
    location.reload();
  });
  var cityID = [""];
  // Convert city name to city id# 
  function cityNameToID() {
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + historyList[0] + apiKey;
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      var newID = response.id;
      cityID.unshift(newID);
      // console.log("inside NameToID " + newID);
    });
  };
  cityNameToID();

  // GET current weather 
  function getCurrentWeather() {
    console.log("getCurr working")
    // cityID = toString(cityID);
    console.log("inside getCurrent " + cityID);
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?id=" + cityID[0] + apiKey;
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
    //   $("#currentCity").append().text(response.name);
    //   $("#currentDate").append().text(response.dt);
    //   $("#currentIcon").append().text(response.weather[0].icon);
    //   $("#currentTemp").append().text("Temperature: " + response.main.temp);
    //   $("#currentHum").append().text("Humidity: " + response.main.humidity);
    //   $("#currentWind").append().text("Wind Speed: " + response.wind.speed);
    // });
  };

  // DISPLAY current weather (history[0])

  // var currentCity = response.name;
  // var currentDate = response.dt;
  // var currentIcon = response.weather[0].icon;
  // var currentTemp = response.main.temp;
  // var currentHum = response.main.humidity;
  // var currentWind = response.wind.speed;
  // $("#currentIcon").append("http://openweathermap.org/img/wn/" + currentIcon + "@2x.png");









});