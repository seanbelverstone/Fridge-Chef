




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