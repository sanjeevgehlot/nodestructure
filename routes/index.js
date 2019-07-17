
var express = require('express');
var router = express.Router();
var user = require('../controllers/users');



router.get('/users/list', user.list);


module.exports = router;


