module.exports = function () {
    this.init = () => {
        const VedioDao = require('../Dao/VedioDao.js');
        this.vedioDao = new VedioDao();
        this.vedioDao.init();
    };
    //查询所有视频信息
    this.selectAllVedios = call =>{
        let _this = this;
        _this.vedioDao.selectVedios(result=>{
            call(result)
        })
    };
    this.selectVedio = (v_id,call)=>{
        let _this = this;
        _this.vedioDao.selectVedioById(v_id,result=>{
            let data = result[0];
            data.v_content = _this.dealData(data.v_content);
            call(data);
        });
    };
    //查询除某一id外其他菜谱视频
    this.selectOtherVedio = (v_id,call)=>{
        let _this = this;
        _this.vedioDao.selectOtherVedio(v_id,result=>{
            call(result);
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
}