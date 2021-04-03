const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const date = require(__dirname + "/date.js");
const items = [];
const workItems = [];

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
app.set("view engine", "ejs"); //app.use

app.get("/", function(req, res) {
  const newDay = date.getDate(); //date.getTime();
  res.render("list", {
    listTitle: newDay,
    newItems: items
  });
});

app.get("/work", function(req, res) {
  res.render("list", {
    listTitle: "WorkList", //
    newItems: workItems
  });
});

app.get("/about", function(req, res) {
  res.render("about");
})

app.post("/", function(req, res) {
  const item = req.body.inputName;
  if (req.body.list === "WorkList") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.listen(3000, function() {
  console.log("server running on port 3000.");
});
