class ApiError extends Error {
    constructor(
        statusCode,
        message="Smething went wrong",
        errors=[],
        stackk=""
    ){
        super(message)
        this.statusCode=statusCode
        this.date=null
        this.message=message
        this.success=false;
        this.errors=errors

        if(stack) {
            this.stack=stackk
        }else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}

export{ApiError}