<template>
  <div class="block" >
    <h1>Koncerty</h1>
    <div>
      <DesConcerts/>
      <DesMusicFooter/>
    </div>
  </div>
</template>
<script>

import DesConcerts from '@/components/DesConcerts.vue'
import DesMusicFooter from '@/components/DesMusicFooter.vue';


export default {
  name: 'Concerts',
  components: { 
    DesConcerts,
    DesMusicFooter
  }
}
</script>
<style scoped lang="scss">

h1 {
  position: relative;
  top: 30px;
  text-align: center;
  font-size: 60px;
  color: #b30000;
  margin: 0;
}

.block {
  position:relative;
  min-height:calc(100vh - 6em);
  background:black;
  overflow:hidden;
}


</style>