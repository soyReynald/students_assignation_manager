const express = require("express");
const router = require("./router");
// The life of a man does not depend on the abbundance of
// HIS WEALTHNESS. — Jesus Christ from Nazareth.

// MongoDB driver petition
const mongoose = require("mongoose");

// This is to retrieve the data as it should
const dotenv = require("dotenv");

dotenv.config();

const PORT = 8000;

const app = express();

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