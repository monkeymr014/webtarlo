<template>
<div>
  <div class="container" >
      <div class="album">
        <p>,,Prolog'' pierwsza EP zespołu.</p>
          <img class="album_img" alt="tarło" src="../assets/okladka_small.jpg" />
      </div>
      <div class="porduction">
        <p>
          <span>Produkcja muzyczna: </span>
          <span class="person" >Maciek Gładysz, </span><br/>
          <span>Mix: </span>
          <span class="person" >Marcin Gajko, </span><br/>
          <span>Mastering:„Łysybył”, „Czy warto”: </span>
          <span class="person" >Michał Eprom Baj </span><br/>
          <span>Mastering: „List”: </span>
          <span class="person">Leszek Kamiński </span><br/>
          <span>Reaspanzacja nagrań perkusji: </span>
          <span class="person">Wojtek Olszak </span><br/>
          <span>Reaspanzacja nagrań gitar i vocalu: </span>
          <span class="person">Maciek Gładysz </span>
        </p>      
      </div>
    </div>
      
</div>
</template>

<script>

export default {
name: 'DesMusic',
}
</script>

<style scoped lang="scss">




span{
  spanst-style: none;
  margin:0;
  padding:0;
}
h1 {
  position:relative;
  text-align: center;
  font-size:60px;
  color: white;
  margin: 0px;
  top: 20px;
  }

div{

  background:black;
  color:white;
}
a {
  cursor: not-allowed;
}

.album {
  position: absolute;
  
  left: 18%;
  width: auto;
  font-size: 1.5em;

}


.album_img{

  width: 300px; 
  padding:0px;
  margin:8px;

}

.container {
  text-align: center;
  position:relative;
  color:white;
  font-size:15px;
  top:20px;
}

.porduction{
  position:relative;
 padding-top:5%;
  width:40%;
  clear: both;
  text-align: center;
  font-size:1.4em;
  margin-left:40%;
  margin-right:2px;
}

.person {
  color:red;
}
</style>
