<template>
  <div class="contenedor">
    <h2>Conoce mis servicios</h2>
    <div class="padre" data-aos="zoom-in-down">
      <div class="caja" v-for="info in mainServices">
        <div class="img">
            <img :src="'../../imgs/'+info.img" alt="">
        </div>
        <div class="titulo">
          <h3>{{info.title}}</h3>
          <p> {{info.content}} </p>
        </div>
        <button>Ver más</button>
      </div>
      <div class="caja" v-for="info in secondServices">
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
   
  </div>
</template>
<script>
  export default {
    data() {
      return {
          mainServices: [
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
          ],
          secondServices:[
            {
              img:'mouth.png',
              title: 'Rehabilitación Oral',
              content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non aspernatur, explicabo itaque
                            expedita perspiciatis
                            labore`
            },
            {
              img:'gum.png',
              title: 'Periodoncia',
              content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non aspernatur, explicabo itaque
                            expedita perspiciatis
                            labore`
            },
            {
              img:'tooth.png',
              title: 'Cirugía',
              content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non aspernatur, explicabo itaque
                            expedita perspiciatis
                            labore`
            }
          ]
      }
    }
  }

</script>
