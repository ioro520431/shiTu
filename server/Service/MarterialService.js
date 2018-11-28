module.exports = function () {
    this.init = () => {
        const MarterialDao = require('../Dao/MarterialDao.js');
        this.marterialDao = new MarterialDao();
        this.marterialDao.init();
    };
     //通过id查询食材
    this.selectMaterialById = (ma_id, call) => {
        let _this = this;
        _this.marterialDao.selectMaterialByKey(['ma_id', ma_id], (result) => {
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
    //通过种类查询食材,用于食材展示一类食材
    this.selectMaterialByKind = (ma_kind,call) => {
        let _this = this;
        _this.marterialDao.selectMaterialByKind(ma_kind,result=>{
            for (let index in result) {
                result[index].introduce = result[index].introduce.slice(0,20);
                result[index].ma_tip_green = _this.dealData(result[index].ma_tip_green);
                result[index].ma_tip_red = _this.dealData(result[index].ma_tip_red);
            }
            call(result);
        });
    };
    //通过种类查询食材,用于首页展示
    this.selectMaterialByKinds = (info,call)=>{
        let _this = this;
        _this.marterialDao.selectMaterialByKind(info.fruit,result=>{
            let data = {
                fruit: result.splice(0,8)
            }
            _this.marterialDao.selectMaterialByKind(info.vegetable, result => {
                data.vegetable = result.splice(0,8);
                _this.marterialDao.selectMaterialByKind(info.grain, result => {
                    data.grain = result.splice(0,8);
                    _this.marterialDao.selectMaterialByKind(info.fresh, result => {
                        data.fresh = result.splice(0,8);
                        call(data);
                    })
                })
            })
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