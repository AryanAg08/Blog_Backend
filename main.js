require("dotenv").config();


const express = require("express");
const cors = require("cors");
const routes = require("./src/Routes");
const PORT = process.env.PORT || 5001;
const path = require("path");
const mongo = require("mongoose");
const cookiesession = require("cookie-session");
const passport = require("passport");

const app = express();

app.use(cors());
app.use(express.json());

app.use(
    cookiesession({
        name: "session",
        keys: ["AryaAg"],
        maxAge: 24 * 60 * 60 * 100,
    })
)

app.use("/", routes)

app.use(passport.initialize());
app.use(passport.session());

app.use(
    cors({
        origin: "http://localhost:5001",
        methods: "GET,POST,PUT,DELETE",
        credentials: true,
    })
);

app.listen(PORT, () => console.log(`Listening to port ${PORT}!!`));