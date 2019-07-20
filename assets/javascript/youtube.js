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


// localStorage.setItem("recipe title", recipeTitle);
var recipeTitle = localStorage.getItem("recipe title");
recipeTitle.toLowerCase();
console.log(recipeTitle);


// localStorage.setItem("foodLink", foodUrl);
var foodUrl = localStorage.getItem("foodLink");
foodUrl.toLowerCase();
console.log(foodUrl);


// localStorage.setItem("foodImg", foodPic);
var foodPic = localStorage.getItem("foodImg");
foodPic.toLowerCase();
console.log(foodPic);


var questionbox = $(".questionbox");
questionbox.append("<div>");
questionbox.text(recipeTitle);
questionbox.append("<img src='" + foodPic + "'>");



var recipe = "recipe";
var url = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyAJKq4nry6sTao5faz_V2mxmYnAOwrYyF0&q=" + recipeTitle +"recipe&part=snippet";

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

$(function () {
    $('#emailButton').click(function () {
        var subject = "Fridge-Chef: Here's your recipe!"
        var emailBody = 'Hi there! Your recipe link is: ';
        var email = "";

        // document.location =
        var emailLink = $("#emailLink");
        emailLink.attr("href", "mailto:" + email + "?subject=" + subject + "&body=" + emailBody + foodUrl);
    });
  });

/*====================================================
What's left to do:
1. Replace the recipe variable with the title of the card that was clicked on previous page
        a. Have the onclicked title saved onto local storage DONE
        b. insert this title into recipe variable DONE
2. Grab page url/recipe and slap into body of email message DONE
====================================================*/

