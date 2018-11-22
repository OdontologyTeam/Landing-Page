<template>
  <div class="contenedor">
    <div class="padre">
      <div class="izq">
        <h1>{{title}}</h1>
        <p>{{text}}</p>
        <button>{{button}}</button>
      </div>
      <div class="der">
        <img src="../imgs/dentist.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, ad! Quod expedita libero dicta
          numquam ducimus, error iure mollitia, aperiam eaque ipsa illo, molestiae maxime architecto!
          Vero, necessitatibus! Corrupti, qui?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, ad! Quod expedita libero dicta
          numquam ducimus, error
          iure mollitia, aperiam eaque ipsa illo, molestiae maxime architecto! Vero, necessitatibus!
          Corrupti, qui?`,
          button: 'Empezar ya'
      }
    }
  }

</script>
