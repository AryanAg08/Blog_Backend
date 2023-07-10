require("dotenv").config();
const router = require("express").Router();
require("../Admin/passport"); // imp;
const passport = require("passport");
require("../Admin/discord-passport"); // imp;

router.get("/home", async (req, res) => {
    res.send("Hello World!!");
    console.log(req.user);
})


router.get("/google", passport.authenticate("google"));

router.get("/google/callback", passport.authenticate("google"), (req, res) => {
    res.redirect(`http://localhost:3000/dashboard/${req.user.id}`);
});


// router.get('/user/GoogleAuth', (req, res) => {
//     if (req.user) {
//         res.send(req.user);
//     } else {
//         res.status(401).send('Unauthorized!!');
//     }
// });

// router.get("/dashboard/:id", (req, res) => {
//         res.send("hello hooman");
//         console.log(req.user);
//        // console.log(res);
// })

router.get("/user/googleAuth", (req, res) => {
    console.log(req.user)
    if (req.user) {
        res.send(req.user);
    } else {
        res.status(401).send('Unauthorized!!');
    }
});

router.get("/logout", (req, res) => {
    req.logOut();
    res.redirect(process.env.Client_Url);
});

router.get("/discord", passport.authenticate("discord"));

router.get("/discord/callback", passport.authenticate('discord'), (req, res) => {
    // res.send("Hello this is discord auth!!");
    res.redirect(`http://localhost:3000/dashboard/${req.user.id}`);
});

router.get("/user/discordAuth", (req, res) => {
    if (req.user) {
        res.send(req.user);
    } else {
        res.status(401).send('Unauthorized!!')
    }
})


module.exports = router;