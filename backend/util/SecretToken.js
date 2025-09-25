require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.createSecretToken = async (id) => {
  return await jwt.sign({ id }, process.env.TOKEN_KEY, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};
