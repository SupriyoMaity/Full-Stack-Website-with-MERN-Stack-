const jwt = require('jsonwebtoken');
const UserModel = require("../models/register_model");

const auth = async (req, res, next) => {
    try {
        // Get token from header
        let token = req.cookies.auth_token;
        console.log("Token:", token);
        
        const verify = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Verification:", verify);
        
        const userdata = await UserModel.findOne({ id:verify._id,"tokens.token": token });

        console.log("User Data:", userdata);
        
        if (!userdata) {
            throw new Error("User not found");
        }
        req.token=token;
        req.user=userdata;
        
        next();
    } catch (error) {
        console.error("Authentication Error:", error);
        res.status(401).send("Unauthorized");
    }
}

module.exports = auth;
