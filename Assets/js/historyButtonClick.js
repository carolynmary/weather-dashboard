// This works only on the first click, scratching head why.  --------------------- 
// also doesn't work after search is performed.
// basically only if first action fired.

$(document).ready(function () {
  // click a history button to display weather for that city
  $("#history button").click(function () {
    console.log("i'm working");
    let buttonText = $(this).text(); // store text/city of button clicked
    let newArray = []; // to hold new array without duplicates
    historyList.unshift(buttonText); // adds buttonText to beginning of historyList array
    historyList.forEach(function (buttonText) {
      if (!newArray.includes(buttonText)) { //  if (buttonText is NOT included in a NEW array)
        newArray.push(buttonText); // add to a NEW array
        historyList = newArray // assign new local array as global history array
      }
    });
    saveToLocalStorage();
    createHistoryList(); // updates history list and buttons
    getCurrentWeather();
    getForecast();
  });

});