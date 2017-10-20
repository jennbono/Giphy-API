var shows = ["ALF",
			 "Beverly Hills 90210",
			 "Carpool Karaokee",
			 "Dawsons Creek",
			 "Family Matters",
			 "Fresh off the Boat",
			 "Fresh Prince of Bel Air",
			 "Friends",
			 "Full House",
			 "Keeping up with the Kardashians",
			 "Modern Family",
			 "Psych",
			 "Saturday Night Live",
			 "Saved By the Bell",
			 "Seinfeld",
			 "Simpsons",
			 "The O.C.",
			 "The Office",
			 "Toddlers and Tiaras",
			 "Will and Grace",];

var apiKey = "6dCV6nkmtwc771wwbT7JLFtjMZ4uPYQr"

 function renderButtons() {

        // Deletes the movies prior to adding new TV Shows
        // (this is necessary otherwise you will have repeat buttons)
        $("#buttons-view").empty();
        // Loops through the array of TV Shows
        for (var i = 0; i < shows.length; i++) {

          // Then dynamicaly generates buttons for each movie in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<button>");
          // Adds a class of shows to our button
          a.addClass("show");
          // Added a data-attribute
          a.attr("data-name", shows[i]);
          // Provided the initial button text
          a.text(shows[i]);
          // Added the button to the buttons-view div
          $("#buttons-view").append(a);
        }
      }

renderButtons();

// This function handles events where the add TV Show button is clicked
      $("#add-show").on("click", function(event) {
        event.preventDefault();
        // This line of code will grab the input from the textbox
        var show = $("#show-input").val().trim();

        // The TV show from the textbox is then added to our array
        shows.push(show);

        // Calling renderButtons which handles the processing of our shows array
        renderButtons();
      });

      // Adding click event listeners to all elements with a class of "show"
      $(document).on("click", ".show", displayShowInfo);

      // Calling the renderButtons function to display the intial buttons
      renderButtons();

function displayShowInfo() {

        var show = $(this).attr("data-name");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + show + "&api_key=" + apiKey + "&limit=10";

        // Creates AJAX call for the specific movie button being clicked
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {

          // Creates a div to hold the TV show
          $(".tv-view").empty();
          // Retrieves the Rating Data
          console.log(response);

          // for (var i = 0; i < show.length; i++) {
          // 	$("#tv-view").html("<p>Rating: " + response.[].rating + "</p>");
          // }
         
        });

      }



