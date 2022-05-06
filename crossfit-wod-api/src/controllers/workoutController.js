
const workoutService = require("../services/workoutService");


const getAllWorkouts = (req,res) =>{
	const allWorkouts = workoutService.getAllWorkouts();
	res.send({ status: "OK", data: allWorkouts });
};

const getOneWorkout = (req,res) =>{
	const OneWorkout = workoutService.getOneWorkout();
	res.send("Fetch a spesific Workouts");
};

const createWorkout = (req,res) =>{
	const {body} = req;
	if (
	    !body.name ||
	    !body.mode ||
	    !body.equipment ||
	    !body.exercises ||
	    !body.trainerTips
	  ) {
	    return;
	  }
	const workout = {
	    name: body.name,
	    mode: body.mode,
	    equipment: body.equipment,
	    exercises: body.exercises,
	    trainerTips: body.trainerTips,
	  };
	const newWorkout = workoutService.createWorkout(workout);
	res.status(201).send({ status: "OK", data: newWorkout });
	res.send("<h2>Create a new Workout</h2>");
};

const updateWorkout = (req,res) =>{
	const update = workoutService.updateWorkout();
	res.send("Update an existing workout");
};

const deleteWorkout = (req,res) =>{
	workoutService.deleteWorkout();
	res.send("Delete an existing workout");
};

module.exports = {
	getAllWorkouts,
	getOneWorkout,
	updateWorkout,
	deleteWorkout,
	createWorkout
};