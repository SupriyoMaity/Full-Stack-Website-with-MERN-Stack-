
const express=require('express');
const router=express.Router();
const controllers=require('../controllers/user_controllers')
const validate=require( '../middlewares/validate_middleware')
const registerSchema=require( '../validators/register_validator') 
const auth=require("../middlewares/auth_middlewares")


router.route("/").get(controllers.home);
router.route("/register").post(validate(registerSchema),controllers.postregister);
router.route("/login").post(controllers.postlogin);
router.route("/contact").get(auth,controllers.getcontact)
router.route("/contact").post(controllers.postcontact);
router.route("/service").get(auth,controllers.service);
router.route("/logout").get(controllers.getlogout);


module.exports=router;