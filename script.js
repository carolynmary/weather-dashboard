$(document).ready(function () {
  let usersSearch = $("#searchInput").val().trim();
  let historyList = JSON.parse(localStorage.getItem("usersSearch")) || []; // Array of cities searched
  // var cityName = historyList[0];
  const apiKey = "&appid=72d6f50b9321f45148779dadfd9505b5";

  // store user input to local storage, update history list, convert city name to ID, get weather
  $("#searchBtn").click(function (event) {
    event.preventDefault();
    usersSearch = $(this).siblings("#searchInput").val().trim(); // identifies and saves the users search input
    historyList.unshift(usersSearch); // adds usersSearch to beginning of historyList array
    localStorage.setItem("usersSearch", JSON.stringify(historyList)); // saves usersSearch to localStorage
    $(this).siblings("#searchInput").val(null); // clears input field
    createHistoryButtons(); // run function here to display latest search on page
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
  createHistoryButtons(); // run function here to display list on page load 

  // clears history array, cityID array and local storage
  $("#clearHistory").click(function () {
    historyList = [];
    cityID = [];
    localStorage.removeItem("usersSearch");
    location.reload();
  });

  // GET current weather 
  function getCurrentWeather() {
    let currentDate = "(" + moment().subtract(10, 'days').calendar() + ")";  // add current day and date with moments
    let queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + usersSearch + "&units=imperial" + apiKey;
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      let lat = response.coord.lat;
      let lon = response.coord.lon;
      let currentIconURL = "http://openweathermap.org/img/wn/" + response.weather[0].icon + ".png";
      let currentIcon = '<img src="' + currentIconURL + '" alt="' + response.weather[0].description + '"></img>';
      $("#currentCity").append().text(response.name);
      $("#currentDate").append().text(" " + currentDate);
      $("#currentIcon").append().html(" " + currentIcon);
      $("#currentTemp").append().text("Temperature: " + response.main.temp.toFixed(1) + " °F");
      $("#currentHum").append().text("Humidity: " + response.main.humidity + "%");
      $("#currentWind").append().text("Wind Speed: " + response.wind.speed.toFixed(1) + " MPH");
      // GET uv index
      function getCurrentUVindex() {
        let uvQueryURL = "http://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + apiKey;
        $.ajax({
          url: uvQueryURL,
          method: "GET"
        }).then(function (response) {
          console.log(response);
          $("#currentUV").append().text(response.value);
          // assigns color indicator
          if (response.value >= 0 && response.value < 3) { $("#currentUV").addClass("low"); }
          if (response.value >= 3 && response.value < 6) { $("#currentUV").addClass("moderate"); }
          if (response.value >= 6 && response.value < 8) { $("#currentUV").addClass("high"); }
          if (response.value >= 8 && response.value < 11) { $("#currentUV").addClass("very-high"); }
          if (response.value >= 11) { $("#currentUV").addClass("extreme"); }
        });
      };
      getCurrentUVindex();
    });
  };






});