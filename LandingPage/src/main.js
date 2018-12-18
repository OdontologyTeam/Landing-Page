import vue from 'vue'
import App from './App.vue'

new vue({
  el: '#app',
  render: h => h(App)
})
/*
window.addEventListener("load", function (event) {
  document.getElementById('loading').style.display = "none"
})
*/

document.getElementById("closeMenu").addEventListener("click", function(event){
  var menu = document.getElementsByClassName("menu")[0]
  menu.style.opacity = "0"
  menu.style.display = "none"
})

document.getElementById("openMenu").addEventListener("click", function(event){
  var menu = document.getElementsByClassName("menu")[0]
  menu.style.display = "inline"
  menu.style.opacity = "0.9"
})