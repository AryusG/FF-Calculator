const {initializeApp, applicationDefault, cert} = require('firebase-admin/app');
const {getFirestore, Timestamp, FieldValue} = require('firebase-admin/firestore');
const serviceAccount = require('./cert.json');

// Initialize Firebase
initializeApp({
    credential: cert(serviceAccount)
});

const db = getFirestore();

const users = db.collection("users");

module.exports = users;