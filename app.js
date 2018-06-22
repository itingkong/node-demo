var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// json 类型body
app.use(bodyParser.json());
// query string 类型body
app.use(bodyParser.urlencoded({
	extended: false
}));

// 静态文件目录
app.use(express.static(__dirname + '/public'));

app.use('/user', require('./routes/user.js'));

app.listen(8090);