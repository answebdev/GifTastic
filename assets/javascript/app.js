// Search parameters
// var searchTerm = "";
// var q = "";
// var limit = 10;
// var rating = "";

// http://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=eZC5OTS1J5sUexsnNh6tPs3HJweH7Smz";

// https://api.giphy.com/v1/gifs/search?api_key=eZC5OTS1J5sUexsnNh6tPs3HJweH7Smz&q=q&limit=10&offset=0&lang=en

// "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

// var newURL = queryURL + "&q=" + searchTerm;
// console.log("New URL: " + newURL);

// Send the AJAX call to the newly assembled URL
// runQuery(10, newURL);

// Original link with rating=G
// var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=eZC5OTS1J5sUexsnNh6tPs3HJweH7Smz&q=q&limit=10&offset=0&rating=G&lang=en";


// for (var i = 0; i < response.data.length; i++) {
//     console.log("Rating: " + response.data[i].rating + " || " + "URL: " + response.data[i].url);
//     $("#gifs").append("<p>Rating: " + response.data[i].rating.toUpperCase() + "</p>");
//     $("#gifs").append("<img src='" + response.data[i].images.downsized.url + "'>");

// }

// As an animal is searched and its button is added, it is pushed into an array:
var animals = [];
var searchTerm = "";

// SEARCH FOR AN ITEM AND CAPTURE THE VALUE
// Capture the value from the search field
$("#searchBtn").on("click", function () {
    event.preventDefault();
    // alert("Test: Submit button has been clicked.");
    var searchTerm = $("#search").val().trim();
    console.log("Search Term: " + searchTerm);
    // Add animal from the textbox to our array
    animals.push(searchTerm);
    console.log("Animal Array: " + animals);
    // Calling renderButtons which handles the processing of our movie array
    renderButtons();
    // return false;
});

$(document).on("click", ".gifButton", displayGifInfo);

// Calling the renderButtons function to display the intial buttons
// renderButtons();

// ADDING NEW ANIMAL BUTTONS IN BROWSER
// Function for displaying animal data
function renderButtons() {

    // Deleting the animals prior to adding new animals
    // (this is necessary otherwise there will be repeat buttons)
    $("#buttonSection").empty();

    // Looping through the array of movies
    for (var i = 0; i < animals.length; i++) {

        // Then dynamicaly generating buttons for each animal in the array
        var newButton = $("<button>");
        // Adding a class of btn btn-primary to our button
        newButton.addClass("btn btn-primary gifButton").css("margin", "10px 10px 10px 10px");
        // Adding a data-attribute
        newButton.attr("data-name", animals[i]);
        // Providing the initial button text
        newButton.text(animals[i]);
        // Adding the button to the #buttonSection
        $("#buttonSection").append(newButton);
    }
}

// displayGifInfo();

function displayGifInfo() {
    var searchTerm = $(this).attr("data-name");
    console.log(searchTerm);
    // var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=eZC5OTS1J5sUexsnNh6tPs3HJweH7Smz&q=q&limit=10&offset=0&lang=en";
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=eZC5OTS1J5sUexsnNh6tPs3HJweH7Smz&limit=10&offset=0&lang=en";

    // Creating an AJAX call for the specific animal button being clicked
    $.ajax({ url: queryURL, method: "GET" })
        .then(function (response) {
            // Storing an array of results in the results variable
            var results = response.data;
            console.log(results);
            console.log(queryURL);

            // if (searchTerm === "still") {
            //     $(this).attr("src", $(this).attr("data-animate"));
            //     $(this).attr("data-state", "animate");
            //   } else {
            //     $(this).attr("src", $(this).attr("data-still"));
            //     $(this).attr("data-state", "still");
            //   }


            // Looping over every result item
            for (var i = 0; i < results.length; i++) {

                // $("#gifs").prepend("<p>Rating: " + results[i].rating.toUpperCase() + "</p>");
                // // $("#gifs").prepend("<img src='" + results[i].images.downsized.url + "'>");
                // $("#gifs").prepend("<img src='" + results[i].images.downsized_still.url + "'>");

                var still = results[i].images.downsized_still.url;
                // console.log(still);
                var animated = results[i].images.downsized.url;
                // console.log(animated);

                var searchDiv = $('<div class = "search-item">');
                var p = $('<p>').text("Rating: " + results[i].rating.toUpperCase());
                // console.log(results[i].rating.toUpperCase());
                var animated = results[i].images.downsized.url;
                // console.log("Animated: " + animated);
                var still = results[i].images.downsized_still.url;
                // console.log("Still " + still);
                var image = $("<img>");
                image.attr("src", still);
                image.attr("data-still", still);
                image.attr("data-animated", animated);
                image.attr("data-state", "still");
                image.addClass("searchedGif");
                searchDiv.append(p);
                searchDiv.append(image);
                $("#gifs").prepend(searchDiv);



                // Creating a div to hold the gif
                // var gifDiv = $("<div>");

                // // Storing the rating data
                // var rating = results[i].rating.toUpperCase();

                // // Creating an element to have the rating displayed
                // var pOne = $("<p>").text("Rating: " + rating);

                // // Displaying the rating
                // gifDiv.append(pOne);

                // // Retrieving the URL for the gif
                // var gifURL = results[i].images.downsized.url;

                // // Creating an element to hold the image
                // var gif = $("<img>").attr("src", gifURL);

                // // Appending the image
                // gifDiv.append(gif);

                // // Putting the entire movie above the previous movies
                // $("#gifs").prepend(gifDiv);
            }
        });

}
$(document).on("click", ".searchedGif", function () {
    var state = $(this).attr("data-state");
    if (state == "still") {
        $(this).attr("src", $(this).data("animated"));
        $(this).attr("data-state", "animated");
    } else {
        $(this).attr("src", $(this).data("still"));
        $(this).attr("data-state", "still");
    }
});






//========================================================================================================================

//SAVE CODE:

// As an animal is searched and its button is added, it is pushed into an array:
// var animals = [];

// var searchTerm = "";

// function displayGifInfo() {
//     var searchTerm = $(this).attr("data-name");
//     // var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=eZC5OTS1J5sUexsnNh6tPs3HJweH7Smz&q=q&limit=10&offset=0&lang=en";
//     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=eZC5OTS1J5sUexsnNh6tPs3HJweH7Smz&q=q&limit=10&offset=0&lang=en";

//     // Creating an AJAX call for the specific animal button being clicked
//     // function displayGifInfo() {
//     $.ajax({ url: queryURL, method: "GET" })
//         .then(function (response) {
//             // Storing an array of results in the results variable
//             var results = response.data;
//             console.log(results);

//             // Looping over every result item
//             for (var i = 0; i < results.length; i++) {

//                 // $("#gifs").append("<p>Rating: " + results[i].rating.toUpperCase() + "</p>");
//                 // $("#gifs").append("<img src='" + results[i].images.downsized.url + "'>");

//                 // Creating a div to hold the gif
//                 var gifDiv = $("<div>");

//                 // Storing the rating data
//                 var rating = results[i].rating.toUpperCase();

//                 // Creating an element to have the rating displayed
//                 var pOne = $("<p>").text("Rating: " + rating);

//                 // Displaying the rating
//                 gifDiv.append(pOne);

//                 // Retrieving the URL for the gif
//                 var gifURL = results[i].images.downsized.url;

//                 // Creating an element to hold the image
//                 var gif = $("<img>").attr("src", gifURL);

//                 // Appending the image
//                 gifDiv.append(gif);

//                 // Putting the entire movie above the previous movies
//                 $("#gifs").prepend(gifDiv);
//             }
//         });

// }

// // ADDING NEW ANIMAL BUTTONS IN BROWSER
// // Function for displaying animal data
// function renderButtons() {

//     // Deleting the animals prior to adding new animals
//     // (this is necessary otherwise there will be repeat buttons)
//     $("#buttonSection").empty();

//     // Looping through the array of movies
//     for (var i = 0; i < animals.length; i++) {

//         // Then dynamicaly generating buttons for each animal in the array
//         var newButton = $("<button>");
//         // Adding a class of btn btn-primary to our button
//         newButton.addClass("btn btn-primary").css("margin", "10px 10px 10px 10px");
//         // Adding a data-attribute
//         newButton.attr("data-name", animals[i]);
//         // Providing the initial button text
//         newButton.text(animals[i]);
//         // Adding the button to the #buttonSection
//         $("#buttonSection").append(newButton);
//     }
// }
// // displayGifInfo();

// // SEARCH FOR AN ITEM AND CAPTURE THE VALUE
// // Capture the value from the search field
// $("#searchBtn").on("click", function () {
//     event.preventDefault();
//     // alert("Test: Submit button has been clicked.");
//     var searchTerm = $("#search").val().trim();
//     // Add animal from the textbox to our array
//     animals.push(searchTerm);
//     console.log(searchTerm);
//     // Calling renderButtons which handles the processing of our movie array
//     renderButtons();
// });

// $(document).on("click", ".btn btn-primary", displayGifInfo);

// // Calling the renderButtons function to display the intial buttons
// renderButtons();

//========================================================================================================================

// console.log("query URL: " + queryURL);
// console.log(response);

// var newURL = queryURL + "&q=" + searchTerm;
// console.log("New URL: " + newURL);

// // Send the AJAX call to the newly assembled URL
// runQuery(10, newURL);

// Push search terms (animals) into the "animals" array
// animals.push(searchTerm);
// console.log("ARRAY: " + animals + " || ARRAY LENGTH: " + animals.length);

// return false;
// });

