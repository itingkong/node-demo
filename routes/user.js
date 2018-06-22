var express = require('express');
var router = express.Router();

router.all('/list', function(req, res){
    console.log(req.method);
    console.log(req.baseUrl);
    console.log(req.path);
    console.log(req.headers['user-agent']);
    console.log(req.get('user-agent'));
    console.log(req.query);
    console.log(req.query.id);
    console.log(req.body);

    res.send('yes!')
});

// 获取参数
// router.get('/:id', function (req, res) {
//     console.log(req.params.id);
//     res.send('666');
// });

// 无法访问。。。
router.get('/bb', function(req, res){
    res.status(403).send('forbidden!');
});

router.get('/cc', function(req, res){
    res.contentType('application/javascript');
    res.sendFile('/dd.js', {root: __dirname + '/../public'});
});

router.get('/ee', function(req, res){
    res.json({a:1, b:2});
});

module.exports = router;