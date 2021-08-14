<template>
  <div id="nav">
    <Mouse />
    <Sidebar />
    <Menu />
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  </div>
  <router-view />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Mouse from "@/components/Mouse.vue";
import Menu from "@/views/Menu.vue";
import Sidebar from "@/components/Sidebar.vue";

@Options({
  components: {
    Mouse,
    Menu,
    Sidebar,
  },
  methods: {
    toggleMenu() {
      console.log("Show the damn menu..");
    },
  },
})
export default class Home extends Vue {}
</script>

<style lang="sass">
@import '@/assets/_config.sass'
// *
  user-drag: none
  user-select: none
  -moz-user-select: none
  -webkit-user-drag: none
  -webkit-user-select: none
  -ms-user-select: none

#app
  font-family: $primaryFont
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  background-color: black
  text-align: center
  color: $gray
  height: 100vh

img
  image-rendering: optimizeQuality

html, body
  margin: 0
  padding: 0
  overflow-y: hidden
  height: 100vh
  width: 100vw

  a
    text-decoration: none
    color: $ashGray
    &:hover
      color: $gray !important

    &.router-link-exact-active
      color: $gray

</style>
