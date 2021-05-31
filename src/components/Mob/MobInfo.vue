<template>
  <div class="full" >
    <h1>O Nas</h1>
    <span>
    <p>Niektórych tematów nie można opowiedzieć w zwykły sposób - trzeba do tego użyć gitary, basu i perkusji i dopiero wtedy można wykrzyczeć do mikrofonu słowa!!! Zespół TARŁO to pięciu rockowo nastawionych do świata i ludzi instrumentalistów, z których jeden śpiewa. Część z nich pasja do muzyki połączyła już w czasach licealnych, kiedy grali razem w szkolnej kapeli. Kilka lat musiało upłynąć jednak aby życie dostarczyło (jak mówią) "odpowiedniej wrażliwości", a drzemiące oraz te nowe i nieopowiedziane historie mogły wreszcie zabrzmieć a często zaryczeć z gardła, jak to w rocku przystało!!! Inną kwestią jest to, że w pod koniec lat 90tych nasz młodszy kolega perkusista był jeszcze dzieckiem i trzeba było poczekać aż dorośnie i zacznie z nami grać!!! Zespół powstał w 2016 roku temu, aktualnie koncertuje gdzie się tylko da.</p>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Mobinfo',
}
</script>

<style scoped lang="scss">

h1 {
  text-align: center;
  font-size:60px;
  color: black;
  margin: 0;
  position: relative;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  }

p {
  margin-top:5%;
  padding:4%;
  text-align: center;
  
   @media (max-width: 321px){
    font-size:90%;
   }
   @media (min-width: 321px){
    font-size:100%;
   }
   @media (min-width: 370px){
    font-size:110%;
   }
    @media (min-width: 400px){
    font-size:125%;
    padding:4%;
   }
    @media (min-height: 800px){
    font-size:128%;
    padding:6%;
   }
 }

   
div {   
   background:white;
}

</style>
