import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";
import TasksView from "@/views/TasksView.vue";
import ProjectsView from "@/views/ProjectsView.vue";

const routes: RouteRecordRaw[] = [{
    path: '/',
    name: '/tasks',
    component: TasksView,
},{
    path: '/projects',
    name: 'projets',
    component: ProjectsView
}


]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,

})

export default router;