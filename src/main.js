import { createApp } from "vue";
import {createRouter, createWebHistory} from 'vue-router'

import App from "./App.vue";
import landing from './views/landing.vue'
import story from './views/story.vue'


import "./assets/css/style.css";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'landing', component: landing},
        {path: '/story', name: 'story', component: story}
    ]
})

createApp(App).use(router).mount("#app");
