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
        menuService.selectMenuByItem(menuKind, info, result => {
            resp.json(result);
        });
    },
    //饮食健康调理部分数据查询
    adjustMenu: (req, resp) => {
        let ad_text = {
            one: req.query.one,
            two: req.query.two,
            three: req.query.three,
            four: req.query.four
        };
        //引入MenuService模块
        const MenuService = require('../Service/MenuService.js');
        let menuService = new MenuService();
        //MenuService模块初始化
        menuService.init();
        menuService.selectMenuByAdjust(ad_text, result => {
            resp.json(result)
        });
    },
    //饮食健康页面数据查询
    heathMenu: (req, resp) => {
        let heal_kind = req.query.heal_kind;
        //引入MenuService模块
        const MenuService = require('../Service/MenuService.js');
        let menuService = new MenuService();
        //MenuService模块初始化
        menuService.init();
        menuService.selectHealthyMenu(heal_kind,result=>{
            resp.json(result);
        });
    },
    //饮食健康咨询详情页路由请求处理
    healItem: (req,resp)=>{
        let heal_id = req.query.heal_id;
        //引入MenuService模块
        const MenuService = require('../Service/MenuService.js');
        let menuService = new MenuService();
        //MenuService模块初始化
        menuService.init();
        menuService.selectHealthyMenuById(heal_id,result=>{
            resp.json(result);
        });
    },
    //查询首页健康咨询
    homeHeal: (req,resp)=>{
        let heal_kind = req.query.heal_kind;
        //引入MenuService模块
        const MenuService = require('../Service/MenuService.js');
        let menuService = new MenuService();
        //MenuService模块初始化
        menuService.init();
        menuService.selectHealthyMenu(heal_kind,result=>{
            result = result.slice(0,3)
            resp.json(result);
        });
    }
}