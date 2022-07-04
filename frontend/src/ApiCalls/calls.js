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
    return JSON.parse(res);
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

    return res.status === 200 ? res.data.provider : false;
  }
    
  catch (err) {
      console.log(err);
  }
}



export {dbCreateUser, dbGetUser, dbUserExists};