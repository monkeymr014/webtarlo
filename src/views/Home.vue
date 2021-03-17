<template>
  <div>
    <div class="mobile" >
      <Mobile/>
    </div>
    <div class="deskop" >
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Mobile from '@/components/Mobile.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Mobile

    
  }
}
</script>
<style lang="scss">

</style>
