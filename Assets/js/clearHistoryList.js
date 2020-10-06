$(document).ready(function () {
  // clears history array and local storage
  $("#clearHistory").click(function () {
      historyList = [];
      localStorage.removeItem("usersSearch");
      location.reload();
    });
});