const users = require('./firebase-config')

const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');

app.use(express.json());
app.use(cors());

// sending json is done by res.json()
// sending a file to download is done by res.download(<path to file>)

app.get("/api/get", (req, res) => {
    
})

app.post("/api/post", async(req, res) => {
    try {
        const data = req.body;
        await users.add(data)
        res.send({msg: "user added"})
    }
    catch (error){
        alert(error);
    } 
});

app.put("/api/put", (req, res) => {
    
});

app.delete("/api/delete", (req, res) => {
    
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});