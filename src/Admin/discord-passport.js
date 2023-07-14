const passport = require("passport");
const DiscordStrategy = require("passport-discord").Strategy;
const DAuth = require("../Models/2.DiscordAuth");

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser( async (id, done) => {
    try {
        const user = await DAuth.findOne({ id });
        return user ? done(null, user) : done(null, null);
    } catch (err) {
        console.log(err);
        done(err, null);
    }
});

passport.use(
    new DiscordStrategy({
      clientID: process.env.DiscordClient_Id,
      clientSecret: process.env.DiscordClient_secret,
      callbackURL: process.env.DiscordCallback,
      scope: ['identify', 'email'],
    }, async (accessToken, refreshToken, profile, done) => {
        const { id, username, avatar, email} = profile;
        try {
           console.log(profile);
            const finduser = await DAuth.findOneAndUpdate({
                id: id,
            },{
                name: username,
                picture: avatar,
                email: email,
            },{
                new: true,
            });
            if (finduser) {
                return done(null, finduser);
            } else {
                const newUser = await DAuth.create({
                    id: id,
                    name: username,
                    picture: avatar,
                    email: email, 
                });
                return done(null, newUser);
            }
        } catch (err) {
            return done(err, null);
        }
    })
);