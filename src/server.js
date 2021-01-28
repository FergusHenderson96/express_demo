//imports express
const express = require ("express");
//created constant which is an instance of express
const app = express();


app.use(express.json());


app.get("/", (req, res) => {
    console.log("logging something cool");
    res.send("hello fergus");
});

app.get("/yo", (req, res) => {
    res.send("im a software developer");
});

app.get("/data", (req, res) => {
    res.send ({data: "hello fergus"});
});


app.get("/info", (req, res) => {
    console.log(req.query);
    res.send({message: req.query})
})

app.get("/dog", (req, res) => {
    res.send("woof")
})

app.get("/dog/:id/:name", (req, res) => {
    console.log(req.params);
    res.send("success")
})

//get request for local host person id 
app.get("/person/:id", (req, res) => {
    //logs the parameter id 
    console.log(req.params.id);
    res.send("success")
})

app.post ("/", (req, res) => {
    console.log(req.body);
    res.send({ data: req.body });
})

app.post ("/person", (req, res) => {
    console.log(req.body.name);
    res.send({ data: req.body });
})

//app.listen(aPortNumber, aCallBackFunction)
app.listen(5000, () => {
    console.log("listening on port 5000");
});