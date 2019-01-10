<template>
  <div id="app">
    <section id="loading">
      <div class="lds-hourglass">
      </div>
    </section>
      <div class="menu">
        <p id = "closeMenu"> <i class="fas fa-times-circle"></i></p>
        <nav>
          <li class = "home"><a href="#">INICIO</a></li>
          <li class = "about"><a href="#">ACERCA</a></li>
          <li class = "services"><a href="#">SERVICIOS</a></li>
          <li class = "ubication"><a href="#">UBICACIÓN</a></li>
          <li class = "contact"><a href="#">CONTACTO</a></li>
        </nav>
      </div>
    <header class="responsive">
      <div class="barraFixed">
        <div class="izquierdo">LOGOTIPO</div>
        <div class="derecho" id = "openMenu"><i class="fas fa-bars"></i></div>
      </div>
    </header>
    <header class = "normal">
      <div class="contenedor">
        <nav>
          <li v-for="(item, index) in navItems" :item="item"><a :href="'#' + index" v-smooth-scroll>{{item}}</a></li>
        </nav>
      </div>
    </header>
    <section class = "main" id= "0">
      <Home />
    </section>
    <div class="curva">
      <img src="../imgs/Curve.png" alt="">
    </div>
    <section class="about" id="1">
      <About />
    </section>
    <section class = "services" id="2">
      <Services />
    </section>
    <section class="location-sect" id = "3">
      <Location />
    </section>
    <section class="contact-sect" id = "4">
      <Contact />
    </section>
    <section class="foot-sect">
      <Foot />
    </section>
  </div>
</template>
<script>
  import Home from './components/Home.vue'
  import About from './components/About.vue'
  import Services from './components/Services.vue'
  import Location from './components/Location.vue'
  import Contact from './components/Contact.vue'
  import Foot from './components/Footer.vue'

  export default {
    name: 'app',
    data() {
      return {
        navItems: ['Inicio', 'Acerca', 'Servicios', 'Ubicación', 'Contacto']
      }
    },
    components: {
      Home,
      About,
      Services,
      Location,
      Contact,
      Foot
    }
  }

</script>
