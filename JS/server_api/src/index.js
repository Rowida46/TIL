// https://github.com/freeCodeCamp/boilerplate-npm/blob/gomix/server.js 
// https://www.delftstack.com/howto/javascript/sqlite-javascript/#:~:text=var%20sqlite3%20%3D%20require%28%27sqlite3%27%29.verbose%28%29%3B%20The%20verbose%20%28%29%20function,the%20SQLite%20Database%20Inside%20the%20Node.js%20in%20JavaScript
const express = require("express"); 
const path = require('path');
// var mysql = require('mysql');
var sqlite3 = require('sqlite3').verbose();
// The verbose() function will set the execution mode to verbose to produce long stack traces.

var db = new sqlite3.Database('users_db.db');

db.serialize(()=>{
  db.run('create table user(id, name');
});
db.close();

const app = express(); 
const PORT = process.env.PORT || 3000; 
/*
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
*/

app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));


const Datastore = require('nedb');
app.use(express.json({ limit: '1mb' }));


/*
Route handlers enable you to define multiple routes for a path. The example below defines
 two routes for GET requests to the /user/:id path. The second route will not cause any problems,
** but it will never get called because the first route ends the request-response cycle
*/
/*
app.get('/user/:id', (req, res) => {
  res.send('USER')
})

app.use('/user/:id', (req, res, next) => {
  console.log('Request URL:', req.originalUrl)
  next()
}, (req, res, next) => {
  console.log('Request Type:', req.method)
  next()
})
*/
/*
app.get('/user/:id', (req, res, next) => {
  // if the user ID is 0, skip to the next route
  if (req.params.id === '0') next('route')
  // otherwise pass the control to the next middleware function in this stack
  else next()


}, (req, res, next) => {
  // send a regular response
  res.send('regular')
})

// handler for the /user/:id path, which sends a special response
app.get('/user/:id', (req, res, next) => {
  res.send('special')
})
*/

/* This example shows an array with a middleware sub-stack that handles GET requests to 
the /user/:id path
*/

function logOriginalUrl (req, res, next) {
  console.log('Request URL:', req.originalUrl)
  next()
}

function logMethod (req, res, next) {
  console.log('Request Type:', req.method)
  console.log(req.params);
  next()
}

const logStuff = [logOriginalUrl, logMethod]
app.get('/user/:id', logStuff, (req, res, next) => {
  res.send('User Info')
})

/*
Showing parameters ...
  route_path: '/user/:userId/book/:bookId'
  actual_request_URL: '/user/546/book/6754'
  req.params: {userId: '546', bookId: '6754'}
*/
/*
Another common way to get input from the client is by encoding the data after the route path, 
using a query string. The query string is delimited by a question mark (?),
 and includes field=value couples. Each couple is separated by an ampersand (&)
*/
app.get("/name", (req,res)=>{
  console.log(req.query); // http://localhost:3000/name?first=firstname&last=lastname
})
const allData = [];

app.post('/api', (request, response) => {
  const data = request.body;
  allData.push(data);
  response.json(allData);
  console.log(allData);
});



app.post('/api', (request, response) => {
  const data = request.body;
  const timestamp = Date.now();
  data.timestamp = timestamp;
  database.insert(data);
  response.json(data);
});


const database = new Datastore('database.db');
database.loadDatabase();

app.post('/api', (request, response) => {
  const data = request.body;
  const timestamp = Date.now();
  data.timestamp = timestamp;
  database.insert(data);
  response.json(data);
  console.log(  response.json(data))
  console.log(database.length , 8)
});


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, '../views/index.html'));
  app.use("/public", express.static(__dirname + "/public"));

}); 



const middleware = (req, res, next) => {
  req.time = new Date().toString();
  next();
};

app.get("/now", middleware, (req, res) => {
  res.send({
    time: req.time
  });
});


// freecodecamp/echo :: would return {"echo":"freecodecamp"}
app.get("/:word/echo", (req, res) => {
  const { word } = req.params;
  console.log(word)
  res.json({
    echo: word
  });
});


app.get('/:id', (req, res) =>{
	res.send({'id' : 2})
})



app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
})


app.get("/name", function(req, res) {
  var firstName = req.query.first;
  var lastName = req.query.last;
  // OR you can destructure and rename the keys
  var { first: firstName, last: lastName } = req.query;
  // Use template literals to form a formatted string
  res.json({
    name: `${firstName} ${lastName}`
  });
});