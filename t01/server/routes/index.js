var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
    res.send({greeding : 'hello React X node.js'});
});

module.exports = router;