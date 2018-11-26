module.exports = function () {
    this.init = () => {
        const MenuDao = require('../Dao/MenuDao.js');
        this.menuDao = new MenuDao();
        this.menuDao.init();
    };
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
    this.selectMaterialById = (ma_id, call) => {
        let _this = this;
        _this.menuDao.selectMaterialByKey(['ma_id', ma_id], (result) => {
            let data = result[0];
            data.ma_tip_green = _this.dealData(data.ma_tip_green);
            data.ma_tip_red =_this.dealData(data.ma_tip_red);
            data.ma_eat = _this.dealDatas(data.ma_eat, 'title', 'text');
            data.ma_taboo = _this.dealData(data.ma_taboo);
            data.storage = _this.dealData(data.storage);
            data.ma_skill = _this.dealData(data.ma_skill);
            data.eat_taboo = _this.dealData(data.eat_taboo);
            call(data);
        })
    };
    this.selectAllVedios = call =>{
        let _this = this;
        _this.menuDao.selectVedios(result=>{
            call(result)
        })
    };
    this.selectVedio = (v_id,call)=>{
        let _this = this;
        _this.menuDao.selectVedioById(v_id,result=>{
            let data = result[0];
            data.v_content = _this.dealData(data.v_content);
            call(data);
        });
    };
    this.selectOtherVedio = (v_id,call)=>{
        let _this = this;
        _this.menuDao.selectOtherVedio(v_id,result=>{
            call(result);
        });
    };
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
        //拼接SQL部分语句
        for (let key in info) {
            if(info[key]&&key!='make_time'&&key!='material'){
                str += ' and '+key+'=\''+info[key]+'\'';
            }
        }
        if(info.material){  
            str += ' and main_ma like %'+info.material+'% or assist like %'+info.material+'%';
        }
        _this.menuDao.selectMenuByKey(['kind',menuKind],result=>{
            let data = [];
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