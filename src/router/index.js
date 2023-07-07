import {createRouter, createWebHistory} from 'vue-router'
import home from '../views/home.vue'
import cuaca from '../views/cuaca.vue'
import lokasi from '../views/lokasi.vue'
import stopwatch from '../views/stopwatch.vue'
import foto from '../views/foto.vue'
import tictactoe from '../views/tictactoe'

const routes = [
    {path : '/home', component: home},
    {path : '/cuaca', component: cuaca},
    {path : '/lokasi', component: lokasi},
    {path : '/stopwatch', component: stopwatch},
    {path : '/foto', component: foto},
    {path : '/tictactoe', component: tictactoe},
    {path : '/', redirect: '/home'},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router