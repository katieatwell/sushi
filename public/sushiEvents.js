$(function() {
    $(".change-devoured").on("click", function(event) {
        var id = $(this).data("id");
        console.log(id);

        var newDevouredState = {
            devoured: true
        };
        console.log(newDevouredState);
        // Send the PUT request.
        $.ajax("/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function() {
                console.log("changed devoured to " + newDevouredState);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".add").on("click", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        console.log("We are clicking!");
        var newSushi = {
            sushi_name: $("#sushiName").val().trim()
        };

        // Send the POST request.
        $.ajax("/", {
            type: "POST",
            data: newSushi
        }).then(
            function() {
                console.log("created new sushi roll" + newSushi);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
