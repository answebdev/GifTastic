// Search parameters
var searchTerm = "";
// var q = "";
// var limit = 10;
// var rating = "";
// As an animal is searched and its button is added, it is pushed into an array:
animals = [];

var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=eZC5OTS1J5sUexsnNh6tPs3HJweH7Smz&q=q&limit=10&offset=0&lang=en";

// Original link with rating=G
// var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=eZC5OTS1J5sUexsnNh6tPs3HJweH7Smz&q=q&limit=10&offset=0&rating=G&lang=en";

function runQuery(animal, queryURL) {
    $.ajax({ url: queryURL, method: "GET" })
        .then(function (response) {

            for (var i = 0; i < response.data.length; i++) {
                console.log("Rating: " + response.data[i].rating + " || " + "URL: " + response.data[i].url)
            }

            // Create and store a button
            var newButton = $("<button>");
            // Give each "newButton" the following classes: "btn btn-primary"
            newButton.addClass("btn btn-primary").css("margin", "10px 10px 10px 10px");
            // Add the text of the searched item on the new button
            newButton.text(searchTerm);
            // Append the new button to #buttonSection
            $("#buttonSection").append(newButton);


            console.log("query URL: " + queryURL);
            console.log(response);
        });
}

$("#searchBtn").on("click", function () {
    // alert("Test: Submit button has been clicked.");
    searchTerm = $("#search").val().trim();
    console.log("Search term: " + searchTerm);

    var newURL = queryURL + "&q=" + searchTerm;
    console.log("New URL: " + newURL);

    // Send the AJAX call to the newly assembled URL
    runQuery(10, newURL);

    return false;
});

// Grab text the user typed into the search input, add to the queryParams object
// queryParams.q = $("#search-term")
// .val()
// .trim();