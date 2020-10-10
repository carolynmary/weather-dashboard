// line 18 - why doesn't it work if references an outside function? 
// addBtn.on("click", historyButtonClick);
// LINE 38 - adding class to first button
// button click works on search button, how to remove?
// fix UV Index colors not updating again

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
            // event listener: refresh weather when a button is clicked
            addBtn.on("click", function () {
                console.log("i'm working");
                let buttonText = $(this).text(); // store text/city of button clicked
                console.log(buttonText);
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
            $("#history").append(addBtn);
        };
        // console.log(historyList);
        // if (addBtn.text = historyList[0]) { addBtn.addClass("first-btn") };
    };
    createHistoryList(); // run here to display on page load
});