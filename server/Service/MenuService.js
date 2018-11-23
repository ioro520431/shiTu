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
            if (data.tip) {
                data.tip = data.tip.split('||');
            }
            data.main_ma = _this.dealData(data.main_ma, 'name', 'num');
            data.assist_ma = _this.dealData(data.assist_ma, 'name', 'num');
            data.step = _this.dealData(data.step, 'stepNum', 'stepImg');
            data.finished = data.finished.split('||');
            if (data.skill) {
                data.skill = data.skill.split('||');
            }
            call(data);
        })
    };
    this.selectMenuByKind = (menuKind,call)=>{
        let _this = this;
        _this.menuDao.selectMenuByKey(['kind',menuKind],(result)=>{
            for(let index in result){
                if (result[index].tip) {
                    result[index].tip = result[index].tip.split('||');
                }
                result[index].step = result[index].step.split('||');
            }
            call(result);
        })
    }
    this.dealData = (str, name, num) => {
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