System.register(['./games.component', './list/list.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var games_component_1, list_component_1;
    var GamesRoutes;
    return {
        setters:[
            function (games_component_1_1) {
                games_component_1 = games_component_1_1;
            },
            function (list_component_1_1) {
                list_component_1 = list_component_1_1;
            }],
        execute: function() {
            exports_1("GamesRoutes", GamesRoutes = [{
                    path: 'games',
                    component: games_component_1.GamesComponent,
                    children: [
                        { path: '/games', component: list_component_1.ListComponent }
                    ]
                }]);
        }
    }
});
//# sourceMappingURL=games.routes.js.map