module.exports = {
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
        userService.login(u_name, u_pwd, function (result) {
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
            home: req.body.home,
            address: req.body.address,
            birthday: req.body.birthday
        };
        //2,向业务层要数据
        //(1),引入UserService模块
        var UserService = require('../Service/UserService');
        //(2),创建UserService对象并初始化
        var userService = new UserService();
        userService.init();
        //用户注册业务
        userService.register(userInfo, function (data) {
            //把对象转为json格式数据并返回页面
            userService.end();
            res.end(JSON.stringify(data))
        });
    },
    collection: (req, resp) => {
        let m_id = req.query.m_id;
        let u_id = req.query.u_id;
        if (!u_id) {//判断是否登录
            resp.json({ state: -1 });
        } else {
            //(1),引入UserService模块
            var UserService = require('../Service/UserService');
            //(2),创建UserService对象并初始化
            var userService = new UserService();
            userService.init();
            userService.collect(u_id, m_id, result => {
                resp.json(result);
            })
        }
    },
    //用户个人页面信息查询
    person: (req, resp) => {
        let u_id = req.query.u_id;
        //(1),引入UserService模块
        var UserService = require('../Service/UserService');
        //(2),创建UserService对象并初始化
        var userService = new UserService();
        userService.init();
        userService.selectUserInfo(u_id,result=>{
            let info={
                userInfo:result
            }
            userService.selectCollection(u_id,result=>{
                info.collection = result.collection;
                info.release = result.release;
                resp.json(info);
            })
        });
    },
    //取消收藏
    cancel: (req,resp)=>{
        let f_id = req.query.f_id;
        //(1),引入UserService模块
        var UserService = require('../Service/UserService');
        //(2),创建UserService对象并初始化
        var userService = new UserService();
        userService.init();
        userService.deleteCollect(f_id,result=>{
            resp.json(result);
        })
    }
};