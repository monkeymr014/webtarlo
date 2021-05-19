<template>
  <div  class="full">
    <h1>Rider</h1>
    <div class="box"  >
      <h2>Pobierz Rider</h2 >
    </div>
    <div class="foter" >
      <div class="foter_text">
        Web developer: Michał Ruszkiewicz
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobRider',
}
</script>

<style scoped lang="scss">

h1 {
  position:relative;
  text-align: center;
  font-size:60px;
  color: black;
  margin: 0px;
  top: 20px;
  }
h2 {
  position:relative;
  text-align: center;
  font-size:40px;
  color: white;
  margin: 0px;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
  }

div {
  background:white;
  padding:0;
 }

.box{
  background:#1F1F1F;
  height: 150px;
  margin:35px;
  border: 1px solid black;
  border-radius: 30px; ;
}

.foter {
  color:white;
  position:absolute;
  width:100%;
  height:16%;
  text-align: center;
  margin:0;
  clear: both;
  bottom:0px;
  padding:0;
  background:black;
}

.foter_text {
  margin:10%;
  background:black;
  font-size:15px;
}
 </style>
