<template>
  <div>
    <h1>Zespół</h1>
    <div class="grid-container">
      <div @click="wojtekRaid = !wojtekRaid"  class="Wojtek">
      <h2> <transition name="slide-fade">
    <p v-if="wojtekRaid">hello</p>
  </transition>Wojtek</h2></div>

      <div @mouseover="rafalRaid = true" @mouseleave="rafalRaid = false" :class="{hovering: rafalRaid}"  class="Rafał"><h2>Rafał</h2></div>
      <div @mouseover="bartekRaid = true" @mouseleave="bartekRaid = false" :class="{hovering: bartekRaid}"  class="Bartek"><h2>Bartek</h2></div>
      <div @mouseover="sebaRaid = true" @mouseleave="sebaRaid = false" :class="{hovering: sebaRaid}"  class="Seba"><h2>Sebastian</h2></div>
      <div @mouseover="michalRaid = true" @mouseleave="michalRaid = false" :class="{hovering: michalRaid}" class="Michał"><h2>Michał</h2></div>
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

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
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
h2{
  text-align: center;
  font-size:18px;
  color: white;
  margin: 0;
  position: relative;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
}  

div {
  background:black;
  padding:0;
 }

 .grid-container {
  border:solid;
  position:relative;
  height:80%;  
  margin-top:30px;
  padding:0;
  display: grid;
  grid-template-columns: 1fr 1fr ;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 1px 1px;
  grid-template-areas:
    "Wojtek Rafał . ."
    "Bartek Seba . ."
    "Michał Maciej . .";
}

.Wojtek { grid-area: Wojtek; }

.Rafał { grid-area: Rafał; }

.Bartek { grid-area: Bartek; }

.Seba { grid-area: Seba; }

.Michał { grid-area: Michał; }

.Maciej { grid-area: Maciej; }

.Wojtek, .Rafał, .Bartek, .Seba, .Michał, .Maciej {
  height:90%;
  border:solid;
  border-color:green;
  margin:7px;
}
.full{
  border: 2px solid #676A7F;
  position:fixed;
  left:-7px;
  top: 89px;

  z-index:99;
  height:calc(100% - 100px);

  padding:0;
  width:99%;

}
</style>
