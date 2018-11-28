module.exports = function () {
    this.init = function () {
        //1,引入MySQL模块
        var mysql = require('mysql');  //调用MySQL模块

        //2，创建一个connection
        this.connection = mysql.createConnection({
            host: '192.168.2.190',       //主机 ip
            user: 'root',            //MySQL认证用户名
            password: '123456',                //MySQL认证用户密码
            port: '3306',                 //端口号
            database: 'shitu'          //数据库里面的数据
        });
        //3，连接
        this.connection.connect();
    };
    //通过id查询菜谱
    this.selectMenu = function (menuId, call) {
        var userGetSql = "SELECT * FROM menu WHERE m_id=" + menuId;
        this.connection.query(userGetSql, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            call(result);
        });
    };
    //通过筛选条件查询菜谱
    this.selectMenuByKey = (info, call, str = '') => {
        var userGetSql = "SELECT * FROM menu where " + info[0] + " like '%" + info[1] + "%'" + str + ";";
        this.connection.query(userGetSql, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            call(result);
        });
    };
    //通过关键字查询食材信息
    this.selectMaterialByKey = (info, call) => {
        var userGetSql = "SELECT * FROM material where " + info[0] + " = '" + info[1] + "';";
        this.connection.query(userGetSql, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            call(result);
        });
    };
    //以时间分类来查询菜谱
    this.selectMenuByTime = (time, call) => {
        var userGetSql = "SELECT * FROM menu WHERE creat_at ='" + time + "'  LIMIT 0,7;";
        this.connection.query(userGetSql, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            call(result);
        });
    };
    //通过食材名查询菜谱
    this.selectMenuByMa = (ma, call) => {
        var userGetSql = "SELECT * FROM menu WHERE main_ma like \'%" + ma + "|%\' or assist_ma like \'%" + ma + "|%\' LIMIT 0,12;";
        this.connection.query(userGetSql, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            call(result);
        });
    };
    //根据数据库tip字段查询数据库
    this.selectMenuByTip = (str, call) => {
        var userGetSql = "SELECT * FROM menu WHERE " + str + ";";
        this.connection.query(userGetSql, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            call(result);
        });
    };
    //根据kind模糊查询healthy表
    this.selectHealthyByKind = (heal_kind, call) => {
        var userGetSql = "SELECT h_id,h_name,h_pic,h_browse,h_common FROM healthy WHERE h_kind like '%" + heal_kind + "%';";
        this.connection.query(userGetSql, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            call(result);
        });
    };
    //根据关键字段key查询healthy表
    this.selectHealthyByKey = (info, call) => {
        var userGetSql = "SELECT * FROM healthy WHERE "+info[0]+" = '" + info[1] + "';";
        this.connection.query(userGetSql, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            call(result);
        });
    };
    this.closeConnecte = function () {
        //3,连接结束
        this.connection.end();
    };
}