<template>
  <div id="app">
    <section id="loading">
      <div class="lds-hourglass">
      </div>
    </section>
    <header class="responsive">
      <div class="barraFixed">
        <div class="izquierdo">LOGOTIPO</div>
        <div class="derecho"><i class="fas fa-bars"></i></div>
      </div>
      <div class="contenedor">
        <nav>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Acerca</a></li>
          <li><a href="#">Contacto</a></li>
        </nav>
      </div>
    </header>
    <header class = "normal">
      <div class="contenedor">
        <nav>
          <li v-for="item in navItems" :item="item"><a href="#">{{item}}</a></li>
        </nav>
      </div>
    </header>
    <section id="main">
      <Home />
    </section>
    <div class="curva">
      <img src="../imgs/Curve.png" alt="">
    </div>
    <section id="about">
      <About />
    </section>
    <section id="services">
      <Services />
    </section>
    <section class="location-sect">
      <Location />
    </section>
    <section class="contact-sect">
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
        navItems: ['Inicio', 'Acerca de', 'Servicios', 'Ubicación', 'Contacto']
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
