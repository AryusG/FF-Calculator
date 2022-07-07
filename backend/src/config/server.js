import {user_app_data, db} from "./firebase-config.js"
import {doc, getDoc, setDoc, addDoc, updateDoc, collection, deleteDoc} from "firebase/firestore";
import {newUserAppData} from './userAppData.js'
import express from "express"
import cors from "cors"

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());


app.get("/api/dbGetUser", async(req, res) => {

  try {
    const uid = req.query.uid;

    // Grab map from db and id associated with users email
    const map = doc(db, "/maps/user_maps");
    const allUsers = (await getDoc(map)).data();
    const docId = allUsers[uid];

    if (!docId) throw "User does not exist";

    // Extract data from the user document 
    const userDocRef = doc(db, `/user_app_data/${docId}`);
    const userData = (await getDoc(userDocRef)).data();

    res.status(200).json(userData);
  }

  catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});


// create a new document - addDoc(collection ref) or setDoc()
app.post("/api/dbCreateUser", async(req, res) => {
  try {
    const data = newUserAppData;
    data.email = req.body.email;
    data.uid = req.body.uid;
    data.provider = req.body.provider;

    const newUser = await addDoc(user_app_data, data);
    if (!newUser) throw "Error: could not create user";

    // retrieve the id assigned to the user in the firebase db
    // and map their email to said id
    const userData = await getDoc(newUser);
    const docId = userData.id;
    const uid = req.body.uid;

    // SET the map in the db <email, id>
    updateDoc(doc(db, "maps/user_maps"), {
        [uid]: docId
    });

    res.status(200).json(userData.data())
  }
  catch (err){
    console.log(err);
    res.status(400).send(err);
  } 
});
// overwriting an entire document - setDoc()
// updating specific fields of a document - updateDoc()
app.put("/api/dbUpdate", async(req, res) => {
  try {
    const uid = req.body.uid;
    const updatedPropertyName = req.body.name;
    const updatedPropertyValue = req.body.value;

    const map = doc(db, "/maps/user_maps");
    const allUsers = (await getDoc(map)).data();
    const docId = allUsers[uid];

    if (!docId) throw "User does not exist";

    const userDocRef = doc(db, `user_app_data/${docId}`);
    updateDoc(userDocRef, {
      [updatedPropertyName]: updatedPropertyValue
    })
    res.status(200).send('updated successfully');
  }

  catch (err){
    console.log(err);
    res.status(400).send(err);
  }
});

app.delete("/api/delete", async(req, res) => {

  try {
    const map = doc(db, "/maps/user_maps");
    const allUsers = (await getDoc(map)).data();
  
    const docIds = [];
    for (const key in allUsers) {
      docIds.push(allUsers[key]);
    }
  
    for (const docId of docIds) {
      const docRef = doc(db, `/user_app_data/${docId}`);
      deleteDoc(docRef);
    }

    res.status(200).send("all users deleted")
  }
  catch(err) {
    console.log(err)
    res.status(500).send("unable to delete all users")
  }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});