var getForecast; // to access in other scripts (?)

$(document).ready(function () {
  getForecast = function getForecast() {
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + historyList[0] + "&units=imperial" + apiKey;
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      // console.log(response);
      // plus 1 days
      var p1IconURL = "http://openweathermap.org/img/wn/" + response.list[7].weather[0].icon + ".png"; // get icon
      var p1Icon = '<img src="' + p1IconURL + '" alt="' + response.list[7].weather[0].description + '"></img>'; // create html code (didn't work if placeholder in html dkw??)
      $("#plus1-icon").append().html(" " + p1Icon); // display icon
      $("#plus1-date").append().text(" " + moment.unix(response.list[7].dt).format("M/D")); // get and display date
      $("#plus1-temp").append().text("Temp: " + response.list[7].main.temp.toFixed(0) + " °F"); // get and display temp
      $("#plus1-hum").append().text("Hum: " + response.list[7].main.humidity + "%"); // get and display humidity
      // plus 2 days
      var p2IconURL = "http://openweathermap.org/img/wn/" + response.list[15].weather[0].icon + ".png";
      var p2Icon = '<img src="' + p2IconURL + '" alt="' + response.list[15].weather[0].description + '"></img>';
      $("#plus2-icon").append().html(" " + p2Icon);
      $("#plus2-date").append().text(" " + moment.unix(response.list[15].dt).format("M/D"));
      $("#plus2-temp").append().text("Temp: " + response.list[15].main.temp.toFixed(0) + " °F");
      $("#plus2-hum").append().text("Hum: " + response.list[15].main.humidity + "%");
      // plus 3 days
      var p3IconURL = "http://openweathermap.org/img/wn/" + response.list[23].weather[0].icon + ".png";
      var p3Icon = '<img src="' + p3IconURL + '" alt="' + response.list[23].weather[0].description + '"></img>';
      $("#plus3-icon").append().html(" " + p3Icon);
      $("#plus3-date").append().text(" " + moment.unix(response.list[23].dt).format("M/D"));
      $("#plus3-temp").append().text("Temp: " + response.list[23].main.temp.toFixed(0) + " °F");
      $("#plus3-hum").append().text("Hum: " + response.list[23].main.humidity + "%");
      // plus 4 days
      var p4IconURL = "http://openweathermap.org/img/wn/" + response.list[31].weather[0].icon + ".png";
      var p4Icon = '<img src="' + p4IconURL + '" alt="' + response.list[31].weather[0].description + '"></img>';
      $("#plus4-icon").append().html(" " + p4Icon);
      $("#plus4-date").append().text(" " + moment.unix(response.list[31].dt).format("M/D"));
      $("#plus4-temp").append().text("Temp: " + response.list[31].main.temp.toFixed(0) + " °F");
      $("#plus4-hum").append().text("Hum: " + response.list[31].main.humidity + "%");
      // plus 5 days
      var p5IconURL = "http://openweathermap.org/img/wn/" + response.list[39].weather[0].icon + ".png";
      var p5Icon = '<img src="' + p5IconURL + '" alt="' + response.list[39].weather[0].description + '"></img>';
      $("#plus5-icon").append().html(" " + p5Icon);
      $("#plus5-date").append().text(" " + moment.unix(response.list[39].dt).format("M/D"));
      $("#plus5-temp").append().text("Temp: " + response.list[39].main.temp.toFixed(0) + " °F");
      $("#plus5-hum").append().text("Hum: " + response.list[39].main.humidity + "%");
    });
  };
  getForecast(); // run here to display last searched city on page load
});

//  How to simplify code (loop) but have buckets show black by default?? -------------------------