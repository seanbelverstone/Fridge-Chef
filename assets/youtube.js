// YOU WILL NEED TO ADD YOUR OWN API KEY IN QUOTES ON LINE 5, EVEN FOR THE PREVIEW TO WORK.
// 
// GET YOUR API HERE https://console.developers.google.com/apis/api


// https://developers.google.com/youtube/v3/docs/playlistItems/list

// https://console.developers.google.com/apis/api/youtube.googleapis.com/overview?project=webtut-195115&duration=PT1H

// <iframe width="560" height="315" src="https://www.youtube.com/embed/qxWrnhZEuRU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

// https://i.ytimg.com/vi/qxWrnhZEuRU/mqdefault.jpg


$(document).ready(function () {

    var key = ["AIzaSyAJKq4nry6sTao5faz_V2mxmYnAOwrYyF0"];
    var playlistId = 'PL2fnLUTsNyq7A335zB_RpOzu7hEUcSJbB';
    var URL = 'https://www.googleapis.com/youtube/v3/playlistItems';


    var options = {
        part: 'snippet',
        key: key,
        maxResults: 20,
        playlistId: playlistId
    }

    loadVids();

    function loadVids() {
        $.getJSON(URL, options, function (data) {
            var id = data.items[0].snippet.resourceId.videoId;
            mainVid(id);
            resultsLoop(data);
        });
    }

    function mainVid(id) {
        $('#video').html(`
					<iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
				`);
    }

		
    function resultsLoop(data) {

        $.each(data.items, function (i, item) {

            var thumb = item.snippet.thumbnails.medium.url;
            var title = item.snippet.title;
            var desc = item.snippet.description.substring(0, 100);
            var vid = item.snippet.resourceId.videoId;


            $('main').append(`
                <article class="item" data-key="${vid}">

                    <img src="${thumb}" alt="" class="thumb">
                    <div class="details">
                        <h4>${title}</h4>
                        <p>${desc}</p>
                    </div>

                </article>
						`);
        });
    }

		// CLICK EVENT
    $('main').on('click', 'article', function () {
        var id = $(this).attr('data-key');
        mainVid(id);
    });


});



// $(function() {
//     $("form").on("submit", function(e) {
//         e.preventDefault();
//         //prepare the request
//         var request = gapi.client.youtube.search.list({
//             part: "snippet",
//             type: "video",
//             q: encodeURIComponent($("#search").val()).replace(/%20/g,"+"),
//             maxResults: 2,
//             order: "viewCount",
//             publishedAfter: "2015-01-01T00:00Z"
//         });
//         // execute the request
//         request.execute(function(response) {
//             var results = response.result;
//             $each(results, function(index, item) {
//                 $.get("tpl/item.html", function(data) {
//                     $("#results").append(data);

//                 });
//                 //$("#results").append(item.id.videoID+" "+item.snippet.title+"<br>");

//             })
//         });
//     });
// });

// function init() {
//     gapi.client.setApiKey("AIzaSyAJKq4nry6sTao5faz_V2mxmYnAOwrYyF0");
//     gapi.client.load("youtube", "v3", function() {
//         //yt api is ready
//     });
// }