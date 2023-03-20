

class custom_error extends Error{
    constructor(message){
    super(message)
}
}

export const customError=custom_error