const express = require("express");
const app = express();
const PORT = 4000;

app.listen(PORT, (err) => {
    if (err) {
        console.log(`Something went wrong: ${err}`);
    } else {
        console.log(`Server is started on port: ${PORT}`);
    }
})