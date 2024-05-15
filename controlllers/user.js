const data = require('../data.json');
const auth = require('../services/auth.service');
const createToken = require('../services/token.service');
const createUser = require('../services/createUser.service');



const login = (req, res) => {
    const isAuthorized = auth(req, res);
    const token = createToken(data[isAuthorized].email, data[isAuthorized].role)
    
    res.status(200).json({
        success: true,
        Userdata: { token: token },
    });
}



const register = (req, res) => {
    const user = createUser(req, res);
    const token = createToken(user.email, user.role);
    
    res.status(200).json({
        success: true,
        Userdata: { token: token },
    });
}

module.exports = {
    login,
    register
}