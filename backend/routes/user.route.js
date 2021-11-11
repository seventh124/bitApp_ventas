const router = require('express').Router();
const {user_controller} = require('../controllers');
const {user_middleware} = require('../middleware');

router.post('/add', user_middleware.verifyTypes, user_middleware.verifyDocument)//,user_controller.addUser);
router.get('/list', user_controller.getAllUsers);
router.put('/update', user_middleware.verifyTypes)//, user_controller.updateUsers)
//router.delete('/delete/:id', user_controller.deleteUser);

module.exports = router;


