<template>
<div  >
  <div class="flex-container">
    <div class="flex-item">
      <div class="item" @mouseover="sebaRaid = true" @mouseleave="sebaRaid = false"  >
        <div class="parent_con" :class="{ box_active : sebaRaid }" >
          <img class="box_media_item" alt="tarło" src="../assets/crewfoto/seba.jpg" />
        </div>
         <transition name="fade">
          <div v-if="sebaRaid" class="text"     >
            <h3>Sebastian Pokojowy</h3><p>gitara basowa</p>
          </div>
        </transition>
      </div>
    </div>
    <div class="flex-item">
      <div class="item" @mouseover="rafalRaid = true" @mouseleave="rafalRaid = false"  >
          <div class="parent_con" :class="{ box_active : rafalRaid }" >
            <img class="box_media_item" alt="tarło" src="../assets/crewfoto/rafal.jpg" />
          </div>
          <transition name="fade">
            <div v-if="rafalRaid" class="text"     >
              <h3>Rafał Wielgosz</h3><p>gitara teksty</p>
            </div>
          </transition>
        </div>
    </div>
    <div class="flex-item">
      <div class="item" @mouseover="wojtekRaid = true" @mouseleave="wojtekRaid = false"  >
        <div class="parent_con" :class="{ box_active : wojtekRaid }" >
          <img class="box_media_item" alt="tarło" src="../assets/crewfoto/wojtek.jpg" />
        </div>
         <transition name="fade">
          <div v-if="wojtekRaid" class="text"     >
            <h3>Veddie Hare</h3><p>wokalista gitara teksty</p>
          </div>
        </transition>
      </div>
    </div>
    <div class="flex-item">
      <div class="item" @mouseover="bartekRaid = true" @mouseleave="bartekRaid = false"  >
          <div class="parent_con" :class="{ box_active : bartekRaid }" >
            <img class="box_media_item" alt="tarło" src="../assets/crewfoto/bartek.jpg" />
          </div>
          <transition name="fade">
            <div v-if="bartekRaid" class="text"     >
              <h3>Bartek Wielgosz</h3><p>gitara</p>
            </div>
          </transition>
        </div>
    </div>
    <div class="flex-item">
      <div class="item" @mouseover="michalRaid = true" @mouseleave="michalRaid = false"  >
        <div class="parent_con" :class="{ box_active : michalRaid }" >
          <img class="box_media_item" alt="tarło" src="../assets/crewfoto/michal.jpg" />
        </div>
         <transition name="fade">
          <div v-if="michalRaid" class="text"     >
            <h3>Michał Ruszkiewicz</h3><p>perkusja</p>
          </div>
        </transition>
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
name: 'DesCrew',
data() {
  return {
    wojtekRaid: false,
    rafalRaid:  false,
    bartekRaid: false,
    sebaRaid:   false,
    michalRaid: false,
    maciejRaid: false 
    }
  }
}
</script>

<style scoped lang="scss">

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
width: 100%;
margin:0;
padding:0;

filter:contrast(120%) grayscale(80%) ;
}
.item {
position: relative;

width:auto;
height:auto;
border:solid 1px;
border-color:black;
margin:0;
padding:0;
overflow: hidden;
z-index:3;
}
.text{
  position:absolute;
  background:none;
  text-align: center;
  color:red;
  top:50%;
  margin:0;
  padding:0;
  left: 50%;
  transform: translate(-50%, -50%);
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
