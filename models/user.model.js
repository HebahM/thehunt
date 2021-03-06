/*  Mongoose  */
const mongoose = require("mongoose");

/*  Schema  */
const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    status: {
      type: String,
      default: "Active"
    },
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ],
    group_id: Array,
    hunt_id: Array
  })
);

/*  Exporting Schema  */
module.exports = User;