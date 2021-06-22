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
      <div class="music_media_container" >
        <p>Posłuchaj sobie na</p>
          <a href="https://music.apple.com/pl/album/prolog-single/1484447071?app=music&ign-mpt=uo%3D4" target="_blank" >
            <img class="music_media" alt="tarło" src="../assets/media/itunes.jpg" />
          </a>
          <a href="ttps://open.spotify.com/album/6Rt14PX4Mo4q4qqGbFe624" target="_blank" >
           <img class="music_media" alt="tarło" src="../assets/media/spotify.jpg" />
           </a>
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
 padding-top:5%;
  width:40%;
  clear: both;
  text-align: center;
  font-size:1.4em;
  margin-left:40%;
  margin-right:2px;
}
.music_media_container {
  position:absolute;
  width: 100%;
  text-align: center;
  margin:auto;
  clear: both;
  bottom:20px;
  padding:0;

}
.person {
  color:red;
}
</style>
