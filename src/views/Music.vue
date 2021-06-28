<template>
  <div class="block" id="about">
    <h1>Rzuć uchem</h1>
      <DesMusic/>
      <DesMusicFooter/>
  </div>
</template>
<script>
import DesMusic from '@/components/DesMusic.vue';

import DesMusicFooter from '@/components/DesMusicFooter.vue';

export default {
  name: 'Music',
  components: { 
  DesMusic,
  DesMusicFooter
  }
}
</script>
<style scoped lang="scss">

.block {
  position:relative;
  min-height:calc(100vh - 6em);
  background:black;
  overflow:hidden;
}
h1 {
  position: relative;
  top:20px;
  text-align: center;
  font-size:60px;
  color: #b30000;
  margin: 0;

  }

p {
 position: relative;
    margin-top: 3%;
    font-size: 1.5em;
    padding: 20%;
    padding-top: 0;
    padding-bottom: 0;
    text-align: center;
    color: #fff;
}

</style>
