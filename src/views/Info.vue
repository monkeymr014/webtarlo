<template>
  <div class="block" >
  <h1>O Nas</h1>
    <span>
    <p>Niektórych tematów nie można opowiedzieć w zwykły sposób - trzeba do tego użyć gitary, basu i perkusji i dopiero wtedy można wykrzyczeć do mikrofonu słowa!!! Zespół TARŁO to pięciu rockowo nastawionych do świata i ludzi instrumentalistów, z których jeden śpiewa. Część z nich pasja do muzyki połączyła już w czasach licealnych, kiedy grali razem w szkolnej kapeli. Kilka lat musiało upłynąć jednak aby życie dostarczyło (jak mówią) "odpowiedniej wrażliwości", a drzemiące oraz te nowe i nieopowiedziane historie mogły wreszcie zabrzmieć a często zaryczeć z gardła, jak to w rocku przystało!!! Inną kwestią jest to, że w pod koniec lat 90tych nasz młodszy kolega perkusista był jeszcze dzieckiem i trzeba było poczekać aż dorośnie i zacznie z nami grać!!! Zespół powstał w 2016 roku temu, aktualnie koncertuje gdzie się tylko da.</p>
    </span>
    <DesMusicFooter/>
  </div>
</template>
<script>
import DesMusicFooter from '@/components/DesMusicFooter.vue';

export default {
  name: 'Info',
  components: { 
    DesMusicFooter
  }
  
}


</script>
<style scoped lang="scss">
.block {
  position:relative;
  min-height:calc(100vh - 6em);
  background:black;
  overflow:hidden;
}
h1 {
  position: relative;
  top:20px;
  text-align: center;
  font-size:60px;
  color: #b30000;
  margin: 0;

  }

p {
 position: relative;
    margin-top: 3%;
    font-size: 1.5em;
    padding: 20%;
    padding-top: 0;
    padding-bottom: 0;
    text-align: center;
    color: #fff;
}

</style>