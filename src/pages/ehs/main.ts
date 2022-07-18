import { createApp } from 'vue'
import App from './App.vue'
import "@/assets/styles/index.scss"
import element from "element-plus"
import "element-plus/dist/index.css"
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(element)
app.mount('#app')
