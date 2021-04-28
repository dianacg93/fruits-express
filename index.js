const express = require('express')
const fruits = require("./fruits")

const PORT = process.env.PORT || 3000;
const app = express();

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
})

app.get("/", (req,res) => {
    res.send("App is working")
})

app.get("/ping", (req, res) => {
    res.json("pong")
})

app.get("/greet/:name", (req, res) => {
    try {
        const {name} = req.params;
        res.send(`Hello there, ${name}!`)
    } catch (err) {
        console.log(err.json())
        res.send("Try/catch err")
    }
})

app.get('/five', (req, res) => {
    res.send([1,2,3,4,5])
})

app.get("/evens/:n", async (req,res) => {
    try{
        const {n} = req.params;
        if(n > 3) {
            let arr = [];
            for(let i = 0; i >= n; i+=2) {
                arr.push(i);
            }
            res.send(arr)
        }
    } catch (err) {
        console.log(err);
        res.send("Try/catch err")
    }
})

app.get("/namelength/:name", (req, res) => {
    try {
        const {name} = req.params;
        if(name) {
            res.send(`the length of ${name} is ${name.length}`)
        }
    } catch (err) {
        console.log(err.json())
        res.send("Try/catch err")
    }
})

app.get("/fruits", (req, res) => {
    res.json(fruits)
})

app.get("/fruits/:name", (req,res) => {
    const {name} = req.params;
    fruits.filter(el => {
        if( el.name.toLowerCase() == name.toLowerCase()) {
            res.json(el)
        }
    })
})