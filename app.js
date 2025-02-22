const express = require("express");
const app = express();
const path = require("node:path");
require("dotenv").config();
const messagesRouter = require("./routes/messagesRouter");
const newMessageRouter = require("./routes/newMessageRouter");
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", messagesRouter);
app.use("/new", newMessageRouter);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`The app is running on port ${PORT}`)
})

