const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
// passport config
require("./config/passport")(passport);

// load routes
const auth = require("./routes/auth");

const app = express();

app.get("/", (req, res) => {
    res.send("it works");
});

// use routes
app.use("/auth", auth);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started at port ${ port }`));
