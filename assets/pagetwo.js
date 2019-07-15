// Initial Arrays for Page Two

var ingredients = {
    proteinsArray: ['Bacon', 'Beef', 'Chicken', 'Fish', 'Pork',  'Lamb',  'Shrimp', 'Turkey'],
    grainsArray: ['Almonds', 'Brown Rice', 'Oat', 'Pasta', 'Quinoa', 'Rice', 'Walnuts', 'Wheat'],
    fruitAndVegArray: ['Lemons', 'Limes', 'Apple', 'Tomato', 'Celery', 'Leek', 'Onion', 'Potato', 'Blueberries', 'Strawberries', 'Grapes', 'Banana', 'Cabbage', 'Lettuce', 'Mushrooms', 'Avocado', 'Carrots', 'Bell Peppers', 'Broccoli', 'Cucumber', 'Jalapeño', 'Garlic'],
    dairyArray: ['Milk', 'Cheese', 'Yoghurt', 'Heavy Cream', 'Butter', 'Eggs'],
    condimentsArray: ['Mustard', 'Mayo', 'Ketchup', 'Olive Oil', 'Vinegar', 'Balsamic', 'Honey', 'Soy Sauce', 'Sesame Oil']
}

var proteinClicked = 0;
var dairyClicked = 0;
var grainClicked = 0;
var condimentClicked = 0;
var fruitVegClicked = 0;
var ingredientFoodGroup;

//Global function to be placed in each food group click event
function showArray() {


    //if protein selected make var ingredientFoodGroup = ingredients.proteinsArray[i] 
    if (proteinClicked = 1) {
        ingredientFoodGroup = ingredients.proteinsArray[i];
    } 

    //if dairy selected make var ingredientFoodGroup = ingredients.dairyArray[i] 
    if (dairyClicked = 1) {
        ingredientFoodGroup = ingredients.proteinsArray[i];
    } 

    //if grains selected make var ingredientFoodGroup = ingredients.grainsArray[i] 
    if (grainClicked = 1) {
        ingredientFoodGroup = ingredients.proteinsArray[i];
    } 

    //if grains selected make var ingredientFoodGroup = ingredients.grainsArray[i] 
    if (grainClicked = 1) {
        ingredientFoodGroup = ingredients.proteinsArray[i];
    } 




    //For loop that runs through the array corresponding with the food group.
    for (var i = 0; i < Array.length; i++) {
        
        var checkbox = $("<label>");
        var input = $("<input>").attr("type", "checkbox");
        checkbox.append(input);
        var ingredientText = $("<span>");
        checkbox.append(ingredientText)/*.text(ingredientFoodGroup) */;
        $("#ingredientSection").append(checkbox);
    }
}

//Protein click function
$("#protein").on("click", function() {
    // When the Protein button is clicked, we trip our Clicked 
    // flag to 1, and reset all other ingredient flags to 0
    proteinClicked = 1;
    dairyClicked = 0;
    grainClicked = 0;
    condimentClicked = 0;
    fruitVegClicked = 0;

    //changes text in the h4 element
    $("#foodGroupTitle").text("Proteins");
    //Clears the form to remove any previous checkboxes
    $("#ingredientSection").empty();
    showArray();
})

//Grains click function
$("#grains").on("click", function() {
    // When the Grain button is clicked, we trip our Clicked 
    // flag to 1, and reset all other ingredient flags to 0
    proteinClicked = 0;
    dairyClicked = 0;
    grainClicked = 1;
    condimentClicked = 0;
    fruitVegClicked = 0;

    //Changes text in the h4 element
    $("#foodGroupTitle").text("Grains");
    //Clears the form to remove any previous checkboxes
    $("#ingredientSection").empty();
    showArray();
})

//Fruit and Veg click function
$("#fruitAndVeg").on("click", function() {
    // When the FruitVeg button is clicked, we trip our Clicked 
    // flag to 1, and reset all other ingredient flags to 0
    proteinClicked = 0;
    dairyClicked = 0;
    grainClicked = 0;
    condimentClicked = 0;
    fruitVegClicked = 1;

    //changes text in the h4 element
    $("#foodGroupTitle").text("Fruit and Veg");
    //Clears the form to remove any previous checkboxes
    $("#ingredientSection").empty();
    showArray();
})

//Dairy click function
$("#dairy").on("click", function() {
    // When the Dairy button is clicked, we trip our Clicked 
    // flag to 1, and reset all other ingredient flags to 0
    proteinClicked = 0;
    dairyClicked = 1;
    grainClicked = 0;
    condimentClicked = 0;
    fruitVegClicked = 0;

    //changes text in the h4 element
    $("#foodGroupTitle").text("Dairy");
    //Clears the form to remove any previous checkboxes
    $("#ingredientSection").empty();
    showArray();
})

//Condiments click function
$("#condiments").on("click", function() {
    // When the Condiments button is clicked, we trip our Clicked 
    // flag to 1, and reset all other ingredient flags to 0
    proteinClicked = 0;
    dairyClicked = 0;
    grainClicked = 0;
    condimentClicked = 1;
    fruitVegClicked = 0;
    
    //changes text in the h4 element
    $("#foodGroupTitle").text("Condiments");
    //Clears the form to remove any previous checkboxes
    $("#ingredientSection").empty();
    showArray();
})



$(document).on("click", ".submit", function() {
    var recipeArray = [];

    function recipeInfo() {
        var recipeInfo = $(this).attr("data-recipe");

        var queryURL = "https://api.edamam.com/search?q=" + recipeInfo + "&api_key=4e0c932fa1b0050f9146464e54d8f042" + "&api_id=f18cd003";

        $.ajax({
            url: queryURL,
            method: "GET"
        })

        .then(function(response) {

            var results = response.data;

            $("#recipe-images-here").empty();

            for (var i = 0; i < results.length; i++) {
                console.log(results[i]);

                var imageDiv = $("<div>");
                var recipeImage = $("<img>");

                imageDiv.append(recipeImage);
                recipeArray.push(results);

                $("#recipe-images-here").append(imageDiv);
            };

        });
    };

})