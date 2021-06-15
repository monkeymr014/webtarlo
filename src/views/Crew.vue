<template>
  <div class="block" >
   <h1>Zespół</h1>
    <div class="crew_box">
      <DesCrew/>
    </div>
  </div>

</template>
<script>
import DesCrew from '@/components/DesCrew.vue'

export default {
  name: 'Crew',
  components: { 
    DesCrew
  }
}
</script>
<style scoped lang="scss">
h1 {
  text-align: center;
  font-size:60px;
  color: #b30000;
  margin: 0;
  position: relative;
  top: 2%;

  }
.block {
position:relative;
min-height:calc(100vh - 6em);
background:black;
overflow:hidden;
}
.crew_box {
  margin-top:1%;
}


</style>