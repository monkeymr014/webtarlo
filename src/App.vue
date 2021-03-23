<template>
  <div id="app" >
    <div id="nav">
      <button class="hamburger" aria-label="Menu"  v-bind:class='{"hamburger--active" : isActive}' v-on:click="isActive = !isActive"  > 
	      <span class="hamburger__container" tabindex="-1"> 
    	    <span class="hamburger__bars"></span> 
  	    </span> 
      </button>
      <h1>Tarło</h1>
      <div id="ytlogo" data-aos="fade-down-left"  >
        <a href="https://www.youtube.com/channel/UCAK10cFtn2SoFgZu-TsP1Tg" target="_blank" >
          <img class="heartbeat" alt="tarlo" src="./assets/media/yttop.png" />
        </a>
      </div>    
    </div>
    <transition name="slide-fade">
      <div v-if="isActive" class="box">
        <div class="box_content" >
          <router-link to="/#home"><span v-on:click="isActive = !isActive" >Home</span></router-link><hr/>
          <router-link to="/#info"><span v-on:click="isActive = !isActive" >O Nas</span></router-link><hr/>
          <router-link to="/#zespol"><span v-on:click="isActive = !isActive" >Zespół</span></router-link><hr/>
          <router-link to="/#concerts"><span v-on:click="isActive = !isActive" >Koncerty</span></router-link><hr/>
          <router-link to="/#music"><span v-on:click="isActive = !isActive" >Rzuć Uchem</span></router-link><hr/>
          <router-link to="/#gallery"><span v-on:click="isActive = !isActive" >Rzuć Okiem</span></router-link><hr/>
          <router-link to="/#contact"><span v-on:click="isActive = !isActive" >Kontakt</span></router-link><hr/>
          <router-link to="/#rider"><span v-on:click="isActive = !isActive" >Rider</span></router-link><hr/>
        </div>
        <div class="box_media">
          <a href="https://www.facebook.com/tarlorockband/" target="_blank" >
            <img class="box_media_item" alt="tarło" src="./assets/media/fb_b.png" />
          </a>
          <a href="https://www.youtube.com/channel/UCAK10cFtn2SoFgZu-TsP1Tg" target="_blank" >
            <img class="box_media_item" alt="tarło" src="./assets/media/yt_b.png" />
          </a>
          <a href="https://www.instagram.com/tarlo_rockband/" target="_blank" >
            <img class="box_media_item" alt="tarło" src="./assets/media/insta_b.png" />
          </a>
        </div>
      </div>
    </transition>
    <div id="content" >
      <div>
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import './styles.scss'

export default {
     data() {
    return{
      isActive: false
      }
    }
  }   

</script>


<style scoped lang="scss">

/* MOBILE */
h1 {
  text-align: center;
  font-size:60px;
  color: #424242;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  }

#ytlogo {
  position:fixed;
  left:80%;
  height: 7%;
  width: 16%;
  top:25px;
}

img, a {
  position:relative;
  width: 100%;
  height: 100%;
}

#app {
  padding: 0;
  margin: 0;
  height: 100%;
}

#nav {
  margin: 0;
  padding: 0;
  position: fixed;
  width: 100%;
  height:  96px;
  z-index: 99;
  background:#1F1F1F;
  top:0;
}

#content {  
  float: left;
  margin-top:96px;
  padding: 0;
  width: calc(100% - 0px) ;
    }

//Burger

.hamburger {
  margin: 36px;
  z-index:9999;
  padding: 0;
  border: 0;
  background-color: transparent;
  cursor: not-allowed;
  &:focus {
    & > .hamburger__container {
      box-shadow: 0 0 3px 2px #51a7e8;
    }
  }
}
.hamburger__container {
  display: flex;
  align-items: center;
  position: relative;
  width: 40px;
  text-decoration: none;
  
  height: 30px;
    z-index:9999;
    
}
.hamburger__bars {
  text-decoration: none;
  position: absolute;
  width: 40px;
  height: 3px;
  background-color:white;
  transition: transform 220ms ease-in-out;
  &:before, &:after {
    display: block;
    position: absolute;
    width: 40px;
    height: 3px;
    background-color:white;
    content: '';
  }
  &:before {
    top: -12px;
    transition: top 100ms 250ms ease-in, transform 220ms ease-in-out;
  }
  &:after {
    bottom: -12px;
    transition: bottom 100ms 250ms ease-in, 
      transform 220ms ease-in-out;
  }
}
.hamburger--active {
  .hamburger__bars {
    transform: rotate(225deg);
    transition: transform 220ms 120ms ease-in-out;
    &:before {
      top: 0;
      transition: top 100ms ease-out;
    }
    &:after {
      bottom: 0;
      transform: rotate(-90deg);
      transition: bottom 100ms ease-out, 
        transform 220ms 120ms ease-in-out;
    }
  }
}
.hamburger, .hamburger__container {
  &:focus {
    outline: none;
  }
}

//box
.box {
  background: black;
  position: fixed;
  top: 96px;
  transition: transform 0.4s;
  width: 100%;
  height: calc(100vh - 96px) ;
  z-index: 1;
  padding-top:6%;
  
}
.box_content a{
  top:0;
  height: 70%  ;
  padding:0;
  text-align: center;
  font-size:24px;
  color:white;
  text-decoration: none;
  display:list-item;
  cursor: not-allowed;
  margin:0;
 
}

.box hr {
  width: 80%;
  border: 0;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3); 
}

.box_media {
  position: absolute;
  text-align: center;
  clear: both;
  bottom:3vh;
  width:100%;
  height:auto;
  
}

.box_media_item {
  width:15%;
  height:auto;
  padding:2px;
  cursor: not-allowed;
   filter: saturate(10%) drop-shadow(   -0px 3px  5px white); 
  
 
}
//box animacja
.slide-fade-enter-active {
  transition: all .8s ease;
}
.slide-fade-leave-active {
  transition: all .6s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

//yt animacja
.heartbeat {
	-webkit-animation: heartbeat 5s ease-in-out infinite both;
	        animation: heartbeat 5s ease-in-out infinite both;
}

/* ----------------------------------------------
 * Generated by Animista on 2021-3-17 23:43:42
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation heartbeat
 * ----------------------------------------
 */
@-webkit-keyframes heartbeat {
  from {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: center center;
            transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  2% {
    -webkit-transform: scale(0.91);
            transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  4% {
    -webkit-transform: scale(0.98);
            transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  6% {
    -webkit-transform: scale(0.87);
            transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  8% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
}
@keyframes heartbeat {
  from {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: center center;
            transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  2% {
    -webkit-transform: scale(0.91);
            transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  4% {
    -webkit-transform: scale(0.98);
            transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  6% {
    -webkit-transform: scale(0.87);
            transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  8% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
}

</style>
