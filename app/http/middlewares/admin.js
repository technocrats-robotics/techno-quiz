// admin verification

const admin = (req, res, next)=>{

    console.log('Admin Request Received')
    let admin = true // verify admin here
    if(admin){
        next()
    } else {
        throw new Error('Unauthorised User')
    }
    
}

module.exports = admin