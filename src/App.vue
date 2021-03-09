<template>
  <div id="app">
    <div id="nav">
      <Bubble @openMenu="handleOpenMenu" @closeMenu="handleCloseMenu"  :closeOnNavigation="true"  >
        <router-link to="/">Home</router-link> |
      </Bubble>
    </div>
    <div id="content"  >
      <div class="block" id="blu" >
        <router-view/>
      </div>

    </div>
  </div>
</template>

<script>
import { Bubble } from 'vue-burger-menu'  

export default {
  components: {
    Bubble 
  }
}
</script>


<style lang="scss">

/* MOBILE */
#blue{
  background-color:rgb(0, 119, 255);
}
#red{
  background-color:rgb(162, 0, 255);
}
#app{
      padding: 0;
      margin: 0;
      height: 100%;
    }

#nav {
      margin: 0;
      padding: 0;
      position: fixed;
      background-color:red;
      width: 100%;
      height:  96px;
      z-index: 99;
      top:0;
    }

#content {
      float: left;
      margin-top:96px;
      padding: 0;
      width: calc(100% - 8px) ;
      border:solid;
      border-color:rebeccapurple;
      background-color: rosybrown;
    }
  .block {
  height:  calc(100vh - 96px) ;
   border:solid;
      border-color:blue;
      margin:0;
      padding-top: 0;
  }

.bm-burger-button {
      position: fixed;
      width: 36px;
      height: 30px;
      left: 36px;
      top: 36px;
      cursor: pointer;
    }
    .bm-burger-bars {
      background-color: #373a47;
    }
    .line-style {
      position: absolute;
      height: 20%;
      left: 0;
      right: 0;
    }
    .cross-style {
      position: absolute;
      top: 12px;
      right: 2px;
      cursor: pointer;
    }
    .bm-cross {
      background: #bdc3c7;
    }
    .bm-cross-button {
      height: 24px;
      width: 24px;
    }
    .bm-menu {
      height: 100%; /* 100% Full-height */
      width: 0; /* 0 width - change this with JavaScript */
      position: fixed; /* Stay in place */
      z-index: 1000; /* Stay on top */
      top: 0;
      left: 0;
      background-color: rgb(63, 63, 65); /* Black*/
      overflow-x: hidden; /* Disable horizontal scroll */
      padding-top: 60px; /* Place content 60px from the top */
      transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
    }

    .bm-overlay {
      background: rgba(0, 0, 0, 0.3);
    }
    .bm-item-list {
      color: #b8b7ad;
      margin-left: 10%;
      font-size: 20px;
    }
    .bm-item-list > * {
      display: flex;
      text-decoration: none;
      padding: 0.7em;
    }
    .bm-item-list > * > span {
      margin-left: 10px;
      font-weight: 700;
      color: white;
    }





</style>
