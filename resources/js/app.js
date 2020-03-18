import DashBoardComponent from "./components/Admin/DashBoardComponent";

require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router';
import ProfileComponent from "./components/Admin/ProfileComponent";
import UserComponent from "./components/Admin/UserComponent";

window.Vue.use(VueRouter);

const routes = [
    {path:'/dash-board' , component : DashBoardComponent},
    {path:'/profile' , component: ProfileComponent },
    {path:'/users' , component: UserComponent },
];

const router = new VueRouter({mode: 'history', routes });

const app = new Vue({ router }).$mount('#app')



