<template>
  <div class="wrapper header-wrap">
    <div class="d-block">
      <div class="d-flex layer1">
        <h1>{{ title }}</h1>

        <img
          id="audio-icon"
          alt="audio-icon"
          src="http://192.168.40.16:8080/src/assets/mute.svg"
          @click="toggleAudio"
        />

        <div class="hamburgerIcon" @click="toggleMenu">
          <div class="top"></div>
          <div class="bottom"></div>
        </div>
      </div>

      <div class="title">
        <router-link to="/">Halisi Studios</router-link>
      </div>
    </div>
    <Menu />
  </div>
</template>


<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { gsap } from "@/assets/my-gsap";
import $ from "jquery";

import { onMounted } from "vue-demi";

// import useSound from "vue-use-sound";

@Options({
  name: "Header",
  data() {
    return {
      rotation: 0,
      audio: false,
    };
  },

  props: {
    title: String,
  },
  mounted() {
    var audioElement = document.createElement("audio");
    audioElement.setAttribute(
      "src",
      "http://192.168.40.16:8080/src/assets/TheSea.mp3"
    );

    var audioState = this.audio;
    $("#audio-icon").click( function () {
      if ( audioState === false ) {
        audioElement.play();
        audioState = true;
        console.log('audio turned on')
      } else {
        audioElement.pause()
        audioState = false;
        console.log('audio not wet')
      }
    });
  },
  
  methods: {
    toggleMenu() {
      if (this.rotation == 0) {
        gsap.to($(".hamburgerIcon"), {
          rotate: "35",
          transformOrigin: "80% 40%",
          duration: 0.4,
        });
        gsap
          .timeline()
          .to($(".main-menu"), { autoAlpha: 1 })
          .to(
            $("#sidebar"),
            { xPercent: 0, duration: 0.5, ease: "easeInOut" },
            "<"
          )
          .fromTo(
            $("#closeTag"),
            { yPercent: 60, autoAlpha: 0 },
            { yPercent: 0, autoAlpha: 1, duration: 0.5, ease: "Power1.easeOut" }
          );

        this.rotation = 1;
      } else {
        gsap.to($(".hamburgerIcon"), {
          rotate: "0",
          transformOrigin: "80% center",
          duration: 0.4,
        });
        gsap.to($(".main-menu"), { autoAlpha: 0 });
        gsap.to($("#closeTag"), { yPercent: 60, autoAlpha: 0 });
        this.rotation = 0;
      }
    },
    toggleAudio() {
      if (this.audio === false) {
        this.audio = true;
        console.log("on");
        gsap.set($("#audio-icon"), {
          attr: { src: "http://192.168.40.16:8080/src/assets/volume.svg" },
        }); //Change link to image sources on deployment
       } else {
        this.audio = false;
        console.log("off");
        gsap.set($("#audio-icon"), { attr: { src: "http://192.168.40.16:8080/src/assets/mute.svg" } });
      }
    },
  },
})
export default class Sidebar extends Vue {
  title!: string;
}
</script>


<style lang="sass" scoped>
@import '@/assets/_config.sass'
*
  color: white !important
.wrapper
  // position: relative
  // top: 0
  // margin-inline: 3em
  // width: 100vw
  padding-top: .4em
  // margin-bottom: -1em

h1 //Page Title
  font-family: $secondaryFont
  font-size: 2em
  position: fixed
  z-index: 2

a //Home Control
  font-size: 1.8rem
  font-family: $secondaryFont
  position: fixed
  left: 50%
  transform: translate(-50%,0)
  margin-top: 4vh

.layer1
  margin-inline: 3em
  position: fixed-top

  img
    @extend .hamburgerIcon
    width: 1.4em
    margin-right: 10vw !important
    margin-top: 1.1vw !important

  .hamburgerIcon
    position: fixed
    margin-top: .8em
    right: 0
    z-index: 10
    margin-right: 3em

    div
      width: 2rem
      height: 4px
      margin-block: 6px
      background-color: white
      border-radius: 25px

    div:nth-child(2)
      margin-left: .6rem
      width: 1.4rem
</style>

