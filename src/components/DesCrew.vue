<template>
  <div class="box" >
    <div class="flex-container">
   <div class="flex-item">Item</div>
   <div class="flex-item">Item</div>
   <div class="flex-item">Item</div>
   <div class="flex-item">Item</div>
   <div class="flex-item">Item</div>
</div>
 </div>
</template>

<script>


export default {
  name: 'DesCrew',
  
}
</script>

<style scoped lang="scss">
div {
  border: solid red;
}
.flex-container{
display:-webkit-flex;
display:flex;
-webkit-justify-content:center;
justify-content:center;
}

</style>
