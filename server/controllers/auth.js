const { User } = require("../models/userModel");

module.exports = {
  login: async (req, res) => {
    const { userId } = req.body;
    let foundUser = await User.findOne({ WHERE: { userid: userId } });
    try {
      if (foundUser === true) {
        res.status(200).send("Logged In Successfully!");
      } else {
        const newUser = await User.create({
          userid: userId,
        });
      }
    } catch (err) {
      res.status(400).send(err);
    }
  },
};
