var usersSearch = $("#searchInput").val().trim();
var historyList = JSON.parse(localStorage.getItem("usersSearch")) || []; // Array of cities searched
const apiKey = "&appid=72d6f50b9321f45148779dadfd9505b5";

$(document).ready(function () {
  // Search Field Event: get search value and run functions to display weather
  $("#searchBtn").click(function (event) {
    event.preventDefault();
    var usersSearch = $(this).siblings("#searchInput").val().trim();
    let newHistory = []; // to hold new array without duplicates
    historyList.unshift(usersSearch); // adds usersSearch to beginning of historyList array
    historyList.forEach(function (usersSearch) {
      if (!newHistory.includes(usersSearch)) { //  if (usersSearch is NOT included in a NEW array)
        newHistory.push(usersSearch); // add to a NEW array
        historyList = newHistory // assign new local array as global history array
      }
    });
    $(this).siblings("#searchInput").val(null); // clears input field after input
    saveToLocalStorage();
    createHistoryList();
    getCurrentWeather();
    getForecast();
  });
});

// button click works on search button, how to remove?
// why did the dropdown list in search stop saving? 
// html: how to make grey background less high on mobile