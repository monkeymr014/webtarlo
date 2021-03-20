<template>
  <div>
    <h1>Zespół</h1>
    <div class="parent">
      <div class="div1">
        <div class="parent_con"></div>
      </div>
      <div class="div2">
        <div class="parent_con"></div>
      </div>
      <div class="div3">
        <div class="parent_con"></div>
      </div>
      <div class="div4">
        <div class="parent_con"></div>
      </div>
      <div class="div5">
        <div class="parent_con"></div>
      </div>
      <div class="div6">
        <div class="parent_con"></div>
      </div>
    </div> 
  </div>
</template>

<script>
export default {
  name: 'MobCrew',
 data() {
    return {
      wojtekRaid: false,
      rafalRaid:  false,
      bartekRaid: false,
      sebaRaid:   false,
      michalRaid: false

    };
 }
}
</script>

<style scoped lang="scss">

h1 {
  text-align: center;
  font-size:60px;
  color: white;
  margin: 0;
  position: relative;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  }

div {
  background:black;
  padding:0;
  color: white;

 }

.parent {  
  display: grid;
  justify-content: center;
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  margin-top:7px;
  padding-top:5%;
  
}

.div1 { grid-area: 1 / 1 / 2 / 2; }
.div2 { grid-area: 1 / 2 / 2 / 3; }
.div3 { grid-area: 2 / 2 / 3 / 3; }
.div4 { grid-area: 2 / 1 / 3 / 2; }
.div5 { grid-area: 3 / 1 / 4 / 2; }
.div6 { grid-area: 3 / 2 / 4 / 3; }

.div1 , .div2 ,.div3,.div4, .div5, .div6 {
  border:solid;
  border-color:red;
  justify-content: center ; 
}

.parent_con {
  width:23vh;
  height:19vh;
}
</style>
