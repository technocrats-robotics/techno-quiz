// define all question related controllers here

const addQuestion = (req, res, next)=>{
    
    try{

        // for example: it will be a POST request, get data from request body
        let data = []
    
        res.json({
            status: "succeess",
            data: data
        })

    } catch(err){
        next(err)
    }
    
}

const getQuestion = (req, res, next)=>{

    try{

        let data = []
    
        res.json({
            status: "succeess",
            data: data
        })

    } catch(err){
        next(err)
    }

}

module.exports = {
    addQuestion,
    getQuestion
}