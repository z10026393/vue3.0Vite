import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import './assets/css/element-variables.scss'


const app = createApp(App);
app.use(ElementPlus)
app.use(router);  //注意顺序
app.mount("#app");