require("dotenv").config();
require("./src/Admin/discord-passport");
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const routes = require("./src/Routes");
const ImgRoutes = require("./src/Routes/photos-routes");
const PORT = process.env.PORT || 5001;
const cookiesession = require("cookie-session");
const passport = require("passport");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(process.env.mongo, {
    keepAlive: true,
}).then(() => {
    console.log("connected to mongo!!");
});

// app.use(cors());
app.use(express.json());

app.use(
    cors({
        origin: "http://localhost:3000",
      //  methods: "GET,POST,PUT,DELETE",
        credentials: true,
        //optionsSuccessStatus: 200,
    })
);

app.use(
    cookiesession({
        name: "session",
        keys: ["AryaAg"],
        maxAge: 24 * 60 * 60 * 100,
    })
)
 app.use("/img", ImgRoutes);


app.use(passport.initialize());
app.use(passport.session());

app.use("/", routes);


app.listen(PORT, () => console.log(`Listening to port ${PORT}!!`));