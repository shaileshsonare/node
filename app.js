var express = require("express");
var app = express();
app.get("/", (req, res) => {
res.send("Home Page");
});
app.get("/student", (req, res) => {
data = { result: "Student GET Request" };
res.send(data);
});
app.post("/student", (req, res) => {
data = { result: "Student post Request" };
res.send(data);
});
app.put("/student", (req, res) => {
data = { result: "Student put Request" };
res.send(data);
});
app.delete("/student", (req, res) => {
data = { result: "Student delete Request" };
res.send(data);
});
app
.route("/teacher")
.get((req, res) => {
data = { result: "Teacher get Request" };
res.send(data);
})
.post((req, res) => {
data = { result: "Teacher post Request" };
res.send(data);
})
.put((req, res) => {
data = { result: "Teacher put Request" };
res.send(data);
})
.delete((req, res) => {
data = { result: "Teacher delete Request" };
res.send(data);
});
