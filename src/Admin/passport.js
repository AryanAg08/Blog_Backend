const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const Guser = require("../Models/1.GoogleAuth")


passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await Guser.findOne({ id });
        return user ? done(null, user): done(null, null);
    } catch (err) {
        console.log(err);
        done(err, null);
    }
});

passport.use(
    new GoogleStrategy({
        clientID: process.env.Client_Id,
        clientSecret: process.env.Client_secret,
        callbackURL: "/google/callback",
        scope: ["profile", "email"],
    }, async (accessToken, refreshToken, profile, done) => {
        const { sub, name, picture, email } = profile._json;
        console.log( sub, name, picture, email);
        try {
            const finduser = await Guser.findOneAndUpdate({
                id: sub,
            },{
                name: name,
                picture: picture,
                email: email,
            },{
                new: true,
            });
            if ( finduser ) {
                console.log(`user was found!!`);
                return done(null, finduser);
            } else {
                const newUser = await Guser.create({
                    id: sub,
                    name: name,
                    picture: picture,
                    email: email,
                });
                return done(null, newUser);
            }
        } catch (err) {
            console.log(err);
            return done(err, null);
        }
    })
);











// passport.use(
//     new GoogleStrategy(
//         {
//             clientID: process.env.Client_Id,
//             clientSecret: process.env.Client_secret,
//             callbackURL: "/google/callback",
//             scope: ["profile", "email"]
//         }, async (accessToken, refreshToken, profile, done) => {
//             // const {  } = profile
//             console.log(profile._json.sub)
//          //  return done(null, profile);
//         }
//     )
// );

// passport.serializeUser((User, done) => {
//     done(null, User);
// });

// passport.deserializeUser((user, done) => {
//     done(null, user);
// });

/**
 * 
 * {
  id: '116292893619193068027',
  displayName: 'Aryan Goyal',
  name: { familyName: 'Goyal', givenName: 'Aryan' },
  emails: [ { value: 'goyalaryan51@gmail.com', verified: true } ],
  photos: [
    {
      value: 'https://lh3.googleusercontent.com/a/AAcHTteaBjBg9n7vT72KQDIhOD-rjZsHW6t3FvUF6ppx80hQew=s96-c'
    }
  ],
  provider: 'google',
  _raw: '{\n' +
    '  "sub": "116292893619193068027",\n' +
    '  "name": "Aryan Goyal",\n' +
    '  "given_name": "Aryan",\n' +
    '  "family_name": "Goyal",\n' +
    '  "picture": "https://lh3.googleusercontent.com/a/AAcHTteaBjBg9n7vT72KQDIhOD-rjZsHW6t3FvUF6ppx80hQew\\u003ds96-c",\n' +
    '  "email": "goyalaryan51@gmail.com",\n' +
    '  "email_verified": true,\n' +
    '  "locale": "en-GB"\n' +
    '}',
  _json: {
    sub: '116292893619193068027',
    name: 'Aryan Goyal',
    given_name: 'Aryan',
    family_name: 'Goyal',
    picture: 'https://lh3.googleusercontent.com/a/AAcHTteaBjBg9n7vT72KQDIhOD-rjZsHW6t3FvUF6ppx80hQew=s96-c',
    email: 'goyalaryan51@gmail.com',
    email_verified: true,
    locale: 'en-GB'
  }
}
 */