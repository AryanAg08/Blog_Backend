require("dotenv").config();
const router = require("express").Router();
const passportAuth = require("../passport");
const passport = require("passport");

router.get("/home", async (req, res) => {
    res.send("Hello World!!");
    console.log(req.user);
})


router.get("/google", passport.authenticate("google"));

router.get("/google/callback", passport.authenticate("google"), (req, res) => {
     // res.send("Hello hooman"); 
   //  console.log(req.user);
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

router.get('/user/googleAuth', (req, res) => {
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


module.exports = router;