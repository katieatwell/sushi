var orm = require("../config/orm.js")

var sushi = {
    updateOne: function(condition, cb) {
        orm.updateOne("sushiRolls", condition, function(res) {
            cb(res);
        });
    },
    selectAll: function(cb) {
        orm.selectAll("sushiRolls", function(res) {
            cb(res);
        });
    },
    // // The variables cols and vals are arrays.
    insertOne: function(cols, vals, cb) {
        orm.insertOne("sushiRolls", cols, vals, function(res) {
            cb(res);
        });
    }
};

module.exports = sushi;
