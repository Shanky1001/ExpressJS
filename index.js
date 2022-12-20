const express = require('express');
const path = require('path');
const app = express();


// Creating Routes using expressJS
// app.get("", (req, res) => {
//     res.send("<h1>Welcome To Home Page.</h1>");
// })


// Loading HTML Pages using ExpressJS

const dirPath = path.join(__dirname, 'Pages');
app.use(express.static(dirPath))

app.listen(4500);