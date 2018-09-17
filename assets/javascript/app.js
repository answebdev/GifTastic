// Search parameters
var searchTerm = "";
// var q = "";
// var limit = 10;
// var rating = "";

var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=eZC5OTS1J5sUexsnNh6tPs3HJweH7Smz&q=q&limit=10&offset=0&rating=G&lang=en";

function runQuery(animal, queryURL) {
    $.ajax({ url: queryURL, method: "GET"})
    .then(function (response) {
        console.log(queryURL);
        console.log(response);
    });
}

$("#searchBtn").on("click", function() {
    // alert("Test: Submit button has been clicked.");
    searchTerm = $("#search").val().trim();
    console.log(searchTerm);

    var newURL = queryURL + "&q=" + searchTerm;
    console.log(newURL);

    // Send the AJAX call to the newly assembled URL
    runQuery(10, newURL);

    return false;
});

// Grab text the user typed into the search input, add to the queryParams object
// queryParams.q = $("#search-term")
// .val()
// .trim();