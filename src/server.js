//imports express
const express = require ("express");
//created constant which is an instance of express
//const app = express();
const fs = require ("fs")
const path = require ('path')

//const {myFunction, myOtherFunction}

const app = express();
const public_directory = path.join(__dirname, "../public")

app.use(express.json());
//app.use(myFunction);
//app.use(myOtherFunction);
app.use(express.static(public_directory));


console.log(public_directory)

const myFunction = (req, res, next) => {
console.log("this happens first")
req.query.random = "something random"
next()
}

const myOtherFunction = (req, res, next) => {
    console.log("this happens second")
req.query.morestuff = "something else";
next();
}

app.get("/", [myFunction, myOtherFunction], (req, res) => {
    console.log("...then running controller");
    console.log(req.query);
    res.send({ message: `Hello, welcome ${req.query.name}`});
}); 

 
// app.get("/yo", (req, res) => {
//     res.send("im a software developer");
// });

// app.get("/data", (req, res) => {
//     res.send ({data: "hello fergus"});
// });


// app.get("/info", (req, res) => {
//     console.log(req.query);
//     res.send({message: req.query})
// })

// app.get("/dog", (req, res) => {
//     res.send("woof")
// })

// app.get("/dog/:id/:name", (req, res) => {
//     console.log(req.params);
//     res.send("success")
// })

// //get request for local host person id 
// app.get("/person/:id", (req, res) => {
//     //logs the parameter id 
//     console.log(req.params.id);
//     res.send("success")
// })

// app.post ("/", (req, res) => {
//     console.log(req.body);
//     res.send({ data: req.body });
// })

// app.post ("/person", (req, res) => {
//     console.log(req.body.name);
//     res.send({ data: req.body });
// })

app.post ("/task", (req, res) => {
    fs.writeFileSync("task.txt", req.body.task);
    res.send( "Success" )
})

//app.listen(aPortNumber, aCallBackFunction)
app.listen(5000, () => {
    console.log("listening on port 5000");
});