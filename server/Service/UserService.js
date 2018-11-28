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
    this.selectUserInfo = (u_id, call) => {
        this.usersDao.selectInfo(['u_id', u_id], result => {
            let data = result[0];
            data.address = data.address.split('-').join('');
            call(data);
        });
    };
    this.selectCollection = (u_id, call) => {
        let _this = this;
        _this.usersDao.selectCollectMenu(u_id, result => {
            for (let index in result) {
                result[index].tip = _this.dealData(result[index].tip);
                result[index].step = _this.dealData(result[index].step);
            }
            call(result);
        })
    };
    this.collect = (u_id, m_id, call) => {
        let info = [u_id, m_id];
        let response = {};
        this.usersDao.checkCollect(info, result => {
            if (result.length == 0) {
                this.usersDao.insertCollect(info, result => {
                    if (result.insertId) {
                        response.state = 1;
                        response.msg = '收藏成功，可在个人中心查看...';
                        call(response);
                    }
                })
            }
            else {
                response.state = 0;
                response.msg = '您已经收藏过该菜单...';
                call(response);
            }
        })
    };
    this.deleteCollect = (f_id,call)=>{
        this.usersDao.deleteCollectById(f_id, result => {
            let response={
                state:1,
                msg:'取消收藏成功...'
            }
            call(response);
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
    //字符串处理函数
    this.dealData = (str) => {
        if (str) {
            return str.split('||');
        }
        return '';
    };
    this.dealDatas = (str, name, num) => {
        if (!str) {
            return [];
        }
        else {
            let arr = str.split('||');
            for (let index in arr) {
                arr[index] = arr[index].split('|');
                let obj = {};
                obj[name] = arr[index][0];
                obj[num] = arr[index][1];
                arr[index] = obj;
            }
            return arr;
        }
    };

    this.end = function () {
        this.usersDao.closeConnecte();
    };
};