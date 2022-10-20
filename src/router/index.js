import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailsView from "@/views/DetailsView";
import CreateView from "@/views/CreateView";
import TagView from "@/views/TagView";
import RealTime from "@/views/RealTime";

const routes = [
    {
        path: '/',
        name: 'HomeView',
        component: HomeView
    },
    {
        path: '/posts/:id',
        name: 'DetailsView',
        component: DetailsView,
        props: true
    },
    {
        path: '/create',
        name: 'CreateView',
        component: CreateView,
    },
    {
        path: '/tags/:tag',
        name: 'TagView',
        component: TagView,
    },
    {
        path: '/realtime',
        name: 'RealTime',
        component: RealTime,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
