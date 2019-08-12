"use strict";

const bcrypt = require("bcryptjs");

const hashPassword = (password, callback) => {
  // use bcrypt to hash the password and return it asynchronously
bcrypt.genSalt(10, (err, salt) => {
    if(err){
      callback(err)
    } else {
    bcrypt.hash(password, salt, (err, hash) => {
        if(err){
          callback(err)
        } else {
          callback(null, hash)
        }
      })
    }})}

const comparePasswords = (password, hashedPassword, callback) => {
  // use bcrypt to compare the passwords and return a boolean asynchronously
  callback(new Error("TODO"));
};

module.exports = {
  comparePasswords,
  hashPassword
};
