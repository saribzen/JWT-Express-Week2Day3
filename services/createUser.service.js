const data = require('../data.json');
const { v1: uuidv1 } = require('uuid');
const setData = require('../Utils/WriteFile');

const createUser = (req, res) => {
    
    if(!req.body.email || !req.body.pass) return res.json("ERROR: EMAIL OR PASS EMPTY");

    let user = {
        id: uuidv1(),
        email: req.body.email,
        pass: req.body.pass,
        role: req.body.role
    }

    data.push(user);
    setData(data);

    return user;
}

module.exports = createUser