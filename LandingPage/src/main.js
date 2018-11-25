import vue from 'vue'
import App from './App.vue'

new vue({
    el: '#app',
    render: h => h(App)
})

window.addEventListener("load", function (event) {
    document.getElementById('loading').style.display = "none";
});