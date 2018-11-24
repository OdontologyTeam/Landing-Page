<template>
    <div class="contact">
        <div class="box-father">
            <div class="title">{{title}}</div>
            <div class="contact-box">
                <form action="">
                    <input placeholder="Nombre" type="text" class="user-name">
                    <input placeholder="Email" type="email" class="user-email">
                    <textarea placeholder="Deja tú mensaje" class="message" name="" id="" cols="30" rows="10"></textarea>
                    <button type="submit" class="send-btn">{{button}}</button>
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
        }
    }
</script>
