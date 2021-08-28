<template>
  <div id="nav">
    <!-- <Mouse /> -->
    <Sidebar />
    <!-- <Menu /> -->
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <Footer />
  </div>
  <router-view />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Sidebar from "@/components/Sidebar.vue";

@Options({
  components: {
    Sidebar,
  },
  data() {
    return {
    };
  },
  // methods: {
  //   },

    
})
export default class Home extends Vue {}
</script>

<style lang="sass">
@import '@/assets/_config.sass'

*
  user-drag: none
  user-select: none
  -moz-user-select: none
  -webkit-user-drag: none
  -webkit-user-select: none
  -ms-user-select: none

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
