const functions = require("firebase-functions");

const app = require("express")();

const FBAuth = require('./util/FBAuth');

const { getAllScreams, postOneScream } = require("./handlers/screams");
const { signup, login, uploadImage } = require('./handlers/users');

// Scream Routes
app.get("/screams", getAllScreams);
app.post("/scream", FBAuth, postOneScream);

// Users Routes
app.post("/signup", signup);
app.post("/login", login);
app.post("/user/image", FBAuth, uploadImage);

exports.api = functions.region("europe-west1").https.onRequest(app);
