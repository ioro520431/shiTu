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

    this.selectMenu = function (menuId,call) {
        var userGetSql = "SELECT * FROM menu WHERE m_id=" + menuId;
        this.connection.query(userGetSql, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            call(result);
        });
    };
    this.selectMenuByKey = (info,call,str='')=>{
        var userGetSql = "SELECT * FROM menu where "+info[0]+" like '%"+info[1]+"%'"+str+";";
        console.log(userGetSql)
        this.connection.query(userGetSql, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            call(result);
        });
    };
    this.selectMaterialByKey = (info,call)=>{
        var userGetSql = "SELECT * FROM material where "+info[0]+" = '"+info[1]+"';";
        this.connection.query(userGetSql, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            call(result);
        });
    };
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
    this.selectMenuByTime = (time,call)=>{
        var userGetSql = "SELECT * FROM menu WHERE creat_at ='"+time+"'  LIMIT 0,7;";
        this.connection.query(userGetSql, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            call(result);
        });
    };
    this.selectMenuByItem = (str,call)=>{
        var userGetSql = "SELECT * FROM menu WHERE "+str+";";
        console.log(userGetSql)
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