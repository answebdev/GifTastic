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
                console.log("Rating: " + response.data[i].rating + " || " + "URL: " + response.data[i].url);
                $("#gifs").append("<p>Rating: " + response.data[i].rating.toUpperCase() + "</p>");
                $("#gifs").append("<img src='" + response.data[i].images.downsized.url + "'>");

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

// Capture the value from the search field
$("#searchBtn").on("click", function () {
    // alert("Test: Submit button has been clicked.");
    searchTerm = $("#search").val().trim();
    console.log("Search term: " + searchTerm);

    var newURL = queryURL + "&q=" + searchTerm;
    console.log("New URL: " + newURL);

    // Send the AJAX call to the newly assembled URL
    runQuery(10, newURL);

    // Push search terms (animals) into the "animals" array
    animals.push(searchTerm);
    console.log("ARRAY: " + animals + " || ARRAY LENGTH: " + animals.length);

    return false;
});


// var animal = $(this).attr("data-search");
// var animalURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=eZC5OTS1J5sUexsnNh6tPs3HJweH7Smz&q=q&limit=10&offset=0&lang=en";

// function animalQuery(animal, animalURL) {
//     $.ajax({ url: animalURL, method: "GET" })
//         .then(function (response) {

//             var animal = $('<div class="gifArea">');
//             var rating = response.data.rating;
//             var pOne = $('<p>').text("Rating: " + rating);
//             animal.append(pOne);

//             var gif = $('<img>').attr("src", response.data.images.downsized.url);
//             animal.append(gif);

//             $("#gifs").prepend(animal);

//         }




//             for (var i = 0; i < response.data.length; i++) {
//                 console.log("Rating: " + response.data[i].rating + " || " + "URL: " + response.data[i].url);
//             }

// $(newButton).on("click", function() {
//     var animal = $(this).attr("data-search");
//     var uniqueURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=eZC5OTS1J5sUexsnNh6tPs3HJweH7Smz&q=q&limit=10&offset=0&lang=en";
//     alert("CLICKED!");
// })


// Grab text the user typed into the search input, add to the queryParams object
// queryParams.q = $("#search-term")
// .val()
// .trim();