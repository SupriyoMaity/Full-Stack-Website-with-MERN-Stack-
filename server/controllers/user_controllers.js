const register = require("../models/register_model")
const contacts = require("../models/contact_model")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// home
const home = async (req, res) => {
    try {

        res.status(200).send();

    } catch (error) {
        res.status(500).json({ message: error })
    }
}
// servie
const service = async (req, res) => {
    try {
        res.status(200).send(req.user)

    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
}
// register
const postregister = async (req, res) => {
    try {
        const email = req.body.email;
        const checkEmail = await register.findOne({ email: email })
        const newUser = new register({
            name: req.body.name,
            email: email,
            phone: req.body.phone,
            password: req.body.password,
        });
        console.log(newUser);
        await newUser.save()
        const token = await newUser.generatetokens()
        console.log(token);
        res.cookie('auth_token', token, {
            httpOnly: true, // Protect against client-side access
            withCredentials: true,
        });
        res.status(201).json({ message: 'user created!' });
    } catch (error) {
        res.status(400).json({ message: "some things is wrong" });
    }
}

// login
const postlogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const useremail = await register.findOne({ email: email })
        if (!useremail) {
            return res.status(400).json({ message: "Email is incorrect!" });
        }
        const isValid = await bcrypt.compare(password, useremail.password);
        const token = await useremail.generatetokens()
        res.cookie('auth_token', token, {
            httpOnly: true, // Protect against client-side access
            withCredentials: true,
        });
        console.log(token)
        if (isValid) {
            res.status(201).json({ message: 'login successful', });
        }
        else {
            return res.status(400).json({ message: "Password is incorrect" });
        }
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

// contact
const postcontact = async (req, res) => {
    try {
        const { subject, email, message } = req.body;
        const newContact = new contacts({
            subject: subject,
            email: email,
            message: message

        })
        await newContact.save();
        res.status(201).json({ message: 'message sent ' });
    } catch (error) {
        console.log(error);
        res.status(201).json({ message: 'somethings is wrong ' });
    }

}
const getcontact = async (req, res) => {
    try {
        res.status(201).json(req.user);

    } catch (error) {
        console.log(error);
    }
}
const getlogout = async (req, res) => {
    try {
        res.clearCookie("auth_token", { path: '/' });
        res.status(201).send("User Logout");

    } catch (error) {
        console.log(error);
    }
}





module.exports = { home, postregister, postlogin, getcontact, service, postcontact, getlogout };