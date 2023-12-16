const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db.js");

const PORT = 4000;

//middleware
app.use(cors());
app.use(express.json());

app.listen(PORT, (err) => {
    if (err) {
        console.log(`Something went wrong: ${err}`);
    } else {
        console.log(`Server is started on port: ${PORT}`);
    }
})