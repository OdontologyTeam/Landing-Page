<template>
    <div id="app">
        <div class="contenedor">
            <nav>
                <li v-for="(item, index) in navItems" key="index" :item="item"><a href="#">{{item}}</a></li>               
            </nav>
        </div>
        <section id="main">
            <Home/> 
        </section>
        <section id="about">
            <About/>
        </section>
        <section id="services">
            
        </section>
    </div>   
</template>
<script>
    import Home from './components/Home.vue'
    import About from './components/About.vue'
    export default{
        name: 'app',
        data(){
            return{
                navItems: ['Inicio', 'Acerca de', 'Servicios', 'Ubicación', 'Contacto']
            }
        },
        components:{
            Home,
            About
        }
    }
</script>