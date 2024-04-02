const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// Define the schema for the register
const registerSchema = new mongoose.Schema({
    name: {
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
        required: true
    },
    password: {
        type: String,
        required: true
    },
    tokens:[{
        token:{
            type:String, 
            required:true
        }
    }]
});
//  Method to hash passwords.
registerSchema.pre("save", async function (next) {
    const user = this;
    if (!user.isModified("password")) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password, salt);
        user.password = hash_password;
        

    } catch (error) {
        next(error);
    }


})

// jwt tokens
registerSchema.methods.generatetokens=async function(){
try {
    let token=jwt.sign({id:this._id},process.env.JWT_SECRET)
    this.tokens=this.tokens.concat({token:token});
     await this.save();
     return token ;
   
} catch (error) {
    console.log(error);
}

}





// Create a model using the schema
const Register = mongoose.model('Register', registerSchema);

module.exports = Register;


