<template>
  <div class="contenedor">
    <h2>Conoce mis servicios</h2>
    <div class="padre" data-aos="zoom-in-down">
      <div class="caja" v-for="info in mainServices">
        <div class="img">
            <img :src="'../../imgs/'+info.img" :alt="info.alt">
        </div>
        <div class="titulo">
          <h3>{{info.title}}</h3>
          <p> {{info.content}} </p>
        </div>
        <button>Ver más</button>
      </div>
      <div class="caja" v-for="info in secondServices">
        <div class="img">
            <img :src="'../../imgs/'+info.img" :alt="info.alt">
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
                  alt: 'Endodoncia',
                  title: 'Endodoncia',
                  content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non aspernatur, explicabo itaque
                            expedita perspiciatis
                            labore`
              },
              {
                  img:'implants.png',
                  alt: 'Odontología General',
                  title: 'General',
                  content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non aspernatur, explicabo itaque
                            expedita perspiciatis
                            labore`
              },
              {
                  img:'records.png',
                  alt: 'Ortodoncia',
                  title: 'Ortodoncia',
                  content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non aspernatur, explicabo itaque
                            expedita perspiciatis
                            labore`
              }
          ],
          secondServices:[
            {
              img:'mouth.png',
              alt: 'Rehabilitación Oral',
              title: 'Rehabilitación Oral',
              content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non aspernatur, explicabo itaque
                            expedita perspiciatis
                            labore`
            },
            {
              img:'gum.png',
              alt: 'Periodoncia',
              title: 'Periodoncia',
              content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non aspernatur, explicabo itaque
                            expedita perspiciatis
                            labore`
            },
            {
              img:'tooth.png',
              alt: 'Cirugía',
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
