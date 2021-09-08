<template>
  <div id="nav">
    <Sidebar />
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  </div>
  <router-view />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Sidebar from "@/components/Sidebar.vue";
import $ from "jquery";

import { gsap} from "@/assets/my-gsap";

@Options({
  components: {
    Sidebar,
  },
  data() {
    return {
      xVar: 0
    };
  },
  mounted () {
    var element = document.scrollingElement || document.documentElement;
    element.addEventListener('wheel', this.transformScroll);
    
    window.addEventListener("scroll", this.startScroll)

    gsap.to($("body"), {css: {overflow: "hidden"}})
  },
  methods: {
    transformScroll(event) {
      if (!event.deltaY) {
        return;
      }
      event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
      // event.preventDefault();
    },
    startScroll() {
      if (window.scrollX > 20) {
        gsap.to($('#sidebar'),{xPercent: -96, duration: 2, ease: 'easeInOut'})
        gsap.to($('.titleTag'),{xPercent: -6, duration: 1.5, ease: 'easeInOut', autoAlpha: 0})
        gsap.to($('.scroll-directive'),{autoAlpha: 0, duration: .4, ease: 'easeInOut'})
        // sort out this code for the scroll-spy later.
        gsap.to($('.ss2'),{ width: '95%', scrollTrigger: {
          trigger: '.dash',
          start: () => $('.dash').innerWidth,
          scrub: true,
        }})
      }
    },
  },

})
export default class Home extends Vue {}
</script>

<style lang="sass">
@import '@/assets/_config.sass'

*
  user-drag: none
  // user-select: none
  // -moz-user-select: none
  -webkit-user-drag: none
  // -webkit-user-select: none
  // -ms-user-select: none

::-webkit-scrollbar
  display: none

#app
  font-family: $primaryFont
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  background-color: black
  text-align: center
  color: $gray
  height: 100vh
  cursor: none
  overflow-y: hidden

img
  image-rendering: optimizeQuality

html, body
  margin: 0
  padding: 0
  overflow-y: hidden
  height: 100vh
  min-width: 100vw
  width: fit-content
  cursor: none

  a
    text-decoration: none
    color: $ashGray
    cursor: none

    &:hover
      color: $gray !important

    &.router-link-exact-active
      color: $gray
</style>
