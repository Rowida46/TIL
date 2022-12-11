var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('hr');

const users = ["Sara", "Mike", "James", "David", "Emily"];


function insertData(){
    var insertQuery = db.prepare("INSERT INTO canditates VALUES (?,?,?)");
    for (var i = 0; i < users.length; i++) {
        insertQuery.run(i, users[i], 'SW');
        console.log("Data inserted successfully...");
    }
    insertQuery.finalize();
}

function accessData(){
    db.each("SELECT * FROM canditates", function(err, row) {
    	console.log(row.id + ": " + row.name, row.position);

    });
}

function deleteData(name){
    db.run("DELETE FROM canditates WHERE name=?",name, err =>{
        console.log(`${name} deleted successfully...`);
    });
}
db.serialize(function() {
   //  db.run("CREATE TABLE mytable (id, name)");
    insertData();
    /*for(let i =0 ; i != users.length; i++){
    	deleteData(users[i]);
    }
    */

    accessData();

});

db.close();

console.log('out')




// https://www.freecodecamp.org/news/rest-api-design-best-practices-build-a-rest-api/
// https://www.w3resource.com/node.js/nodejs-sqlite.php
// https://www.delftstack.com/howto/javascript/sqlite-javascript/#delete-data-from-the-sqlite-database-using-node-js-in-javascript
const express = require("express"); 
const v1Router = require("./v1/routes");
const v1WorkoutRouter = require("./v1/routes/workoutRoutes")
const bodyParser = require("body-parser");

const app = express(); 
const PORT = process.env.PORT || 3000;


app.get("/", (req, res) =>{
	res.send("<h2>Voala.. </h2>");
});


app.use(bodyParser.json());
app.use('/api/v1', v1Router);
app.use("/api/v1/workouts", v1WorkoutRouter);


app.listen(PORT, ()=>{
	console.log(`API is listening on port ${PORT}`); 
});