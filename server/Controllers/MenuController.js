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
    menu: (req, resp) => {
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