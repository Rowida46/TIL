
// https://www.freecodecamp.org/news/rest-api-design-best-practices-build-a-rest-api/
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