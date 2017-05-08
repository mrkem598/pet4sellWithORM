// Requiring the exported module/file
var connection = require("./connection.js");
//Object Relational Mapping (ORM)
var orm = {
  selectWhere: function(tableInput, colToSearch, valOfCol) {
    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result {
     console.log(result);
     });
  },
selectAndOrder: function(whatToSelect, table, orderCol, orderBy) {
  var queryString = "SELECT ?? FROM ?? ORDER BY ? ?";
  console.log(result);
});
},
    findWhoHasMost: function(tableOneCal, tableTwoForeignKey, tableOne, tableTwo) {
    var queryString = "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.ID GROUP BY ?? ORDER BY count DESC LIMIT 1";
      connection.query(queryString, [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol], function(err, result) {
        console.log(result);
      });
    }
};
module.exports = orm;
