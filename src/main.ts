import { createApp } from 'vue'

import './assets/main.css'

// 组件
import App from './App.vue'
import TsxComp from './TsxComp'

// 最外层容器
import AppTsx from './AppTsx'

const app = createApp(AppTsx)
app.component('App', App)
app.component('TsxComp', TsxComp)

app.mount('#app')
