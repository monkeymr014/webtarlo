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

.crew_box {
  border:solid red;
  margin-top:1%;
}

.block {
  position:relative;
  height:100vh;
  weight:100%;
  background:black;
  color:white;
}
</style>