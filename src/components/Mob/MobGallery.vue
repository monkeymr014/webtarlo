<template>
  <div class="full">
    <h1>Rzuć Okiem</h1>
    <div class="container" >
      <div class="box" v-on:click="foto = true" >
        <h2>Zdjęcia</h2 >
      </div>
      <transition name="fade">
        <div v-if="foto" class="foto" >
          <router-link to="/#gallery">
            <div class="outer" v-on:click="foto = false" >
              <div class="inner">
                <label>Back</label>
              </div>
            </div>
          </router-link>
          <div class="foto_box">
          </div>
        </div>
      </transition>
      <div class="box" v-on:click="video = true" >
        <h2>Filmy</h2>
      </div>
      <transition name="fade">
        <div v-if="foto" class="video" >
          <router-link to="/#gallery">
            <div class="outer" v-on:click="video = false" >
              <div class="inner">
                <label>Basck</label>
              </div>
            </div>
          </router-link>
          <div class="video_box">
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobGallery',
   data() {
    return{
    foto: false,
    video: false
    }
   }
}
</script>

<style scoped lang="scss">


h1 {
  position:relative;
  text-align: center;
  font-size:60px;
  color: black;
  margin: 0px;
  margin-top: 20px;
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
.container {
  position:relative;
  margin-top:19%;
}

.box{
  background:#1F1F1F;
  height: 150px;
  margin:30px;
  border: 1px solid black;
  border-radius: 30px; ;
}

.foto  {
  background: black;
  position: fixed;
  top: 96px;
  width: 100%;
  height: calc(100vh - 96px) ;
  z-index: 1;
  color:red;
}
.video  {
  background: black;
  position: fixed;
  top: 96px;
  width: 100%;
  height: calc(100vh - 96px) ;
  z-index: 1;
  color:red;
}
.foto_box {
  border:solid red;
  position:fixed;
  width: 100%;
  top: 156px;
  height: calc(100vh - 96px) ;
  background:black;
  overflow:scroll;


}
.video_box {
  border:solid red;
  position:fixed;
  width: 100%;
  top: 156px;
  height: calc(100vh - 96px) ;
  background:black;
  overflow:scroll;


}

//close

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.outer {
  position: fixed;
  left:85%;
  width: 40px;
  cursor: not-allowed;
  background:black;
  z-index:1;
}

.inner {
  width: inherit;
  text-align: center;
  background:black;
}

label { 
  font-size: .8em; 
  line-height: 4em;
  text-transform: uppercase;
  color: red;
  transition: all .3s ease-in;
  opacity: 0;
  cursor: not-allowed;
}

.inner:before, .inner:after {
  position: absolute;
  content: '';
  height: 3px;
  width: inherit;
  background: red;
  left: 0;
  transition: all .3s ease-in;
}

.inner:before {
  top: 50%; 
  transform: rotate(45deg);  
}

.inner:after {  
  bottom: 50%;
  transform: rotate(-45deg);  
}

.outer:hover label {
  opacity: 1;
}

.outer:hover .inner:before,
.outer:hover .inner:after {
  transform: rotate(0);
}

.outer:hover .inner:before {
  top: 1px;
}

.outer:hover .inner:after {
  bottom: 0;
}

//animacja 
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to  {
  opacity: 4s;
}

 </style>
