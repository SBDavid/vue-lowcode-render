import { createApp, h, isVNode } from 'vue'
// import App from './App.vue'

import './assets/main.css'

// console.info(isVNode(h(App)))

// const Ele = h('div', { id: 'foo', onClick: new Function("e", "console.info(e)") }, h(App))

// const Ele = h('div', null, "12345")

import AppTsx from './AppTsx'

createApp(AppTsx).mount('#app')
