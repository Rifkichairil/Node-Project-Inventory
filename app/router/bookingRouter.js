var express = require('express')
var router = express.Router()
const { index, viewCreate, actionCreate } = require('../controller/bookingController')

router.get('/', index);
router.get('/create', viewCreate);
router.post('/create', actionCreate);

module.exports = router;