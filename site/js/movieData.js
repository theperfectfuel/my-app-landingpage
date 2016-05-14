
var URL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=nhl%20tonight&key=AIzaSyBSzkEPkvOAQLAXhbrooCDeF8xbU40eq_0';

buildThumbs();

$('ul').click(function () {
	$('#video-section').find('a').colorbox();
});

// Get data and build video thumbnail section
function buildThumbs() {
	$.getJSON(URL, function(data) {

		$('#video-section').html('');

		var myData = data.items;

		for (var x in myData) {
			var idLink = myData[x].id.videoId;
			var thumbLink = myData[x].snippet.thumbnails.medium.url;
			var title = myData[x].snippet.title;

			if(title.length > 35) {
				title = title.substring(0,35)+"..."; 
			}

			var ytURL = 'https://www.youtube.com/watch?v=';
			$('#video-section').append('<li><p>' + title + '<br /><a target="_blank" href=' + ytURL + idLink + '><img src="' + thumbLink + '"></a></p></li>');
			
			// THIS IS FOR EMBEDED VIDEOS TO BE WORKED OUT LATER
			//.append('<li><p>' + title + '</p><a target="_blank" href=' + ytURL + idLink + '><img src="' + thumbLink + '"></a></li.block>');
			//$('#video-section').append('<li><p><iframe width="320" height="180" src="https://www.youtube.com/embed/' + idLink + '" frameborder="0" allowfullscreen></iframe></p></li>');
		}
	});

}