
/*
* It's also a good practice to name the service methods the same as the controller methods
** so that you have a connection between those.
*** I just copied the workoutController module here and added the update..
*/
/*
* Inside our service methods we'll be handling our business logic like transforming data structures 
 ** and communicating with our Database Layer.
*/

const Workout = require("../database/Workout");

const getAllWorkouts = ()  =>{
	const workoutData = Workout.getAllWorkouts();
	return workoutData;
};

const getOneWorkout = () =>{
	
};

const createWorkout = () =>{
};

const updateWorkout = () =>{
};

const deleteWorkout = () =>{
};

module.exports = {
	getAllWorkouts,
	getOneWorkout,
	updateWorkout,
	deleteWorkout,
	createWorkout
};