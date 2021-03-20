<template>
  <div >
    <h1>Oficjalna <br/> strona <br/> Zespołu</h1>
  </div>
</template>

<script>
export default {
  name: 'MobHome',
  props: {
    msg: "Tarło"
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  }

div{
  background:black

;
 }

</style>
