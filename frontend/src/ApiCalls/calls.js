import axios from 'axios'
import { applyActionCode } from 'firebase/auth';

const api = axios.create({
    baseURL: "http://127.0.0.1:5000/api"
});

async function dbCreateUser(email, provider) {
  try {
    const res = await api.post("/dbCreateUser", {
      email: email,
      provider: provider
    });
    console.log(res);
    console.log("user created successfully");
  }

  catch(err) {
    console.log(err)
  }
}


async function dbGetUser(email) {
  try {
    const res = await api.get("/dbGetUser", {
      params: {
        email: email
      }
    });
    console.log(res);
    return res.data;
  }

  catch (err) {
    console.log(err);
  }
}


async function dbUserExists(email) {
  try {
    const res = await api.get("/dbGetUser", {
      params: {
        email: email
      }
    });

    return res.data.provider;
  }
    
  catch (err) {
    console.log(err);
    return false;
  }
}


async function dbUpdateUserProperty(email, name, value) {
  // Name of the property to update, new value of the property being updated
  try {
    console.log(value)
    const res = await api.put("/dbUpdate", {
      email: email,
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