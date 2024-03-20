const {z} =require("zod");

const registerSchema=z.object({
   name: z
    .string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"Name must be at lest of 3 characters"})
    .max(50,{message:"Name must not be more than 50 characters"}),

    email:z
    .string({required_error:"Email is required"})
    .trim()
    .email({message:"Please enter a valid Email address"})
    .min(3,{message:"Email must be at lest of 3 characters"})
    .max(50,{message:"Email must not be more than 50 characters"}),

    phone:z
    .string({required_error:"Phone is required"})
    .trim()
    .min(10,{message:"Phone must be at lest of 10 characters"})
    .max(12,{message:"Phone must not be more than 12 characters"}),

    password:z
    .string({required_error:"Password is required"})
    .trim()
    .min(8,{message:"Password must be at lest of 8 characters"})
    .max(50,{message:"Password must not be more than 50 characters"}),

   
    

})

module.exports=registerSchema;