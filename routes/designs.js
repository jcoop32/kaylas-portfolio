var express = require('express');
var router = express.Router();

const worksCtrl = require('../controller/designs');

/* GET users listing. */
router.get('/', worksCtrl.index);

router.get('/:id', worksCtrl.show);

module.exports = router;
