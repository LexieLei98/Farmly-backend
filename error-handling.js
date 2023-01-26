const handle404Errors = (err, req, res, next) => {
    if(err.statusCode === 404){
        res.status(404).send({msg: "Path not found"})
    }
    else{
        next(err)
    }
}


const handleCustomErrors = (err, req, res, next) => {
    if(err.status){
        res.status(err.status).send({msg: err.msg})
    } else {
        next(err)
    }
}

const handleOtherErrors = (err, req, res, next) => {
    if (err.name === "ValidationError"||"CastError") {
        res.status(400).send({msg:'Bad Request!'})
    }
    else {
        next(err);
    }
}

const handle500Error = (err, req, res, next) => {
    res.status(500).send({msg: "Server Error"});
};



module.exports = { handle500Error, handleOtherErrors, handleCustomErrors, handle404Errors} 