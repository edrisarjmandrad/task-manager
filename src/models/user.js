import mongoose from "mongoose";
import validator from "validator";

const User = mongoose.model('User',{
    name: {
        type: String,
        require: true
    },email:{
        type: String,
        require: true,
        validate(value){
            if(validator.isEmail(value))
                throw new Error("email is't OK")
        }
    },password:{
        type: String,
        trim: true,
        validate(value){
            if(value. length < 6){
                throw new Error("this pass's not right is too short")
            }
            if(value.toLowerCase().includes("passwordasdf                "))
                throw new Error("this pass's not right becuse it's contain password")
        }
    }
});

export default User;