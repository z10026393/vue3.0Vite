import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
const routes = [
    {
        path: "/",
        name: "/",
        component: Home,
    },
    {
        path: "/home",
        name: "Home",
        component: Home,
    },
    {
    	path: "/test",
    	name: "Test",
    	component: () =>
    		import(/* webpackChunkName: "about" */ "../views/Test.vue"),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
export default router;