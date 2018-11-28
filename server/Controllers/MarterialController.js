module.exports = {
    //食材信息查询
    detail: (req, resp) => {
        let ma_id = req.query.ma_id;
        //引入MarterialService模块
        const MarterialService = require('../Service/MarterialService.js');
        let marterialService = new MarterialService();
        //MarterialService模块初始化
        marterialService.init();
        //引入MenuService模块
        const MenuService = require('../Service/MenuService.js');
        let menuService = new MenuService();
        //MenuService模块初始化
        menuService.init();
        marterialService.selectMaterialById(ma_id, (result) => {
            let obj = {
                marterial: result
            };
            menuService.selectMenuByMa(result.ma_name,result=>{
                obj.menus = result;
                resp.json(obj);
            })
        })
    },
    //home页面数据请求
    home: (req, resp) => {
        //获取参数
        let info = {
            fruit: req.query.fruit,
            vegetable: req.query.vegetable,
            grain: req.query.grain,
            fresh: req.query.fresh
        }
        //引入MarterialService模块
        const MarterialService = require('../Service/MarterialService.js');
        let marterialService = new MarterialService();
        //MarterialService模块初始化
        marterialService.init();
        marterialService.selectMaterialByKinds(info, result => {
            resp.json(result);
        })
    },
    //菜谱页食材查询
    material: (req, resp) => {
        //获取参数
        let ma_kind = req.query.ma_kind;
         //引入MarterialService模块
         const MarterialService = require('../Service/MarterialService.js');
         let marterialService = new MarterialService();
         //MarterialService模块初始化
         marterialService.init();
         marterialService.selectMaterialByKind(ma_kind, result => {
            resp.json(result);
        })
    },
}