<template>
  <div id="nav">
    <Mouse />
    <!-- <Menu /> -->
    <Header @toggle-menu="toggleMenu" />
    <Sidebar />
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  </div>
  <router-view />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Mouse from "@/components/Mouse.vue";
import Menu from "@/views/Menu.vue";
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";

@Options({
  components: {
    Mouse,
    Menu,
    Header,
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
  padding-top: 2em

html, body
  background-color: black !important
  margin: 0
  padding: 0
  overflow-y: hidden
  height: 100vh
  width: 100vw

  a
    text-decoration: none
    color: red

    &.router-link-exact-active
      color: $gray

// router-link
//   margin-top: 2em
</style>
