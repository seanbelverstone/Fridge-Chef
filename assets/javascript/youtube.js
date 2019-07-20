// Youtube API Key: AIzaSyAJKq4nry6sTao5faz_V2mxmYnAOwrYyF0

  //=============================================================
// PSEUDOCODE TIIIIIIME!!!!! :partyparrot:
  //=============================================================
/*
4. Taco Recipe is stored in a....variable?
5. When user clicks the link to go to Daniel's page, the Taco Recipe variable is sent along WITH the user's link to the page
    Taco Recipe
6. Danniel's page TAKES the Taco Recipe Variable, and FEEDS it into the YouTube API
    youtube.com/results/query?q=taco+recipe
7. Danniel's page takes that search query, and pulls down the (top rated? Best reviewed?) video
8. Video is embedded on the page
9. Taco Recipe (from Step 5) is embedded on the page
10. The whole thing is printed/spit out onto the webpage.
*/
  //=============================================================
 
// Set recipe variable for concatanation purposes. CHANGE recipe variable to whatever the "Card Title" that was clicked from previous page
// Variable set for embedded video url which was concatenated from 3 pieces: API, ingredients variable

var recipe = getObject;
var url = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyAJKq4nry6sTao5faz_V2mxmYnAOwrYyF0&q=" + getObject +"recipe&part=snippet";

// DZ: Ajax call
$.ajax(
    {
        "url": url
    }
).then(function(result){
// on ajax call success, it will grab the first element of the results and getting the id and video id. Ultimately, the video id
    console.log(result.items[0].id.videoId);
// taking the above info to fill out an iframe and add attributes to it- height, width, autoplay, and source
    var iFrame = $("<iframe>");
    iFrame.attr("height", "315");
    iFrame.attr("width", "560");
    iFrame.attr("allow", "autoplay; encrypted-media");
    iFrame.attr("src", "https://www.youtube.com/embed/" + result.items[0].id.videoId);
//selects id to append and adds iframe
    $("#embedVideo").append(iFrame);
});

/*====================================================
What's left to do:
1. Replace the recipe variable with the title of the card that was clicked on previous page
        a. Have the onclicked title saved onto local storage
        b. insert this title into recipe variable
2. Grab page url/recipe and slap into body of email message
====================================================*/

// Capture Button Click - !! What did Ryan Call this on his page?!!
$("#add-user").on("click", function(event) {
    // prevent page from refreshing when form tries to submit itself
    event.preventDefault();
    // Capture user input and stores it into variables
    var recipe = $("#name-input").val().trim(); 
    // Console log each of the user inputs to confirm we are receiving them
    console.log(recipe);
    // Clear localStorage
    localStorage.clear();
    // Store all content into localStorage
    localStorage.setItem("recipe", recipe);   
});

// By default display the content from localStorage
// $("#recipe").text(localStorage.getItem("recipe"));

getObject = JSON.parse(localStorage.getItem(results.recipe[i].title));
    console.log(results.recipe[i].title);

/* Would this be used to store clicked onbject locally?
    $('This').on("click", function(event) {
        event.preventDefault();
        var recipe = $('This).val().trim();
            console.log(recipe)
        localStorage.clear();
        localStorage.setItem("recipe", recipe);
    });

    ||

    // grab localStorage data on click and create a list
save.addEventListener('click', function() {
    var storedTitle = JSON.parse(localStorage.getItem(results.recipe[i].title)); 
        console.log(results.recipe[i].title);
});

    
    
