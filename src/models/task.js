import mongoose from "mongoose";
import validator from "validator";

const tasks = mongoose.model("tasks", {
    description: {
        type: String,
        require: true
    },
    complete:{
        type: Boolean,
        default: false
    }
});

export default tasks;
