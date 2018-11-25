<template>
  <div id="app">
    <section id="loading">
      <div class="lds-hourglass">

      </div>
    </section>
    <div class="contenedor">
      <nav>
        <li v-for="item in navItems" :item="item"><a href="#">{{item}}</a></li>
      </nav>
    </div>
    <section id="main">
      <Home />
    </section>
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
  </div>
</template>
<script>
  import Home from './components/Home.vue'
  import About from './components/About.vue'
  import Services from './components/Services.vue'
  import Location from './components/Location.vue'
  import Contact from './components/Contact.vue'

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
      Contact
    }
  }
</script>
