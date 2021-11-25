// schema for user collection
const mongoose = require("mongoose");
const userType = require("../utils/user");
const { v4: uuidv4 } = require("uuid");
const crypto = require("crypto");

const user = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    encry_password: {
        type: String,
        required: true,
    },
    salt: String,
    createdOn: {
        type: Date,
        default: () => Date.now(),
    },
    role: {
        type: String,
        default: userType[201],
    },
});

user
  .virtual("password")
  .set(function(password) {
    this._password = password;
    this.salt = uuidv4();
    this.encry_password = this.securePassword(password);
  })
  .get(function() {
    return this._password;
  });

user.methods = {
  authenticate: function(plainpassword) {
    return this.securePassword(plainpassword) === this.encry_password;
  },

  securePassword: function(plainpassword) {
    if (!plainpassword) return "";
    try {
      return crypto
        .createHmac("sha256", this.salt)
        .update(plainpassword)
        .digest("hex");
    } catch (err) {
      return "";
    }
  }
};

const User = mongoose.model("User", user);
module.exports = User;
