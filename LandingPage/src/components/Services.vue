<template>
  <div class="contenedor">
    <h2>Conoce mis servicios</h2>
    <div class="padre" data-aos="zoom-in-down">
      <div class="caja" v-for="info in cardData">
        <div class="img">
            <img :src="'../../imgs/'+info.img" alt="">
        </div>
        <div class="titulo">
          <h3>{{info.title}}</h3>
          <p> {{info.content}} </p>
        </div>
        <button>Ver más</button>
      </div>
    </div>
    <button data-aos="zoom-out-up">Más servicios</button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
          cardData: [
              {
                  img:'molar.png',
                  title: 'Endodoncia',
                  content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non aspernatur, explicabo itaque
                            expedita perspiciatis
                            labore`
              },
              {
                  img:'implants.png',
                  title: 'General',
                  content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non aspernatur, explicabo itaque
                            expedita perspiciatis
                            labore`
              },
              {
                  img:'records.png',
                  title: 'Ortodoncia',
                  content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non aspernatur, explicabo itaque
                            expedita perspiciatis
                            labore`
              }
          ]
      }
    }
  }

</script>
