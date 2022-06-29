const users = require('./firebase-config');
const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');

app.use(express.json());
app.use(cors());

// sending json is done by res.json()
// sending a file to download is done by res.download(<path to file>)

app.get("/api/get", async(req, res) => {
    try {
        const data = req.body;
        const userData = (await users.doc(`${data.email}`).get()).data();
        if (userData === undefined) throw "Error: user does not exist";

        res.status(200).json({
            email: userData.email,
            nameFirst: userData.nameFirst,
            nameLast: userData.nameLast,
            password: userData.password
            // return other info about the user
        });
    }
    catch (err) {
        res.status(400).send(err);
    }
});

// dont need 'register' since we have auth through firebase, but should persist data relating to
// other info about users, progression, stats, inventory, friends list, custom settings etc.
// will change this to just creating new app data upon profile creation
app.post("/api/register", async(req, res) => {
    try {
        const data = req.body;
        if (req.body === undefined) throw "Error: provide details";
        if ((await users.doc(`${data.email}`).get()).exists) throw "Error: email already exists!";
        
        data.id = Math.floor(Math.random() * 8000000000);

        await users.doc(`${data.email}`).create(data);

        res.status(200).send(`USER ${data.id} ${data.email} added.`);
    }
    catch (err){
        res.status(400).send(err);
    } 
});

app.put("/api/put", async(req, res) => {
});

app.delete("/api/delete", (req, res) => {
    
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});