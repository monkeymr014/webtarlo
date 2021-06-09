<template>
  <div class="block" >
    <div class="flex-container">
      <div class="flex-item">
        <div class="item" >
          <img class="box_media_item" alt="tarło" src="../assets/crewfoto/wojtek.jpg" />
        </div>
  </div>
   <div class="flex-item"><div class="item" >
          <img class="box_media_item" alt="tarło" src="../assets/crewfoto/wojtek.jpg" />
        </div></div>
   <div class="flex-item"><div class="item" >
          <img class="box_media_item" alt="tarło" src="../assets/crewfoto/wojtek.jpg" />
        </div></div>
   <div class="flex-item"><div class="item" >
          <img class="box_media_item" alt="tarło" src="../assets/crewfoto/wojtek.jpg" />
        </div></div>
   <div class="flex-item"><div class="item" >
          <img class="box_media_item" alt="tarło" src="../assets/crewfoto/wojtek.jpg" />
        </div></div>
</div>
 </div>
</template>

<script>


export default {
  name: 'DesCrew',
  
}
</script>

<style scoped lang="scss">
.block {
  position:relative;
  min-height:calc(100vh - 6em);
  background:black;
  overflow:hidden;
}
.flex-container{
display:-webkit-flex;
display:flex;
-webkit-justify-content:center;
justify-content:center;
position:relative;
padding:10px;

}

img {
  position: relative; 
  left:0;
  height:auto;
  width: 20%;
  margin:0;
  padding:0;
  
  filter:contrast(120%) grayscale(80%) ;
}
.item {
  position: relative;
  width:auto;
  height:auto;
  border:solid 1px;
  border-color:red;
  margin:0;
  padding:0;
  overflow: hidden;
}
</style>
