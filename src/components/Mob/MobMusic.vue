<template>
  <div class="res">
    <h1>Rzuć Uchem</h1>
    <div class="container" >
      <div class="album">
        <p>,,Prolog'' pierwsza EP zespołu.</p>
          <img class="album_img" alt="tarło" src="../../assets/okladka_small.jpg" />
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
      <div class="music_media_container" >
        <p>Posłuchaj sobie na</p>
          <img class="music_media" alt="tarło" src="../../assets/media/itunes.jpg" />
          <img class="music_media" alt="tarło" src="../../assets/media/spotify.jpg" />
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'MobMusic',

}
</script>

<style scoped lang="scss">

span{
  spanst-style:none;
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
}
.album_img{
  width: 160px;
  padding:0px;
  margin:8px;
}
.music_media{
  width: 120px;
  padding:0px;
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
  width:99%;
  clear: both;
  text-align: center;
  font-size:12px;
  margin-left:2px;
  margin-right:2px;
}
.music_media_container {
  position:relative;
  top:30px;
  margin:2px;

}
.person {
  color:red;
}
</style>
