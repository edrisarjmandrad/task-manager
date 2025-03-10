import express from "express";
import User from "./models/user.js";
import tasks from "./models/task.js";
import { error } from "console";
import("./db/mongoose.js");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/user", (req, res) => {
    console.log(req.body);
    const { name, email, password } = req.body;

    const newUser = new User(req.body);
    newUser
        .save()
        .then(() => {
            res.status(201).json({
                message: "we did it",
            });
        })
        .catch((error) => {
            res.status(500).json({
                error: error.message,
            });
        });
});

app.get("/users", (req, res) => {
    User.find()
        .then((users) => {
            res.status(200).json({
                users,
            });
        })
        .catch((error) => {
            res.status(500).json({
                error: error.message,
            });
        });
});
app.get("/users/:id", (req, res) => {
    const _id = req.params.id;
    User.findById(_id)
        .then((user) => {
            if (!user) {
                return res.status(404).json({
                    message: "user not found",
                });
            }
            res.status(200).json({
                user,
            });
        })
        .catch((error) => {
            res.status(500).json({
                error: error.message,
            });
        });
});

app.post("/inset-task", (req, res) => {
    console.log(req.body);

    const newTask = new tasks(req.body);
    newTask
        .save()
        .then(() => {
            res.status(201).json({
                message: "we did it",
            });
        })
        .catch((error) => {
            res.status(500).json({
                error: error.message,
            });
        });
});

app.get("/tasks", (req, res) => {
    tasks.find().then(() => {
        res.status(200)
            .json({
                message: "we did it",
            })
            .catch((error) => {
                res.status(500).json({
                    error: error.message,
                });
            });
    });
    
});
app.get("/tasks/:id", (req, res) => {
    const _id = req.patams.id;
    tasks.findById(_id).then((task) => {
        if (task) {
            return res.status(404).json({
                message: "task not found",
            });
        }
        res.status(200)
            .json({
                task,
            })
            .catch((error) => {
                res.status(500).json({
                    error: error.message,
                });
            });
    });
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
