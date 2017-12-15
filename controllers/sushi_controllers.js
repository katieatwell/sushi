var express = require("express");
var sushi = require("../models/sushi.js");
var router = express.Router();

router.get("/", function(req, res) {
    sushi.selectAll(function(data) {
        var hbsObject = {
            sushi: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function(req, res) {
    console.log("controller 16 posting");
    sushi.insertOne([
            "sushi_name"
        ], [
            req.body.sushi_name
        ],
        function(result) {
            res.render("index", result.newRoll);
        });
});

router.put("/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    sushi.updateOne(condition,
        function(result) {
            if (result.changedRows == 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            }
            else {
                res.status(200).end();
            }
        });
});

// Export routes for server.js to use.
module.exports = router;
