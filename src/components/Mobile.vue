<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>aaa</p>
     <p>aaa</p>
   </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Mobile',
  props: {
    msg: String
  },
   components: {
    HelloWorld
    
  }
}
</script>


<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
