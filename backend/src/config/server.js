import {user_app_data, db} from "./firebase-config.js"
import {doc, getDoc, setDoc, addDoc, updateDoc} from "firebase/firestore";
import {newUserAppData} from './userAppData.js'
import express from "express"
import cors from "cors"

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());


app.get("/api/dbGetUser", async(req, res) => {

  try {
    const email = req.query.email.replace(/[.]/g, ",");

    // Grab map from db and id associated with users email
    const map = doc(db, `/maps/user_maps`);
    const all_users = (await getDoc(map)).data();
    const id = all_users[email];

    if (!id) throw "User does not exist";

    // Extract data from the user document 
    const userDocRef = doc(db, `/user_app_data/${id}`);
    const userData = (await getDoc(userDocRef)).data();

    res.status(200).json(userData);
  }

  catch (err) {
    console.log(err)
    res.status(400).send(err);
  }
});


// create a new document - addDoc(collection ref) or setDoc()
app.post("/api/dbCreateUser", async(req, res) => {
  try {
    const data = newUserAppData;
    data.email = req.body.email;
    data.provider = req.body.provider;

    const newUser = await addDoc(user_app_data, data);
    if (!newUser) throw "Error: could not create user";

    // retrieve the id assigned to the user in the firebase db
    // and map their email to said id
    const userData = await getDoc(newUser);
    const id = userData.id;
    const email = req.body.email.replace(/[.]/g, ",");

    // SET the map in the db <email, id>
    updateDoc(doc(db, "maps/user_maps"), {
        [email]: id
    });

    res.status(200).json(userData.data())
  }
  catch (err){
    res.status(400).send(err);
  } 
});
// overwriting an entire document - setDoc()
// updating specific fields of a document - updateDoc()
app.put("/api/put", async(req, res) => {
});

app.delete("/api/delete", (req, res) => {
    
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});