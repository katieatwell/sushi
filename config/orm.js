var connection = require("./connection.js");

//Helper Functions
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// Object Relational Mapper (ORM)

//DONT FORGET TO ADD A SELECT ALL AND INSERT ONE FUNCTIONS
var orm = {
    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    updateOne: function(table, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += "devoured=true";
        queryString += " WHERE ";
        queryString += condition;

        console.log("Updating" + queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },

    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
};

module.exports = orm;
