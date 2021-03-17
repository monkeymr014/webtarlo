<template>
  <div  >
    <div id="home" data-aos="fade-up"   >
      <MobHome/>
    </div>
     <div id="info" data-aos="fade-up" >
      <MobInfo/>
    </div>
    <div id="zespol"  data-aos="fade-up" >
      <MobCrew/>
    </div>
    <div id="c" >
      <p>sss</p>
    </div>
   </div>
</template>

<script>
import MobHome from '@/components/MobHome.vue'
import MobInfo from '@/components/MobInfo.vue'
import MobCrew from '@/components/MobCrew.vue'
import 'aos/dist/aos.css'

export default {
  name: 'Mobile',
  props: {
    msg: String
  },
   components: {
    MobHome,
    MobInfo,
    MobCrew
    
  }
}
</script>

<style  lang="scss">

 div{ 
    height: calc(100vh - 96px) ;
    margin:0;    
    padding: 0;
 }
</style>
