<template>
    <div class="footer">
        <div class="left">
            <p class="text">&copy; {{rights}}</p>
        </div>
        <div class="right">
            <p class="text">{{owner}}</p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            owner: 'Doctora María Alejandra Manosalva',
            rights:'Todos los derechos reservados '
        }
    }
}
</script>
