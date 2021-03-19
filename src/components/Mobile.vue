<template>
  <div>
    <div id="home">
      <MobHome/>
    </div>
     <div id="info">
      <MobInfo/>
    </div>
    <div id="zespol">
      <MobCrew/>
    </div>
    <div id="concerts">
      <MobConcerts/>
    </div>
    <div id="music">
      <MobMusic/>
    </div>
     <div id="gallery">
      <MobGallery/>
    </div>
     <div id="contact">
      <MobContact/>
    </div>
    <div id="rider">
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
