<template>
  <div id="app">
    <section id="loading">
      <div class="lds-hourglass">
      </div>
    </section>
      <div class="menu">
        <p><i class="fas fa-times-circle"></i></p>
        <nav>
          <li><a href="#">INICIO</a></li>
          <li><a href="#">ACERCA</a></li>
          <li><a href="#">SERVICIOS</a></li>
          <li><a href="#">UBICACIÓN</a></li>
          <li><a href="#">CONTACTO</a></li>
        </nav>
      </div>
    <header class="responsive">
      <div class="barraFixed">
        <div class="izquierdo">LOGOTIPO</div>
        <div class="derecho"><i class="fas fa-bars"></i></div>
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
