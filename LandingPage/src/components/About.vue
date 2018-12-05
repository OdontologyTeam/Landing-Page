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
                text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, amet facilis laudantium, culpa
                ipsa consectetur adipisci accusamus rerum tempore, ratione animi dolorem sapiente praesentium
                in veniam dolorum provident reiciendis eum.
                Veritatis rerum ab earum odit iste quo eveniet alias cum consequatur eum possimus non vero quam
                voluptatibus debitis optio neque cumque quas magni, iure provident odio est illo! Minus, quo.`
            }
        }
    }
</script>
