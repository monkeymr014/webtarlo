<template>
<div>
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
name: 'DesMusicFooter',
}
</script>

<style scoped lang="scss">

div{
  position:fixed;
  background:black;
  color:white;
  overflow: hidden;
  z-index: 99;
    bottom:0px;

}
a {
  cursor: not-allowed;
}

.music_media{
  width: 120px;
  padding:0px;
}

.music_media_container {
  width: 100%;
  text-align: center;
  margin:auto;
  clear: both;
  bottom:0px;
  padding-bottom:20px;

}
</style>
