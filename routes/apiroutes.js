const router = require("express").Router();
const { Workout } = require("../models");

router.post("/api/workouts", ({ body }, res) => {
    console.log('Post api/workouts')
    Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});