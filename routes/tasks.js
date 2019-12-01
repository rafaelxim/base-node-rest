const express = require("express");
const auth = require("../middleware/auth");
const { Task } = require("../models/task");
const router = express.Router();

// router.get("/", async (req, res) => {
//     let genre = await Genre.find();
//     res.send(genre);
// });

router.post("/", auth, async (req, res) => {
    // const { error } = validate(req.body);
    // if (error) return res.status(400).send(error.details[0].message);

    try{
        let task = new Task({
            name: req.body.name,
            description : req.body.description ,
            taskType: req.body.taskType ,
            dueDate: req.body.dueDate 
        });
    
        task = await task.save();
    
        res.send(task);
    } catch(e){
        return res.status(400).send(e.message);
    }
});

module.exports = router;
