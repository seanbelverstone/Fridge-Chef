// Initial Arrays for Page Two

var ingredients = {
    proteinsArray: ['Bacon', 'Beef', 'Chicken', 'Fish', 'Lamb', 'Pork', 'Shrimp', 'Turkey'],
    grainsArray: ['Almonds', 'Brown Rice', 'Oat', 'Pasta', 'Quinoa', 'Rice', 'Walnuts', 'Wheat'],
    fruitAndVegArray: ['Apple', 'Banana', 'Blueberries', 'Lemons', 'Tomato', 'Celery', 'Leek', 'Onion', 'Potato', 'Strawberries', 'Grapes',  'Cabbage', 'Mushrooms', 'Carrots', 'Bell Peppers', 'Broccoli', 'Cucumber'],
    dairyArray: ['Milk', 'Cheese', 'Yogurt', 'Cream', 'Butter', 'Eggs'],
    condimentsArray: ['Mustard', 'Mayo', 'Ketchup', 'Olive-Oil', 'Vinegar', 'Balsamic', 'Honey', 'Soy-Sauce', 'Sesame-Oil']
}

var selectedIngredients = [];

var proteinClicked = 0;
var dairyClicked = 0;
var grainClicked = 0;
var condimentClicked = 0;
var fruitVegClicked = 0;
var ingredientFoodGroup;



//Global function to be placed in each food group click event
function showArray(ingredientsList) {



    //For loop that runs through the array corresponding with the food group.
    for (var i = 0; i < ingredientsList.length; i++) { 
        
        // SCOTT: This creates our checkboxes, as clickable morphing things, for each item.
        var checkbox = $("<label>");
        checkbox.attr("for", ingredientsList[i]);
        var input = $("<input>").attr("type", "checkbox");
        input.addClass("checkBox");
        input.attr("id", ingredientsList[i].replace(" ", "-"));
        input.attr("name", ingredientsList[i].replace(" ", "-"));
        //SEAN: checking to see if the ingredient is on the ingredients list, meaning it's already checked.
        var ingredientText = $("<span>");
        ingredientText.text(ingredientsList[i]); // SCOTT: Setting the text equal to each item in the ingredientsList variable. The ingredientsList variable now contains the contents of the precise ingredient array that we want (which we defined at the time that the showArray function was run)

        if (selectedIngredients.indexOf(ingredientsList[i]) !== -1) {
            console.log("hello");
            input.prop('checked', true);
            //need to check that the checkbox has already had it's state changed to "checked"
        } 
        checkbox.append(input);
        checkbox.append(ingredientText); // SCOTT: Appending the text onto the checkbox.

        // SCOTT: Getting things to display vertically! This inserts both a Line Break, and the entire Checkbox+Text object we created, onto the webpage.
        // SCOTT: This repeats for each item in the array.
        $("#ingredientSection").append("<br>");
        $("#ingredientSection").append(checkbox);



    }
}





//SCOTT: Next, we need to create on-click events for each Checkbox that is created. Ideally, we need something that checks, IF this checkbox is checked, THEN we put the contents of that checkbox onto the "Your Selected Stuff" div. Then if the checkbox is UNchecked, we REMOVE that checkbox from the "Your Selected Stuff" div.

// SCOTT: This should be a click sensor, and it should spit the text of its checkbox, into the SELECTED section of the webpage.


$(document).on("click", ".checkBox", function() { 
    var selectedText = $(this).attr("name");    
    // SCOTT: If the checkbox is UNchecked at the time the user clicks it, then DO_THIS_STUFF
    if ($(this).prop("checked") === true) {

        // console.log("We clicked a checkbox!");
        // console.log($(this).attr("name"));
        // SEAN: Storing the ingredient (milk/ cheese etc) into a variable
        

        console.log($(this).attr("name"));

        //SEAN: pushing it to the empty array
        selectedIngredients.push(selectedText);
        //SEAN: Console log to check
        console.log(selectedIngredients);



        selectedIngredientsRefresh();

    } else {
       console.log("box should be unchecked");

       //stores the index position of the selected text into a variable
    //    var indexOfIngredient = selectedIngredients.indexOf(selectedText);

    // Filter ! This goes through the array, comparing each ingredient against the selectedText.
    // if it returns TRUE, it keeps going
    // if it returns FALSE, it removes it and keeps going
       selectedIngredients = selectedIngredients.filter(ingredient => ingredient !== selectedText)

        selectedIngredientsRefresh();
    }
    });




function selectedIngredientsRefresh() {
    //SEAN: Clear the ingredients list first
    $("#selectedIngredientsList").empty();
    //SEAN: Display array in selectedIngredients div
    $("#selectedIngredientsList").append("<ul>");
    //SEAN: Need to display vertically - currently displaying horizontally
    for (var j = 0; j < selectedIngredients.length; j++) {
        $("#selectedIngredientsList").append("<li>" + selectedIngredients[j] + "</li>");
    }
};








//Protein click function
$("#protein").on("click", function() {
    // SCOTT: When the Protein button is clicked, we trip our Clicked 
    // flag to 1, and reset all other ingredient flags to 0
    proteinClicked = 1;
    dairyClicked = 0;
    grainClicked = 0;
    condimentClicked = 0;
    fruitVegClicked = 0;

    // SCOTT: Empties out the image div so only one shows at a time.
    $("#foodGroupImage").empty();

    //changes text in the h4 element
    $("#foodGroupTitle").text("Proteins");

    // SCOTT: Prepends a little icon image above the ingredient category.
    $("<img/>").prependTo("#foodGroupImage").attr({
        src: 'assets/images/meaticon.png',
        alt: '',
        height: '60px'
    });
    //Clears the form to remove any previous checkboxes
    $("#ingredientSection").empty();
    
    showArray(ingredients.proteinsArray); // SCOTT: Here we are running the showArray function, but inserting the EXACT ARRAY that we want to run it on. We're already precisely defining what we want showArray to apply to, at the time that we're running the function.
});

//Grains click function
$("#grains").on("click", function() {
    // SCOTT: When the Grain button is clicked, we trip our Clicked 
    // flag to 1, and reset all other ingredient flags to 0
    proteinClicked = 0;
    dairyClicked = 0;
    grainClicked = 1;
    condimentClicked = 0;
    fruitVegClicked = 0;

    // SCOTT: Empties out the image div so only one shows at a time.
    $("#foodGroupImage").empty();

    //Changes text in the h4 element
    $("#foodGroupTitle").text("Grains");
    
    $("<img/>").prependTo("#foodGroupImage").attr({
        src: 'assets/images/grains.png',
        alt: '',
        height: '60px'
    });
    //Clears the form to remove any previous checkboxes
    $("#ingredientSection").empty();
    showArray(ingredients.grainsArray); // SCOTT: Here we are running the showArray function, but inserting the EXACT ARRAY that we want to run it on. We're already precisely defining what we want showArray to apply to, at the time that we're running the function.
});

//Fruit and Veg click function
$("#fruitAndVeg").on("click", function() {
    // SCOTT: When the FruitVeg button is clicked, we trip our Clicked 
    // flag to 1, and reset all other ingredient flags to 0
    proteinClicked = 0;
    dairyClicked = 0;
    grainClicked = 0;
    condimentClicked = 0;
    fruitVegClicked = 1;

    // SCOTT: Empties out the image div so only one shows at a time.
    $("#foodGroupImage").empty();

    //changes text in the h4 element
    $("#foodGroupTitle").text("Fruit and Veg");

    $("<img/>").prependTo("#foodGroupImage").attr({
        src: 'assets/images/fruitvegpic.png',
        alt: '',
        height: '60px'
    });
    //Clears the form to remove any previous checkboxes
    $("#ingredientSection").empty();
    showArray(ingredients.fruitAndVegArray); // SCOTT: Here we are running the showArray function, but inserting the EXACT ARRAY that we want to run it on. We're already precisely defining what we want showArray to apply to, at the time that we're running the function.
});

//Dairy click function
$("#dairy").on("click", function() {
    // SCOTT: When the Dairy button is clicked, we trip our Clicked 
    // flag to 1, and reset all other ingredient flags to 0
    proteinClicked = 0;
    dairyClicked = 1;
    grainClicked = 0;
    condimentClicked = 0;
    fruitVegClicked = 0;

    // SCOTT: Empties out the image div so only one shows at a time.
    $("#foodGroupImage").empty();

    //changes text in the h4 element
    $("#foodGroupTitle").text("Dairy");

    $("<img/>").prependTo("#foodGroupImage").attr({
        src: 'assets/images/dairyicon.png',
        alt: '',
        height: '60px'
    });
    //Clears the form to remove any previous checkboxes
    $("#ingredientSection").empty();
    showArray(ingredients.dairyArray); // SCOTT: Here we are running the showArray function, but inserting the EXACT ARRAY that we want to run it on. We're already precisely defining what we want showArray to apply to, at the time that we're running the function.
});

//Condiments click function
$("#condiments").on("click", function() {
    // SCOTT: When the Condiments button is clicked, we trip our Clicked 
    // flag to 1, and reset all other ingredient flags to 0
    proteinClicked = 0;
    dairyClicked = 0;
    grainClicked = 0;
    condimentClicked = 1;
    fruitVegClicked = 0;
    
    // SCOTT: Empties out the image div so only one shows at a time.
    $("#foodGroupImage").empty();
    
    //changes text in the h4 element
    $("#foodGroupTitle").text("Condiments");

    $("<img/>").prependTo("#foodGroupImage").attr({
        src: 'assets/images/condiments.png',
        alt: '',
        height: '60px'
    });

    //Clears the form to remove any previous checkboxes
    $("#ingredientSection").empty();
    showArray(ingredients.condimentsArray); // SCOTT: Here we are running the showArray function, but inserting the EXACT ARRAY that we want to run it on. We're already precisely defining what we want showArray to apply to, at the time that we're running the function.
});




$("#submit").on("click", function(event) {
    // Check if SelectedIngredients is empty.
    // IF EMPTY:

        if (selectedIngredients.length === 0) {
            // Toast: "Hey! Go add some ingredients!"
            M.toast({html: 'Hey! Go add some ingredients!'});
            // Stop user from navigating away.
            event.preventDefault();
        } 
        // OTHERWISE:
        else {
            // Take selectedIngredients and put it into LocalStorage
            localStorage.setItem("ingredients", selectedIngredients);
            console.log(selectedIngredients);
        }

});


// PAGE 3-------------------------------

//grabs the local storage info and stores it into a variable
var recipeArray = localStorage.getItem("ingredients");
//turns the local storage array into a string and lowercases it
var jsonArray = JSON.stringify(recipeArray).toLowerCase();
//replaces the commas with plus symbol to assist in the search
var correctedArray = jsonArray.replace(/,/g, '+');
console.log(correctedArray);


$(document).on("click", ".exampleSubmit", function() {

    function recipeInfo() {

        var queryURL = "https://www.food2fork.com/api/search?q=" + correctedArray + "&key=f4516eb74b92e1200c2a1de2939ba5da";
        console.log(queryURL);

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
                    // creates the new card for the recipe
                    var newCard = $("<div>")

                    // Giving newCard a class
                        // 1. card = materialize card format (MUST HAVE)
                        // 2. recipe-card = for style.css
                        // 3. col s12 m6 l4 = for responsiveness with materialize 

                    newCard = newCard.attr("class","card recipe-card col s12 m6 l4");


                // FOR IMAGES -------------------------
                    // adds a div for the image
                    var cardImg = $("<div>")

                    // adds class and id to the image div
                        // 1. card-image = materialize card format (MUST HAVE)
                        // 2. image-size = for style.css to make all images' size from API equal to look organized
                        // 3. recipe-images-here = where images from API get appended
                    cardImg = cardImg.attr("class", "card-image image-size");
                    cardImg = cardImg.attr("id", "recipe-images-here");

                    // creates the image tag for the recipe image
                    var image = $("<img>");

                    //adds images from API to the image tag
                    image = image.attr("src", results.recipes[i].image_url);


                // FOR TITLES -------------------------
                    // var cardTitle = $("<span></span>");
                    // adds a div for the title
                    var cardTitle = $("<div>");

                    // adds class and id to the title div
                        // 1. card-title = materialize card format (MUST HAVE)
                        // 2. recipe-titles-here  = where recipe titles to append                  
                    cardTitle = cardTitle.attr("class", "card-title");
                    cardTitle = cardTitle.attr("id", "recipe-titles-here");
                    caradTitle = cardTitle.text(results.recipes[i].title);


                // FOR CONTENTS -------------------------
                    // adds a div for the content
                    var cardContent = $("<div>");

                    // adds class and id to the title div
                        // 1. card-content = materialize card format (MUST HAVE)   
                    cardContent = cardContent.attr("class", "card-content");
                    cardContent = cardContent.text("Recipe Title: " + results.recipes[i].title);


                // FOR LINKS -------------------------
                    // adds a div for the links
                    var link = $("<div>");
                    // adds class and id to the title div
                        // 1. card-action = materialize card format (MUST HAVE)
                    link = link.attr("class", "card-action");

                    // adds a clickable link
                    var linksrc = $("<a>Recipe Link</a>");
                    
                    // link source from JSON format
                    linksrc = linksrc.attr("href", results.recipes[i].source_url);

                    
                // Appends the image and the title to the image div
                    cardImg.append(image);
                    cardImg.append(cardTitle);

                // Appends the link source to the link div
                    link.append(linksrc);
                    
                // Appends the image div, the content div, and the link div to the new card div
                    newCard.append(cardImg)
                    newCard.append(cardContent);
                    newCard.append(link);

                // Appends the new card to the larger container
                    $("#cards").append(newCard);
                }
                
                repeatCard();

            };
        });
    };

    recipeInfo();

})  



//------------------------- DONT NEED THIS --------------------------------------------------------------


//     // Output all of the new information into the relevant HTML sections

//     showAllStuff();
//   });


//   function showAllStuff() {
//   $("#name-display").text("");
//   $("#name-display").text(localStorage.getItem("name"));

//   $("#email-display").text("");
//   $("#email-display").text("Email: " + localStorage.getItem("email"));

//   $("#age-display").text("");
//   $("#age-display").text("Age: " + localStorage.getItem("age"));

//   $("#comment-display").text("");
//   $("#comment-display").text("Comment: " + localStorage.getItem("comment"));
// }
// showAllStuff();