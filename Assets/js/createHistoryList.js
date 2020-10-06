var createHistoryList; // to access in other scripts (?)

$(document).ready(function () {
    // create search history list
    createHistoryList = function createHistoryList() {
        $("#history").empty(); // Deleting the history buttons prior to adding new (necessary to avoid repeat buttons)
        // Looping through array of cities and adding button
        for (var i = 0; i < historyList.length; i++) {
            var addBtn = $("<button>");
            addBtn.addClass("btn btn-primary btn-lg btn-block");
            addBtn.attr("type", "button");
            addBtn.text(historyList[i]); // Providing the button's text with city name at index i
            $("#history").append(addBtn);
        };
    };
    createHistoryList(); // run here to display on page load
});