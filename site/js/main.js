$(document).ready(function() {

	function getSearch(query) {
		URL='http://www.omdbapi.com/?s=hockey&r=json';
		//URL='http://nhlwc.cdnak.neulion.com/fs1/nhl/league/playerstatsline/20152016/2/' + query + '/iphone/playerstatsline.json';
		getMovieData(URL);
	}

	function getMovieData(URL) {
		$.getJSON(URL, function(data) {
				myData = data.Search;
				showMovieData(myData);
		});
		
	}

	function clearMovieData() {
		$("p").remove();
	}

	function showMovieData(myData) {
		for (var x in myData) {
			$("#search-results")
			.append("<p>" + myData[x].Title + "</p>");
			console.log(myData[x].Title);
		}
	}

	$(this).ready(function(event) {
		var query = $("#query").val();
		getSearch(query);
		event.preventDefault();
	});


});