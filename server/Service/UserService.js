module.exports = function () {
    this.init = function () {
        //1,引入首页数据处理模块
        var UsersDao = require('../Dao/UsersDao');
        //2，创建对象
        this.usersDao = new UsersDao();
        //3,初始化
        this.usersDao.init();
    };

    this.login = function (u_name, password, call) {
        var response = {
            state: 0,
            msg: ''
        }
        //检查用户是否存在于数据库中且密码是否正确
        this.checkUser(password, ['u_name', u_name], function (result) {
            if (!result.flag) {
                response.state = -1;
            }
            else if (result.result) {
                response.state = 2;
                response.name = result.result.name;
                response.userId = result.result.u_id;
            } else {
                response.state = 1;
                response.msg = "输入密码错误！";
            }
            call(response);
        });
    };

    this.register = function (info, call) {
        var response = {
            state: 0,
            msg: ''
        }
        var that = this;
        //检查用户是否存在于数据库中
        this.checkAccount(['u_name', info.u_name], function (result) {
            if (result) {
                response.state = -1;
                response.msg = '用户名已存在，请重新输入！';
                call(response);
            } else {
                //账户不存在时往数据库中添加数据
                that.usersDao.insertUser(info, function (result) {
                    response.state = 1;
                    response.msg = '注册成功,现可进行登录！！！';
                    call(response);
                });
            }
        })
    };

    this.collect = (u_id,m_id,call)=>{
        let info = [u_id,m_id];
        let response = {};
        this.usersDao.selectCollect(info,result=>{
            if(result.length==0){
                this.usersDao.insertCollect(info,result=>{
                   if(result.insertId){
                        response.state = 1;
                        response.msg = '收藏成功，可在个人中心查看...';
                        call(response);
                   }
                })
            }
            else{
                response.state = 0;
                response.msg = '您已经收藏过该菜单...';
                call(response);
            }
        })
    };

    this.selectUserByKey = function (info, call) {
        this.usersDao.selectUser(info, function (result) {
            call(result);
        })
    };

    this.checkAccount = function (info, call) {
        this.selectUserByKey(info, function (result) {
            if (result.length == 0) {
                call(false);
            } else {
                call(true);
            }
        });
    };

    this.checkUser = function (password, info, call) {
        var msg = {
            flag: false
        };
        this.selectUserByKey(info, function (result) {
            if (result.length == 0) {
            } else if (result[0].u_pwd == password) {
                msg.flag = true;
                msg.result = result[0];
            } else {
                msg.flag = true;
            }
            call(msg);
        });
    };

    this.end = function(){
        this.usersDao.closeConnecte();
    };
};