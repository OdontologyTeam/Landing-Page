<template>
    <div id="app">
        <div class="contenedor">
            <nav>
                <li v-for="(item, index) in navItems" key="index" ><a href="#">{{item}}</a></li>               
            </nav>
        </div>
    </div>   
</template>
<script>
    export default{
        name: 'app',
        data(){
            return{
                navItems: ['Inicio', 'Acerca de', 'Servicios', 'Ubicación', 'Contacto']
            }
        }
    }
</script>