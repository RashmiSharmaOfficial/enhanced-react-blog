const router = require("express").Router();
const User = require("../models/User");  //User is a collection here
const bcrypt = require("bcrypt");

//REGISTER
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    const user = await newUser.save();  //it returns promise 
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});


//LOGIN
router.post("/login", async (req, res) => {
  try {
    //matching username
    const user = await User.findOne({ username: req.body.username });
    if(!user){
        // return res.status(404).json({ error: "No Profile Found" }); 
        return res.status(404).json("No Profile Found"); 

    }
    
    //matching password
    const validated = await bcrypt.compare(req.body.password, user.password);
    if(!validated){
        // return res.status(404).json({ error: "Incorrect password" });
        return res.status(404).json("Incorrect password");
    }

    //we dont wanna show passowrd to the user so we make use of spread operator
    //user._doc consist of everything ,we say assign everything except password to the 
    //others variable which can be then displayed
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;