<template>
    <div class="location">
        <div class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1626.8980574358104!2d-73.1129981704048!3d7.119810670076908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e683fdf934d3f4f%3A0xe2b76c017a692061!2sEdificio+Tempo+I+I!5e0!3m2!1ses-419!2sco!4v1542936565090" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
        </div>
        <div class="box">
            <div class="content">
                <div class="tit">
                    <div class="icon"></div>
                    <h3 class="title">{{place}}</h3>        
                </div>
                <div class="info">
                    <label for="" class="address">{{location}}</label>
                    <label for="" class="phone">{{phone}}</label>
                </div>
                <hr class="line">
                <div class="schedule">
                    <p class="text" v-for="item in schedule">{{item.day}}<span class="time"> {{item.time}}</span></p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                place: 'Edificio Tempo II',
                location: 'Calle 43 # 29-13',
                phone: '2345678007',
                schedule: [
                    {
                        day: 'Lun - Vier',
                        time: '09:00 - 16:00'
                    },
                    {
                        day: 'Sab - Festi',
                        time: '10:00 - 13:00'
                    }
                ]
            }
        }
    }
</script>