import {users, user_app_data, db} from "./firebase-config.js"
import {doc, getDoc, setDoc, addDoc, updateDoc} from "firebase/firestore";
import express from "express"
import cors from "cors"

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());


app.get("/api/get", async(req, res) => {

    try {
        const email = req.body.email.replace(/[.]/g, ",");
        const map = doc(db, `/maps/user_maps`);
        const all_users = (await getDoc(map)).data();

        const id = all_users[email];
        if (!id) throw "Error: user does not exist";

        const userDocRef = doc(db, `/user_app_data/${id}`);
        const userData = (await getDoc(userDocRef)).data();

        res.status(200).json(userData);
    }
    catch (err) {
        res.status(400).send(err);
    }
});

// create a new document - addDoc(collection ref) or setDoc()
app.post("/api/post", async(req, res) => {
    try {
        const data = req.body;
        // if email exists, send error
        const newUser = addDoc(user_app_data, data);

        if (!newUser) throw "Error: could not create user";

        const userData = getDoc(doc(db, (await newUser).path));

        const id = (await userData).id;
        const email = req.body.email.replace(/[.]/g, ",");

        // SET the map in the db <email, id>
        updateDoc(doc(db, "maps/user_maps"), {
            [email]: id
        })

        res.status(200).json((await userData).data())
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