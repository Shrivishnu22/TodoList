const express = require("express");
const date = require(__dirname + "/date.js");

const app = express();
app.use(express.urlencoded({ extended: true }));

const items = [];
const workItems = [];
app.use(express.static("public"));


app.set('view engine', 'ejs');

app.get("/", function(req, res) {
    const day = date.getDate();
    res.render('list', { listTitle: day, newItem: items });

});

app.post("/", function(req, res) {
    const item = req.body.todo;
    if (req.body.list == "Work List") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }

});

app.get("/work", function(req, res) {
    res.render('list', { listTitle: "Work List", newItem: workItems });

});

app.post("/work", function(req, res) {
    const item = req.body.todo;
    workItems.push(item);
    res.redirect("/work");
});


app.listen(5000, function() {
    console.log("Running on port 5000");

});