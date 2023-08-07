const User = require("../schema/userSchema");
const jwt = require("jsonwebtoken");
jwtkey = "e-comm";

const register = async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    let result = await user.save();
    jwt.sign({ result }, jwtkey, { expiresIn: "2h" }, (err, token) => {
      if (err) {
        res.send("token");
      }
      res.send({ result, auth: token });
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const login = async (req, res) => {
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      jwt.sign({ user }, jwtkey, { expiresIn: "24h" }, (err, token) => {
        if (err) {
          res.send("token");
        }
        res.send({ user, auth: token });
      });
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
