import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'

Vue.use(ElementUI)

new Vue({
    el: "#main",
    render: h => h(App)
})