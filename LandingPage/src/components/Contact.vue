<template>
    <div class="contact">
        <div class="box-father">
            <div class="title">
                <h2>{{title}}</h2>
            </div>
            <div class="contact-box">
                <form @submit.prevent method="get"> 
                    <input placeholder="Nombre" required type="text" class="user">
                    <input placeholder="Email" required type="email" class="user">
                    <textarea placeholder="Deja tú mensaje" required class="message" name="" id="" cols="30" rows="10"></textarea>
                    <div class="btn-box">
                        <button type="submit" class="send-btn">{{button}}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                title: 'Contactame',
                button: 'Enviar'
            }
        },
        methods:{
            submit: function(){
                console.log('Prevent works!')
            }
        }
    }
</script>
