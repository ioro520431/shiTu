module.exports = function () {
    this.init = () => {
        const MenuDao = require('../Dao/MenuDao.js');
        this.menuDao = new MenuDao();
        this.menuDao.init();
    };
    //通过菜谱id查询菜谱
    this.selectMenu = (menuId, call) => {
        let _this = this;
        this.menuDao.selectMenu(menuId, (result) => {
            let data = result[0];
            data.tip = _this.dealData(data.tip);
            data.main_ma = _this.dealDatas(data.main_ma, 'name', 'num');
            data.assist_ma = _this.dealDatas(data.assist_ma, 'name', 'num');
            data.step = _this.dealDatas(data.step, 'stepNum', 'stepImg');
            data.finished = _this.dealData(data.finished);
            data.skill = _this.dealData(data.skill);
            call(data);
        })
    };
    //通过种类查询菜谱
    this.selectMenuByKind = (menuKind, call) => {
        let _this = this;
        _this.menuDao.selectMenuByKey(['kind', menuKind], (result) => {
            for (let index in result) {
                result[index].tip = _this.dealData(result[index].tip);
                result[index].step = _this.dealData(result[index].step);
            }
            call(result);
        })
    };
    //热门菜谱查询
    this.selectHotMenu = (time,call)=>{
        let _this = this;
        _this.menuDao.selectMenuByTime(time,result=>{
            for (let index in result) {
                result[index].tip = _this.dealData(result[index].tip);
                result[index].step = _this.dealData(result[index].step);
            }
            call(result);
        });
    };
    this.selectMenuByItem = (menuKind,info,call)=>{
        let str = '';
        let _this = this;
        //拼接SQL部分语句，筛选的条件是工艺、口味、难度
        for (let key in info) {
            if(info[key]&&key!='make_time'&&key!='material'){
                str += ' and '+key+'=\''+info[key]+'\'';
            }
        }
        //拼接字符串添加条件调料
        if(info.material){  
            str += ' and main_ma like \'%'+info.material+'%\' or assist_ma like \'%'+info.material+'%\'';
        }
        //调用数据库查询函数
        _this.menuDao.selectMenuByKey(['kind',menuKind],result=>{
            let data = [];
            //对查询出来的结果以烹饪时间为条件做筛选
            for (let index in result) {
                let time = parseInt(result[index].make_time);
                if((info.make_time&&time<=info.make_time)||!info.make_time){
                    result[index].tip = _this.dealData(result[index].tip);
                    result[index].step = _this.dealData(result[index].step);
                    data.push(result[index]);
                }
            }
            call(data);
        },str);
    };
    //根据食材名模糊查询菜谱
    this.selectMenuByMa = (ma_name,call)=>{
        let _this = this;
        this.menuDao.selectMenuByMa(ma_name,result=>{
            for (let index in result) {
                result[index].tip = _this.dealData(result[index].tip);
                result[index].step = _this.dealData(result[index].step);
            }
            call(result)
        })
    };
    //根据调理方式模糊查询菜谱
    this.selectMenuByAdjust = (ad_text,call)=>{
        let _this = this;
        let arr = [];
        for (const key in ad_text) {
            if (ad_text[key]) {
                arr.push('tip like \'%'+ad_text[key]+'%\'')
            }
        }
        let str = arr.join(' or ');
        this.menuDao.selectMenuByTip(str,result=>{
            for (let index in result) {
                result[index].tip = _this.dealData(result[index].tip);
                result[index].step = _this.dealData(result[index].step);
            }
            call(result);
        })
    };
    //根据种类查询健康食谱
    this.selectHealthyMenu = (heal_kind,call)=>{
        this.menuDao.selectHealthyByKind(heal_kind,result=>{
            call(result)
        })
    };
    //根据饮食健康咨询id查询健康咨询信息
    this.selectHealthyMenuById = (heal_id,call)=>{
        let _this = this;
        _this.menuDao.selectHealthyByKey(['h_id',heal_id],result=>{
            let data = result[0];
            data.h_text = _this.dealData(data.h_text);
            call(data)
        })
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
}