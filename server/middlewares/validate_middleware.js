
const validate=(schema)=>async(req,res,next)=>{
    try {
       const parsBody=await schema.parseAsync(req.body);
       req.body = parsBody;
      
        next(); 
        
    } catch (e) {
        const message=e.errors[0].message;
        
        res.status(400).send({
            status:false,
            message:message,
            
        });
        // next(e);
        
    }
}

module.exports=validate