var express = require('express');
var router = express.Router();

/* GET user */
router.get('/', function(req, res, next) {
    res.json(req.user);
});

module.exports = router;
