import mongoose, { Schema } from 'mongoose';


try{
    const getdb = await mongoose.connect('mongodb://localhost:27017/task-manager-api')
}
catch(error){
    console.log(error);
}

