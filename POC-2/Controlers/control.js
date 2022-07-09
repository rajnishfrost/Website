const express = require('express');
const path = require('path');
const schema = require('../models/schema');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/RjDb', { useNewUrlParser: true });
const { validationResult } = require('express-validator');
var a = false;

const result = (req, res, next) => {
  const result = validationResult(req);
  const hasError = !result.isEmpty();

  if (hasError) {
    a = true;
    const error = result.array()[0].msg;
    res.status(400).json({ Sucess: "failed", message: error });
  }
  next();
}

const viewRes = (req, res) => {
  res.sendFile(path.join(__dirname, "../Views/login.html"));
}
const signUp = (req, res) => {
  res.sendFile(path.join(__dirname, "../Views/signUp.html"));
}

const signUpPost = async (req, res) => {
  const data = new schema.form(req.body);
  if (a==false) {
    await data.save();
  }
  return res.status(200).sendFile(path.join(__dirname, "../Views/signSuccess.html"));
}
const logInPost = async (req, res) => {
  const email = req.body.email;
  const pass = req.body.password;
  const data2 = await schema.form.findOne({ email: email, password: pass });
  if (data2) {
  
    return res.status(200).sendFile(path.join(__dirname, "../Views/logSuccess.html"));
  }
  else {

    return res.status(400).sendFile(path.join(__dirname, "../Views/logInFailed.html"));
  }
}

module.exports = { viewRes, signUp, signUpPost, logInPost, result }

