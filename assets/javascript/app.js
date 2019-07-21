//grabs the local storage info and stores it into a variable
var recipeArray = localStorage.getItem("ingredients");
//turns the local storage array into a string and lowercases it
var jsonArray = JSON.stringify(recipeArray).toLowerCase();
// the above code that has been commented out isnt required as the documentation states that ingredients need to be separated by commas.
console.log(jsonArray);

//waits for the document to be ready before starting this function
$(document).ready(function() {


    //loading bar appears in the cards section
    $("#cards").append("<div class='progress'><div class='indeterminate'></div></div>");

    function recipeInfo() {

        var queryURL = "https://www.food2fork.com/api/search?q=" + jsonArray + "&key=f4516eb74b92e1200c2a1de2939ba5da";

        console.log(queryURL);

        // my api key: 431843444431d180b6a297feea29edde
        // Jacob's api key: 41a415b9f58abaf64da0f2072369f676
        // Scott's api key: f4516eb74b92e1200c2a1de2939ba5da
        // KH's api key: 569763e780e654df8c9268b64763d32f
        // Danniel's api key: ed24f7b0cbe2cc006d00257869dbe9b7
        // Sean's api key: 4ed288ed4b4af47c2487c9d1b2640147 
        // Lorena's api key: 5cb31501fed0cde5ca4f43d7c223b03a

        $.ajax({
            url: queryURL,
            method: "GET"
        })

        .then(function(response) {
            var results = JSON.parse(response);
            //hides the progress bar once the page has finished loading
            $(".progress").css("display", "none");

            $("#recipe-images-here").empty();
            console.log(response);

            if (results.count === 0) {
                var notice = $("<div>");
                notice.append("<p class=notice>Oops! Looks like there aren't any recipes for that search.</p>");
                notice.append("<p class=notice>Please try refining your ingredients</p>");
                $("#cards").append(notice);
            }

            for (var i = 0; i < results.recipes.length; i++) {
                console.log(results.recipes[i]);

                function repeatCard() {

                    // FOR NEW CARDS ----------------------
                    // creates the new card for the recipe
                    var newCard = $("<div>")

                    // Giving newCard a class
                    // 1. card = materialize card format (MUST HAVE)
                    // 2. recipe-card = for style.css
                    // 3. col s12 m6 l4 = for responsiveness with materialize 

                    newCard = newCard.attr("class","card recipe-card col s12 m6 l4");


                    // FOR IMAGES -------------------------
                    // adds a div for the image
                    var cardImg = $("<div>");

                    // adds class and id to the image div
                        // 1. card-image = materialize card format (MUST HAVE)
                        // 2. image-size = for style.css to make all images' size from API equal to look organized
                        // 3. recipe-images-here = where images from API get appended
                    cardImg = cardImg.attr("class", "card-image image-size");
                    cardImg = cardImg.attr("id", "recipe-images-here");

                    // creates the image tag for the recipe image
                    var imageLink = $("<a href=finalpage.html>");
                    var image = $("<img>");

                    //adds images from API to the image tag
                    image = image.attr("src", results.recipes[i].image_url);
                    imageLink.append(image);

                    // FOR CONTENTS -------------------------
                    // adds a div for the content
                    var cardContent = $("<div>");

                    // adds class and id to the title div
                        // 1. card-content = materialize card format (MUST HAVE)   
                    cardContent = cardContent.attr("class", "card-content");

                    cardContent = cardContent.text("# " + results.recipes[i].title)

                    cardContent = cardContent.text(results.recipes[i].title);

                    // SCOTT: THE SECRET SAUCE!!! Each image that is added is given an onClick function, 
                        // and On click, we run a function that looks at THIS (the thing we clicked) by passing 
                        // it in as an argument to the function
                    image = image.attr("onClick", "reply_click(this)");
                    // SCOTT: The Dumbwaiter/dead-drop. We take the recipe image URL, recipe source URL, and 
                        // recipe title, which we're going to need later, and we're storing them publicly into the 
                        // HTML itself. This allows the global scope function reply_click to be able to access this 
                        // info, later on when the user actually clicks.
                    image = image.attr("name", results.recipes[i].title);
                    image = image.attr("recipePic", results.recipes[i].image_url);
                    image = image.attr("recipeUrl", results.recipes[i].source_url);

                    // Appends the image and the title to the image div
                    cardImg.append(imageLink);
                    
                    // Appends the image div, the content div, and the link div to the new card div
                    newCard.append(cardImg)
                    newCard.append(cardContent);
                    // newCard.append(link);

                    // Appends the new card to the larger container
                    $("#cards").append(newCard);

                }
                
                
                repeatCard();

            };
            
        });
    };

    recipeInfo();
                

});


function reply_click(clicked_object)
{
    var recipeTitle = (clicked_object.getAttribute('name'));
    var foodUrl = (clicked_object.getAttribute('recipeUrl'));
    var foodPic = (clicked_object.getAttribute('recipePic'));   
     
    console.log("The recipe title is: " + recipeTitle);
    localStorage.setItem("recipe title", recipeTitle);
    localStorage.setItem("foodLink", foodUrl);
    localStorage.setItem("foodImg", foodPic);
}
