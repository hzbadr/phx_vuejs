// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
import "phoenix_html"

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

// import socket from "./socket"

import Vue from 'vue'
import VueRouter from 'vue-router'

import Hello from './vue/hello.vue'
import World from './vue/world.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', component: Hello},
  {path: '/my-hello', component: Hello},
  {path: '/my-world', component: World},
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router
}).$mount('#router-main')
