module.exports = {
    //菜谱详情页面查询
    cookBook: (req, resp) => {
        let menuId = req.query.menuNum;
        //引入MenuService模块
        const MenuService = require('../Service/MenuService.js');
        let menuService = new MenuService();
        //MenuService模块初始化
        menuService.init();
        menuService.selectMenu(menuId, (result) => {
            resp.json(result);
        })
    },
    //菜谱页面查询
    material: (req, resp) => {
        let menuKind = req.query.menu_kind;
        //引入MenuService模块
        const MenuService = require('../Service/MenuService.js');
        let menuService = new MenuService();
        //MenuService模块初始化
        menuService.init();
        menuService.selectMenuByKind(menuKind, (result) => {
            resp.json(result);
        })
    },
    //食材信息查询
    detail: (req, resp) => {
        let ma_id = req.query.ma_id;
        //引入MenuService模块
        const MenuService = require('../Service/MenuService.js');
        let menuService = new MenuService();
        //MenuService模块初始化
        menuService.init();
        menuService.selectMaterialById(ma_id, (result) => {
            let obj = {
                info: result
            };
            resp.json(obj);
        })
    },
    //视频信息查询
    vedios: (req, resp) => {
        //引入MenuService模块
        const MenuService = require('../Service/MenuService.js');
        let menuService = new MenuService();
        //MenuService模块初始化
        menuService.init();
        menuService.selectAllVedios(result => {
            resp.json(result);
        })
    },
    //视频详情页信息查询
    vedioInfo: (req, resp) => {
        let v_id = req.query.v_id;
        //引入MenuService模块
        const MenuService = require('../Service/MenuService.js');
        let menuService = new MenuService();
        //MenuService模块初始化
        menuService.init();
        menuService.selectVedio(v_id, result => {
            let data = {
                main: result
            }
            menuService.selectOtherVedio(v_id, result => {
                data.others = result;
                resp.json(data);
            })
        })
    },
    //热门菜谱查询
    hotMenu: (req, resp) => {
        //引入MenuService模块
        const MenuService = require('../Service/MenuService.js');
        let menuService = new MenuService();
        //MenuService模块初始化
        menuService.init();
        menuService.selectHotMenu(0, result => {
            let data = {
                new: result
            }
            menuService.selectHotMenu(1, result => {
                data.hour = result;
                menuService.selectHotMenu(2, result => {
                    data.today = result;
                    menuService.selectHotMenu(3, result => {
                        data.week = result;
                        resp.json(data);
                    })
                })
            })
        })
    },
    //根据标签查菜谱
    itemMenu: (req, resp) => {
        //获取参数
        let menuKind = req.query.menuKind;
        let info = {
            difficulty: req.query.difficulty,
            craft: req.query.craft,
            flavor: req.query.flavor,
            make_time: parseInt(req.query.time.slice(1)),
            material: req.query.material
        }
        //引入MenuService模块
        const MenuService = require('../Service/MenuService.js');
        let menuService = new MenuService();
        //MenuService模块初始化
        menuService.init();
        menuService.selectMenuByItem(menuKind,info,result=>{
            resp.json(result);
        });
    }
}