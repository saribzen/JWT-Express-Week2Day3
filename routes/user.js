const router = require('express').Router();
const userController = require('../controlllers/user') 

router.get('/', (req, res) => res.json("Home"))
router.post('/login', userController.login)
router.post('/register', userController.register)

module.exports = router;