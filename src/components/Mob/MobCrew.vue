<template>
  <div>
    <h1>Zespół</h1>
    <div class="container">
      <div class="item">
        <div class="parent_con" v-on:click="wojtekRaid = !wojtekRaid, rafalRaid = false, bartekRaid = false , sebaRaid = false, michalRaid = false, maciejRaid = false " :class="{ box_active : wojtekRaid }" >
          <img class="box_media_item" alt="tarło" src="../../assets/crewfoto/wojtek.jpg" />
        </div>
        <transition name="fade">
          <div v-if="wojtekRaid" class="text" >
            <h3>Wojtek Zając</h3><p>wokalista gitara teksty</p>
          </div>
        </transition>
      </div>
      <div class="item">
        <div class="parent_con" v-on:click="rafalRaid = !rafalRaid, wojtekRaid = false, bartekRaid = false , sebaRaid = false, michalRaid = false, maciejRaid = false" :class="{ box_active : rafalRaid }">
          <img class="box_media_item" alt="tarło" src="../../assets/crewfoto/rafal.jpg" />
        </div>
        <transition name="fade">
          <div v-if="rafalRaid" class="text" >
            <h3>Rafał Wielgosz</h3><p>gitara teksty</p>
          </div>
        </transition>
      </div>
      <div class="item">
        <div class="parent_con" v-on:click="bartekRaid = !bartekRaid, rafalRaid = false, wojtekRaid = false , sebaRaid = false, michalRaid = false, maciejRaid = false" :class="{ box_active : bartekRaid }">
          <img class="box_media_item" alt="tarło" src="../../assets/crewfoto/bartek.jpg" />
        </div>
        <transition name="fade">
          <div v-if="bartekRaid" class="text" >
            <h3>Bartek Wielgosz</h3><p>gitara</p>
          </div>
        </transition>
      </div>
      <div class="item">
        <div class="parent_con" v-on:click="sebaRaid = !sebaRaid, rafalRaid = false, bartekRaid = false , wojtekRaid = false, michalRaid = false, maciejRaid = false" :class="{ box_active : sebaRaid }">
          <img class="box_media_item" alt="tarło" src="../../assets/crewfoto/seba.jpg" />
        </div>
        <transition name="fade">
          <div v-if="sebaRaid" class="text" >
            <h3>Sebastian Pokojowy</h3><p>gitara basowa</p>
          </div>
        </transition>
      </div>
      <div class="item">
        <div class="parent_con" v-on:click="michalRaid = !michalRaid, rafalRaid = false, bartekRaid = false , sebaRaid = false, wojtekRaid = false, maciejRaid = false" :class="{ box_active : michalRaid }">
          <img class="box_media_item" alt="tarło" src="../../assets/crewfoto/michal.jpg" />
        </div>
        <transition name="fade">
          <div v-if="michalRaid" class="text" >
            <h3>Michał Ruszkiewicz</h3><p>perkusja</p>
          </div>
        </transition>
      </div>
      <div class="item">
        <div class="parent_con" v-on:click="maciejRaid = !maciejRaid, rafalRaid = false, bartekRaid = false , sebaRaid = false, michalRaid = false, wojtekRaid = false" :class="{ box_active : maciejRaid }">
          <img class="box_media_item" alt="tarło" src="../../assets/crewfoto/bartek.jpg" />
        </div>
        <transition name="fade">
          <div v-if="maciejRaid" class="text" >
            <h3>Maciej Gładysz</h3><p>producent muzyczny</p>
          </div>
        </transition>
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
      michalRaid: false,
      maciejRaid: false
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
.text{
    position:absolute;
    background:none;
     font-size:18px;
  color:red;
  top:50%;
  margin:0;
  padding:0;
  left: 50%;
  transform: translate(-50%, -50%);
    

}

h3{
  font-size:24px;
  margin:0;
  padding:2px;
}
p {
  font-size:20px;
  margin:0;
}
img {
  left:0;
  width: 100%;
  height: auto;
  position: relative; 
  filter:contrast(120%) grayscale(80%) ;

}
div {
  background:black;
  padding:0;
  color: white;
  position:relative;
  text-align: center;
 }

.container {
  position:absolute;
  clear: both;
  bottom:0;
  height:80%;
  width:100%;
  display: grid;
  grid-template-columns: 1fr 50%;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  justify-items: stretch;
   align-items: stretch;
}



.item {
  position: relative;
  border:solid 1px;
  border-color:black;
  margin:0;
  padding:0;
  z-index:1;
    overflow: hidden;
}

.box_active {
filter: blur(5px) brightness(0.6);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
