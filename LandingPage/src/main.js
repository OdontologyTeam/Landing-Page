import vue from 'vue'
import App from './App.vue'

import vueSmoothScroll from 'vue-smooth-scroll'
vue.use(vueSmoothScroll)

new vue({
  el: '#app',
  render: h => h(App)
})

window.addEventListener("load", event => {
  document.getElementById('loading').style.display = "none"
})

document.getElementById("closeMenu").addEventListener("click", event =>{
  let menu = document.getElementsByClassName("menu")[0]
  menu.style.opacity = "0"
  menu.style.display = "none"
})

document.getElementById("openMenu").addEventListener("click", event =>{
  let menu = document.getElementsByClassName("menu")[0]
  menu.style.display = "inline"
  menu.style.opacity = "0.9"
})
