require('dotenv').config();

const apiKey = (req, res, next) => {
    const reqKey = req.headers['api-key'];

    if(!reqKey){
        return res.status(404).json({error: "Key not found"});
    }

    if(reqKey !== process.env.API_KEY){
        return res.status(404).json({error: "Invalid Key"});
    }
    next();
}

module.exports = apiKey;

