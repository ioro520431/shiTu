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

//主路由控制器
var indexController = require('./Controllers/IndexController');

app.post('/login',indexController.login);

app.post('/register',indexController.register);

app.get('/collection',indexController.collection);

//菜谱路由控制器
var menuController = require('./Controllers/MenuController');

app.get('/cook_book',menuController.cookBook);

app.get('/menu',menuController.menu);

app.get('/hot_menu',menuController.hotMenu);

app.get('/item_menu',menuController.itemMenu);



//食材路由控制器
var marterialController = require('./Controllers/MarterialController');

app.get('/material',marterialController.material);

app.get('/detail',marterialController.detail);

app.get('/home',marterialController.home);



//视频路由控制器
var vedioController = require('./Controllers/VedioController');

app.get('/recipe_vedio',vedioController.vedios);

app.get('/vedio_info',vedioController.vedioInfo);

app.listen(9999, function () {
    console.log('Server is running...');
});