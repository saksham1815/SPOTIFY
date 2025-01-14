const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;

console.log(process.env);

// connecting mongodb to node app
// mongoose.connect() takes 2 argument 1.from which db to connect(db ke url se) 2. connection options


mongoose.connect(process.env.MONGO_URL)
    .then((x) => {
        console.log("Connected to MongoDB!");
    })
    .catch((err) => {
        console.error("Error while connecting to MongoDB:", err);
    });
    


app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`App is running  on port ${port}`);
});
