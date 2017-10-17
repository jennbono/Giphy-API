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
			 "The OC",
			 "The Office",
			 "Toddlers and Tiaras",
			 "Will and Grace",];

var tvShows = $.get("http://api.giphy.com/v1/gifs/search?q=" + shows + "&api_key=6dCV6nkmtwc771wwbT7JLFtjMZ4uPYQr&limit=10");
	tvShows.done(function(data) { 
		console.log("success got data", data); 
	});