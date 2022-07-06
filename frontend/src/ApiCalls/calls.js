import axios from 'axios'
import { applyActionCode } from 'firebase/auth';

const api = axios.create({
    baseURL: "http://127.0.0.1:5000/api"
});

async function dbCreateUser(email, uid, provider) {
  try {
    const res = await api.post("/dbCreateUser", {
      email: email,
      uid: uid,
      provider: provider
    });
    console.log(res);
    console.log("user created successfully");
  }

  catch(err) {
    console.log(err)
  }
}


async function dbGetUser(uid) {
  try {
    const res = await api.get("/dbGetUser", {
      params: {
        uid: uid
      }
    });
    console.log(res);
    return res.data;
  }

  catch (err) {
    console.log(err);
    return null;
  }
}


async function dbUserExists(uid) {
  try {
    const res = await api.get("/dbGetUser", {
      params: {
        uid: uid
      }
    });
    console.log(res)
    return res.data.provider;
  }
    
  catch (err) {
    console.log(err);
    return false;
  }
}


async function dbUpdateUserProperty(uid, name, value) {
  // Name of the property to update, new value of the property being updated
  try {
    const res = await api.put("/dbUpdate", {
      uid: uid,
      name: name,
      value: value
    });
    console.log(res);
  }

  catch (err) {
    console.log(err)
  }
}


export {dbCreateUser, dbGetUser, dbUserExists, dbUpdateUserProperty};