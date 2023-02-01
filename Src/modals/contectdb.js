const { json } = require("express");
const express = require("express");
const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    yourname: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    phone: {
        type: Number,
        required: true,
        unique: true,
        minlength: 10,
        minlength: 10
    },
    city: {
        type: String,
        required: true
    },
    check1: {
        type: String,
    },
    check2: {
        type: String,

    }



})

// now we need to create a collection 

const Userdata = new mongoose.model("Userdata", contactSchema);
module.exports = Userdata;