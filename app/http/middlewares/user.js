// user verification
const user = (req, res, next)=>{

    console.log('User Request Received')
    // verify user here
    next()
}

module.exports = user