var getCityPhoto; // to access in other scripts (?)

$(document).ready(function () {
  // get weather from the first element in the history list (userSearch pushed to first element on click)
  getCityPhoto = function getCityPhoto() {
    // var queryURL = "https://api.unsplash.com/photos/random/?client_id=1GqPzMsQJU2BFu3Sn_ZfU2S4JubHiP6ksIjvj4AZdE8&query=" + usersSearch;
    var queryURL = "https://api.shutterstock.com/v2/images/search" // need to add usersSearch and api key SXiXYm4rBEYTv7vRQRFEcRLPhIzNKUdU
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      let image = response.urls.regular
      $("#cityImg").append(image).attr("src", image);
    });
  };
});