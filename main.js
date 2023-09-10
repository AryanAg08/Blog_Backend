require("dotenv").config();
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const routes = require("./src/Routes");
const ImgRoutes = require("./src/Routes/photos-routes");
const CommentApi = require("./src/Routes/Comment-Api");
const PORT = process.env.PORT || 5001;
const cookiesession = require("cookie-session");
const passport = require("passport");
const mongoose = require("mongoose");
const ApiRoute = require("./src/Routes/Blog-api");

const app = express();

mongoose.connect(process.env.mongo, {
    keepAlive: true,
}).then(() => {
    console.log("connected to mongo!!");
});

app.use(cors());
app.use(express.json());


app.use(
    cors({
        origin: "http://localhost:3000",
        // methods: "GET,POST,PUT,DELETE",
        credentials: true,
        //optionsSuccessStatus: 200,
    })
);

app.use(
    cookiesession({
        name: "Sessions",
        keys: ["AryaAg"],
        maxAge: 24 * 60 * 60 * 100,
    })
)



app.use(passport.initialize());
app.use(passport.session());

app.use("/", routes);

app.use("/img", ImgRoutes);
app.use("/api", ApiRoute);
app.use("/Commentapi", CommentApi);


app.listen(PORT, () => console.log(`Listening to port ${PORT}!!`));
