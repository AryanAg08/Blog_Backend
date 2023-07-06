const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.Client_Id,
            clientSecret: process.env.Client_secret,
            callbackURL: "/home",
            scope: ["profile", "email"]
        },
        function (accessToken, refreshToken, profile, callback) {
            callback(null, profile);
        }
    )
)