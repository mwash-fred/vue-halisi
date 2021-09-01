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
import { gsap } from "@/assets/my-gsap";

@Options({
  components: {
    Sidebar,
  },
  data() {
    return {
    };
  },
  // mounted () {
  //   const scrollContainer = $('#app');
  //   scrollContainer.addEventListener("wheel", (evt) => {
  //     evt.preventDefault();
  //     scrollContainer.scrollLeft += evt.deltaY;
  //   });
  // },
  // methods: {
  //   },

    
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
