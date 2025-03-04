import { MongoClient } from "mongodb";
import { ObjectId } from "mongodb";

//CRUD with the mongodb ✊
const url = "mongodb://localhost:27017";
const databaseName = "task-manager";

async function getdb() {
    try {
        const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('connect successFully');

        const db = client.db(databaseName);
        db.collection('users').insertOne({
            _id: ObjectId(),
            name: 'edris',
            age: 22
        },(error,result)=>{
            if(error){
                return console.log('unable to insert user');
            }

            console.log(result.ops);
        })

        // client.close();
    } catch (error) {
        console.log("error is come!!", error);
    }
}
getdb();