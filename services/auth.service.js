const data = require('../data.json');

const auth = (req, res) => {
    let index = data.findIndex((it) => (req.body.email == it.email && req.body.pass == it.pass))
    
    if(index == -1) 
        return res.json("Wrong Email OR Pass"); 
    else 
        return index;
}

module.exports = auth;