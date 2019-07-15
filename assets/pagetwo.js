// Initial Arrays for Page Two

var ingredients = {
    proteinsArray: ['Bacon', 'Beef', 'Chicken', 'Fish', 'Pork',  'Lamb',  'Shrimp', 'Turkey'],
    grainsArray: ['Almonds', 'Brown Rice', 'Oat', 'Pasta', 'Quinoa', 'Rice', 'Walnuts', 'Wheat'],
    fruitAndVegArray: ['Lemons', 'Limes', 'Apple', 'Tomato', 'Celery', 'Leek', 'Onion', 'Potato', 'Blueberries', 'Strawberries', 'Grapes', 'Banana', 'Cabbage', 'Lettuce', 'Mushrooms', 'Avocado', 'Carrots', 'Bell Peppers', 'Broccoli', 'Cucumber', 'Jalapeño', 'Garlic'],
    dairyArray: ['Milk', 'Cheese', 'Yoghurt', 'Heavy Cream', 'Butter', 'Eggs'],
    condimentsArray: ['Mustard', 'Mayo', 'Ketchup', 'Olive Oil', 'Vinegar', 'Balsamic', 'Honey', 'Soy Sauce', 'Sesame Oil']
}

function showArray() {
    for (var i = 0; i < Array.length; i++) {
        
        var checkbox = $("<label>");
        var input = $("<input>").attr("type", "checkbox");
        checkbox.append(input);
        var ingredientText = $("<span>");
        checkbox.append(ingredientText);
        $("#ingredientSection").append(checkbox);
    }
}

/*      <p>
            <label>
            <input type="checkbox" class="filled-in" checked="checked" />
            <span>Filled in</span>
            </label>
        </p>*/

$("#protein").on("click", function() {
    $("#foodGroupTitle").text("Proteins");
    // ingredientText.val(ingredients.proteinsArray[i])
    showArray();

})

// var toDoClose = $("<button>");

// toDoClose.attr("data-to-do", toDoCount);
// toDoClose.addClass("checkbox");
// toDoClose.text("✓");


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