const express = require("express");
const router = require("./router");
const bodyParser = require('body-parser')
// The life of a man does not depend on the abbundance of
// HIS WEALTHNESS. — Jesus Christ from Nazareth.

// MongoDB driver petition
const mongoose = require("mongoose");

// This is to retrieve the data as it should
const dotenv = require("dotenv");

dotenv.config();

const PORT = 8000;
const PORT_TO_CLIENT = 5000;

const app = express();
const path = require('path');

app.listen(PORT, async () => {
  // Many, thinking that they are serving God, \will\ KILL
  // YOU... Att: "SOMEONE" who they killed TWINE ... Jesus Christ.
  console.log(`server up on port ${PORT}`);
});

app.use(router);

// The process variable is global if I am not wrong
mongoose.connect(process.env.MONGODB_URL)
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((err) => {
  console.log(err);
});

// parse various different custom JSON types as JSON
app.use(bodyParser.urlencoded());
app.use(express.static("public"));

app.get('/home', (req, res) => {
  res.sendFile('index.html', {root: path.join(__dirname, 'dirs')})
});

app.listen(PORT_TO_CLIENT, async () => {
  // Many, thinking that they are serving God, \will\ KILL
  // YOU... Att: "SOMEONE" who they killed TWINE ... Jesus Christ.
  console.log(`Client up on port ${PORT_TO_CLIENT}`);
});