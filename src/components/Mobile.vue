<template>
  <div  >
  
    <div id="home" data-aos="fade-up"   >
      <MobHome/>
    </div>
     <div id="info" data-aos="fade-up" >
      <MobInfo/>
    </div>
    <div id="zespol" data-aos="fade-up" >
      <MobCrew/>
    </div>
    <div id="concerts" data-aos="fade-up" >
      <MobConcerts/>
    </div>
    <div id="music" data-aos="fade-up" >
      <MobMusic/>
    </div>
     <div id="gallery" data-aos="fade-up" >
      <MobGallery/>
    </div>
     <div id="contact" data-aos="fade-up" >
      <MobContact/>
    </div>
    <div id="rider" data-aos="fade-up" >
      <MobRider/>
    </div>
   </div>
</template>

<script>
import MobHome from '@/components/Mob/MobHome.vue'
import MobInfo from '@/components/Mob/MobInfo.vue'
import MobCrew from '@/components/Mob/MobCrew.vue'
import MobConcerts from '@/components/Mob/MobConcerts.vue'
import MobMusic from '@/components/Mob/MobMusic.vue'
import MobGallery from '@/components/Mob/MobGallery.vue'
import MobContact from '@/components/Mob/MobContact.vue'
import MobRider from '@/components/Mob/MobRider.vue'
import 'aos/dist/aos.css'

export default {
  name: 'Mobile',
  props: {
    msg: String
  },
   components: {
    MobHome,
    MobInfo,
    MobCrew,
    MobConcerts,
    MobMusic,
    MobGallery,
    MobContact,
    MobRider

    
  }
}
</script>

<style scoped lang="scss">

div { 
  height: calc(100vh - 96px) ;
  margin:0;    
  padding: 0;
 }
 
</style>
