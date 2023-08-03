const User = require("../schema/userSchema");

const register = async (req, res) => {
  console.log("🚀 ~ file: userController.js:7 ~ register ~ req:", req.body);
  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    let result = await user.save();
    res.send(result);
    // res.send("result)");
    // res.status(200).json({ result });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const login = async (req, res) => {
  if (req.body.password && req.body.email) {
    let user = await userSchema.findOne(req.body).select("-password");
    if (user) {
      res.send(user);
    } else {
      res.send("No User Found");
    }
  } else {
    res.send("No User Found");
  }
};

module.exports = {
  register,
  login,
};
