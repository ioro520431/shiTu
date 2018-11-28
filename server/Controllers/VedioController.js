module.exports={
    //视频信息查询
    vedios: (req, resp) => {
        //引入vedioService模块
        const VedioService = require('../Service/VedioService.js');
        let vedioService = new VedioService();
        //vedioService模块初始化
        vedioService.init();
        vedioService.selectAllVedios(result => {
            resp.json(result);
        })
    },
    //视频详情页信息查询
    vedioInfo: (req, resp) => {
        let v_id = req.query.v_id;
        //引入vedioService模块
        const VedioService = require('../Service/VedioService.js');
        let vedioService = new VedioService();
        //vedioService模块初始化
        vedioService.init();
        vedioService.selectVedio(v_id, result => {
            let data = {
                main: result
            }
            vedioService.selectOtherVedio(v_id, result => {
                data.others = result;
                resp.json(data);
            })
        })
    }
}