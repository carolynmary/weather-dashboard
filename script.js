$(document).ready(function () {
  var historyList = JSON.parse(localStorage.getItem("usersSearch")) || []; // Array of cities searched

  // store user input to local storage
  $("#searchBtn").click(function () {
    var usersSearch = $(this).siblings("#searchInput").val().trim(); // identifies and saves the users search input
    historyList.unshift(usersSearch); // adds users' search to historyList
    localStorage.setItem("usersSearch", JSON.stringify(historyList)); // save usersEvent to localStorage
    createHistoryButtons();
    $(this).siblings("#searchInput").val(null); // clear input field
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






























});