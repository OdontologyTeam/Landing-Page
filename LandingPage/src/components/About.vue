<template>
  <div class="contenedor">
    <div class="padre" data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
      <div class="izq">
        <h2>{{title}}</h2>
        <p>{{text}}</p> 
      </div>
      <div class="der">
        <img :src="'../imgs/'+img" alt="">
      </div>
    </div>
  </div>
</template>
<script>
    export default{
      data(){
        return{
                img:'portrait.jpg',
                title:'Acerca de mí',
                text: `Especialista en endodoncia capacitada para prevenir, diagnosticar, pronosticar y tratar las anomalías pulpare, 
                perirradiculares y trauma dento alveolar en pacientes pediátricos, adultos y geriátricos. Preparada para realizar trabajo
                interdisciplinario con las demás especialidades de la odontología,
                utilizando tecnología de punta. Capacitada para realizar actividades
                investigativas teniendo como principios las guías científicas y metodológias
                para aportar nuevos conocimientos a la especialidad.`
            }
        }
    }
</script>
