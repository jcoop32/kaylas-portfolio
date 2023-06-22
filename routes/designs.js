var express = require('express');
var router = express.Router();

const worksCtrl = require('../controller/designs');

/* GET users listing. */
router.get('/', worksCtrl.index);

module.exports = router;
