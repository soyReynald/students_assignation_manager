const express = require("express");
const router = require("./router");
const bodyParser = require('body-parser')

const app = express();
const path = require('path');

// to change "foo.ejs" to "foo.html"
// we simply pass _any_ function, in this
// case `ejs.__express`.

app.engine('.html', require('ejs').__express);

// Optional since express defaults to CWD/views

app.set('views', path.join(__dirname, 'views'));

// Path to our public directory

app.use(express.static(path.join(__dirname, 'public')));

// Without this you would need to
// supply the extension to res.render()
// ex: res.render('users.html').
app.set('views engine', 'html');
// The life of a man does not depend on the abbundance of
// HIS WEALTHNESS. — Jesus Christ from Nazareth.

// MongoDB driver petition
const mongoose = require("mongoose");

// This is to retrieve the data as it should
const dotenv = require("dotenv");

dotenv.config({
  path: ".env",
  override: true
});

const PORT = 8000;
const PORT_TO_CLIENT = 5000;


app.listen(PORT, async () => {
  // Many, thinking that they are serving God, \will\ KILL
  // YOU... Att: "SOMEONE" who they killed TWINE ... Jesus Christ.
  console.log(`server up on port ${PORT}`);
});

app.use(router);

// parse various different custom JSON types as JSON
app.use(bodyParser.urlencoded());
app.use(express.static("public"));
// The process variable is global if I am not wrong
mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT_TO_CLIENT, async () => {
  // Many, thinking that they are serving God, \will\ KILL
  // YOU... Att: "SOMEONE" who they killed TWINE ... Jesus Christ.
  console.log(`Client up on port ${PORT_TO_CLIENT}`);
});

// tasks schema
const taskSchema = new mongoose.Schema({
  title: String,
  type: String,
  task_id: Number
});

// tasks  model
const taskModel = mongoose.model('students_tasks', taskSchema);

// Find only one document matching

// Model.findOne no longer accepts a callback
async function getTasks() {

  const Items = await taskModel.find({});
  return Items;

}

app.get('/home', (req, res) => {
  var today = new Date();

  var options = {
    weekday: "long", day: "numeric", year: "numeric",
    month: "numeric"
  };

  var day = today.toLocaleDateString("en-GB", options);
  getTasks().then(function (FoundTasks) {
    res.render('index.html', { title: "Students Tasks Manager", kindOfDay: day, tasks: FoundTasks })
  })
});

async function deleteTask (task_id) {
  const newTasks_Array = await taskModel.deleteOne({task_id: task_id});
  return newTasks_Array;
}

app.get('/delete', function (req, res) {
  deleteTask(req.query.task_id).then(function (FoundTasks) {
    getTasks().then(function (FoundTasks) {
      res.render('index.html', { title: "Students Tasks Manager", tasks: FoundTasks })
    })
  })
});
