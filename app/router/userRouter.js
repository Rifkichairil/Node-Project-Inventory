var express = require('express');
var router = express.Router();
const {index, create, deleteUser} =require('../controller/userController')

/* GET home page. */
router.get('/', index);
router.post('/', create);
router.delete('/delete/:id', deleteUser);

module.exports = router;
