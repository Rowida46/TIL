// *** Now we're catching all requests that are going to /api/v1/workouts with our v1WorkoutRouter. *** //
/*
**Inside our router we will call a different method handled by our controller for each different endpoint.

*/
const express = require("express");
const workoutController = require("../../controllers/workoutController");
const router = express.Router();


router.get("/",workoutController.getAllWorkouts);
router.get("/:workoutId",workoutController.getOneWorkout);
router.post("/",workoutController.createWorkout);
router.patch("/:workoutId",workoutController.updateWorkout);
router.delete("/:workoutId",workoutController.deleteWorkout);

/* We gonna handle msgs send by Controller
router.get("/:workoutId", (req, res) =>{
	res.send("Fetch a spesific Workouts");
});

router.post("/", (req, res) =>{
	res.send("Create a new Workout");
});

router.patch("/:workoutId", (req, res) =>{
	res.send("Update an existing workout");
});

router.delete("/:workoutId", (req, res) =>{
	res.send("Deleting an existing workout");
});
*/
module.exports = router; 
/*
** module.exports is an object that the current module returns when it is
*** "required" in another program or module
*/

