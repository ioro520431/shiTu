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
    //查询所有视频信息
    this.selectVedios = call =>{
        var userGetSql = "SELECT v_id,v_name,v_pic,v_time FROM vedios;";
        this.connection.query(userGetSql, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            call(result);
        });
    };
    //通过id查询一个视频信息
    this.selectVedioById = (v_id,call)=>{
        var userGetSql = "SELECT * FROM vedios WHERE v_id='"+v_id+"';";
        this.connection.query(userGetSql, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            call(result);
        });
    };
    //筛选出除了固定id外的其他视频信息
    this.selectOtherVedio = (v_id,call)=>{
        var userGetSql = "SELECT v_id,v_name,v_pic,v_time FROM vedios WHERE v_id!='"+v_id+"';";
        this.connection.query(userGetSql, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            call(result);
        });
    };
    this.closeConnecte = function(){
        //3,连接结束
        this.connection.end();
    }
}