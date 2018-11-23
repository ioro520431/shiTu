module.exports = {
    cookBook :(req,resp)=>{
        let menuId = req.query.menuNum;
        const MenuService = require('../Service/MenuService.js');
        let menuService = new MenuService();
        menuService.init();
        menuService.selectMenu(menuId,(result)=>{
            resp.json(result);
        })
    },
    material :(req,resp)=>{
        let menuKind = req.query.menu_kind;
        const MenuService = require('../Service/MenuService.js');
        let menuService = new MenuService();
        menuService.init();
        menuService.selectMenuByKind(menuKind,(result)=>{
            resp.json(result);
        })
    }
}