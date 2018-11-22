//1,引入express
var express = require('express');
var app = express();
//2,设置静态文件
app.use(express.static('public'));
//3,引入body-parser模块
var bodyParser = require('body-parser');
/**
 * 设置服务器允许被跨域访问
 */
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
var cookieParser = require('cookie-parser');
app.use(cookieParser());

var session = require('express-session');
app.use(session({
    secret: '12345',
    name: 'express_11_cookie',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
    cookie: {maxAge: 800000}    //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var indexController = require('./Controllers/IndexController');

app.post('/login',indexController.login);

app.get('/user_quit',indexController.userQuit);

app.post('/register',indexController.register);

app.listen(9999, function () {
    console.log('Server is running...');
});