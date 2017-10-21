var shows = ["ALF",
			 "Beverly Hills 90210",
			 "Big Bang Theory",
			 "Dawsons Creek",
			 "Family Matters",
			 "Fresh off the Boat",
			 "Fresh Prince of Bel Air",
			 "Friends",
			 "Full House",
			 "How I Met Your Mother",
			 "Keeping up with the Kardashians",
			 "Modern Family",
			 "Saturday Night Live",
			 "Saved By the Bell",
			 "Seinfeld",
			 "Simpsons",
			 "The OC",
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
      $("#add-tv").on("click", function(event) {
        event.preventDefault();
        // This line of code will grab the input from the textbox
        var show = $("#tv-input").val().trim();

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
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + show + "&api_key=" + apiKey + "&limit=10&rating=pg";

        // Creates AJAX call for the specific movie button being clicked
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {

          // Creates a div to hold the TV show
          $("#tv-view").empty();
          // Retrieves the Rating Data
          console.log(response);

          for (var i = 0; i < response.data.length; i++) {
          	var tvShowImage = $("<img src= '" + response.data[i].images.original_still.url + "'>")
          	.attr("data-stillImage", response.data[i].images.original_still.url)
          	.attr("data-moveImage", response.data[i].images.original.url)
          	.attr("data-state", "still")
          	.click(function(){
          		if ($(this).attr("data-state")=="still") {
          			$(this).attr("src", $(this).attr("data-moveImage"));
          			$(this).attr("data-state", "moving");
          		}
          		else {
          			$(this).attr("src", $(this).attr("data-stillImage"));
          			$(this).attr("data-state", "still");
          		}
          	})
          	var tvShow = $("<span>")
          	// Retrieves the Rating Data
          	.append("<p>Rating: " + response.data[i].rating + "</p>")
          	.append(tvShowImage);

          	

          	$("#tv-view").append(tvShow);
          }
         
        });

      }



