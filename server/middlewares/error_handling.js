const errorHandler=(err,req,res,next)=>{
    const status=err.status||500;
    const message=err.message||'Internal Server Error';
    const extradetails=err.extradetails||'Backend  server encountered an internal error!';
    res.status(status).json({
        success:false,
        status,
        message,
        extradetails
    });
    
}

module.exports=errorHandler;