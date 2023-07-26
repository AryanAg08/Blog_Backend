require("dotenv").config();
const router = require("express").Router();
require("../Admin/passport"); // imp;
const passport = require("passport");
require("../Admin/discord-passport"); // imp;
const U1 = require("../Models/4.user-Details");

// router.get("/home", async (req, res) => {
//     res.send("Hello World!!");
//     console.log(req.user);
// })


router.get("/google", passport.authenticate("google"));

router.get("/google/callback", passport.authenticate("google"), (req, res) => {
    res.redirect(`http://localhost:3000/dashboard/g/${req.user.id}`);
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
        setTimeout(() => {
            res.send(req.user);
        }, 
        4000);
        //res.send(req.user);
    } else {
        res.status(401).send('Unauthorized!!');
    }
});

router.get("/logout", (req, res) => {
    req.logOut();
    res.redirect("http://localhost:3000");
});

router.get("/discord", passport.authenticate("discord"));

router.get("/discord/callback", passport.authenticate("discord"), (req, res) => {
    // res.send("Hello this is discord auth!!");
    res.redirect(`http://localhost:3000/dashboard/d/${req.user.id}`);
});

router.get("/user/discordAuth", async (req, res) => {
     console.log(req.user) ;
    if (req.user) {
        res.send(req.user);
    } else {
        res.status(401).send('Unauthorized!!')
    }
});


router.post("/login", async (req, res) => {
    console.log(req.body);
    const { Email, Password } = req.body;

    try {
      const user = await U1.findOne({ Email });
  
      if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      if (user.Password !== Password) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
         res.redirect(`http://localhost:3000/dashboard/${user._id}`)
       //res.json({ message: 'Login successful', user });
    } catch (error) {
      console.error('Login failed:', error);
      res.status(500).json({ error: 'Server error' });
    }
  
})


module.exports = router;