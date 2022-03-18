var express = require('express')
var router = express.Router()
const { index } = require('../controller/dashboardController')


router.get('/', index);

module.exports = router;