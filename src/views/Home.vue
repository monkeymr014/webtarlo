<template>
  <div>
    <div class="mobile" >
      <Mobile/>
    </div>
    <div class="deskop" >
     <DesHome/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Mobile from '@/components/Mobile.vue'
import DesHome from '@/components/DesHome.vue'

export default {
  name: 'Home',
  components: {
    Mobile,
    DesHome

    
  }
}
</script>
<style  lang="scss">

</style>
