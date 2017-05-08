var mysql = require("mysql");
var conneection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "pets_db",
    password: " "
});
connection.connect(function(err) {
  if (err) {
    console.log("error connecticting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
module.exports = connection;
  
                                                                                              
