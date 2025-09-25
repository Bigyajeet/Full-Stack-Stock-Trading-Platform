const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const { userSchema } = require("../schemas/UserSchema");

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

const UserModel = mongoose.model("User", userSchema);

module.exports = { UserModel };
