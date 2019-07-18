$(document).on("click", ".exampleSubmit", function() {
    var recipeArray = ['lemons', 'limes', 'bacon', 'mustard', 'yogurt'];

    function recipeInfo() {
        var recipeInfo = "bacon";

        var queryURL = "https://www.food2fork.com/api/search?q=" + recipeInfo + "&key=569763e780e654df8c9268b64763d32f";
        // console.log(queryURL);

        // my api key: 431843444431d180b6a297feea29edde
        // Jacob's api key: 41a415b9f58abaf64da0f2072369f676
        // Scott's api key: f4516eb74b92e1200c2a1de2939ba5da
        // KH's api key: 569763e780e654df8c9268b64763d32f

        $.ajax({
            url: queryURL,
            method: "GET"
        })

        .then(function(response) {
            var results = JSON.parse(response);

            $("#recipe-images-here").empty();
            console.log(response);

            for (var i = 0; i < results.recipes.length; i++) {
                console.log(results.recipes[i]);

                function repeatCard() {

                    // FOR NEW CARDS ----------------------
                    //creates the new card for the recipe
                    var newCard = $("<div>")

                    //adds class 'card' to the new card made
                    newCard = newCard.attr("class","card");


                    // FOR IMAGES -------------------------
                    //adds a div for the image
                    var cardImg = $("<div>")

                    //adds class and id to the image div
                    cardImg = cardImg.attr("class", "card-image");
                    cardImg = cardImg.attr("id", "recipe-images-here");

                    //creates the image tag for the recipe image
                    var image = $("<img>");

                    //adds image to the image tag
                    image = image.attr("src", results.recipes[i].image_url);

                    

                    //appends the image to the image div
                    cardImg.append(image);
                    newCard.append(cardImg)


                    // FOR TITLES -------------------------
                    var cardTitle = $("<div>");

                    cardTitle = cardTitle.attr("class", "card-title");
                    cardTitle = cardTitle.attr("id", "recipe-titles-here");
                    cardTitle = cardTitle.text(results.recipes[i].title);

                    newCard.append(cardTitle);



                    // FOR LINKS to Page 4 ----------------
                    var linkToNext = $("<div>");

                    linkToNext =linkToNext.attr("class", "link-to-next");
                    linkToNext =linkToNext.html("<a href=#>Click to get your Recipe</a>");

                    newCard.append(linkToNext);

                    // Appending the card to the larger container
                    $("#cards").append(newCard);
                }
    





                    // var newCard = $('div').attr('class', 'card');

                    // var recipeImage = $("<img>");
                    // recipeImage.attr("src", results.recipes[i].image_url);
                    // $(".container").append(recipeImage);

                    // var recipeTitle = $("<p>");
                    // recipeTitle.text(results.recipes[i].title);
                    // $(".container").append(recipeTitle);

                    // var createCard = $("<div>");
                    // // createCard.attr(recipeImage, recipeTitle);
                    // createCard.attr("class", "card");
                    // $(".container").append(newCard);

                    // $.each(recipeArray), function (i) {
                    //     var createCard = '<article class="card"><h2>' + recipes[i].title + '</h2><img>' + recipeArray[i].image_url + '</img></article>';
                    //     $('#cards').append(createCard);
                    // }
                
                repeatCard();

            };
        });
        
    };

    recipeInfo();

})  
