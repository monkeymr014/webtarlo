<template>
  <div>
    <h1>Rzuć Uchem</h1>
    <audio src="../../assets/a.mp3" type='' >Treść alternatywna</audio>
</div>
</template>

<script>
import { KinesisContainer, KinesisElement} from 'vue-kinesis'


export default {
  name: 'MobMusic',

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



</style>
