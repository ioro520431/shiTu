module.exports = {
    index: function (req, res) {
        if(req.session.sign){
            res.render('users/index',{userName:req.session.user.userName});
            return;
        }
        var email = req.cookies.email;
        var password=req.cookies.password;

        if(email==null||password==null){
            res.render('users/index',{userName:'', state:-1});
        }else{
            //(1)引入userService
            var UserService = require('../Service/UserService');
            //(2)创建对象
            var userService = new UserService();
            //(3)对象初始化
            userService.init();
            //(4)验证用户都合法
            userService.login(req.session,email,password,function(result){
                userService.end();
                if(result.state==2)
                {
                    req.session.sign=true;
                    res.render('users/index', {userName:req.session.userName});
                }else{
                    res.render('users/index', {userName:''});
                }
            });
        }
    },
    login: function (req, res) {
        //1, 解析数据
        var u_name = req.body.u_name;
        var u_pwd = req.body.u_pwd;
        //2,向业务层要数据
        //(1),引入UserService模块
        var UserService = require('../Service/UserService');
        //(2),创建UserService对象并初始化
        var userService = new UserService();
        userService.init();
        //(3),用户登陆业务
        userService.login(req.session,u_name,u_pwd,function(result){
            if(result.state==2){
                req.session.sign=true;
            }
            res.end(JSON.stringify(result));
        });
    },
    register: function (req, res) {
        //1, 解析数据并包装对象
        var userInfo = {
            u_name: req.body.u_name,
            u_pwd: req.body.u_pwd,
            name: req.body.name,
            sex: req.body.sex,
            home:req.body.home,
            address:req.body.address,
            birthday:req.body.birthday
        };
        //2,向业务层要数据
        //(1),引入UserService模块
        var UserService = require('../Service/UserService');
        //(2),创建UserService对象并初始化
        var userService = new UserService();
        userService.init();
        //用户注册业务
        userService.register(req.session,userInfo,function(data){
            //把对象转为json格式数据并返回页面
            userService.end();
            res.end(JSON.stringify(data))
        });
    },
    userQuit: function(req,res){
        let response = {
            state: 1,
            msg: '您已安全退出当前账户'
        }
        req.session.userId = '';
        res.end(JSON.stringify(response));
    }
};