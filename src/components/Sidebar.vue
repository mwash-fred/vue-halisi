<template>
  <img id="sidebar" alt="sidebar-logo" src="../assets/sidebar.png" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "Sidebar",
  mounted () {
    // window.addEventListener("scroll", this.startScroll)
  },
  computed: {
    //
  },
})
export default class Sidebar extends Vue {}
</script>

<style lang="sass" scoped>
@import '@/assets/_config.sass'

img
  height: 100%
  position: fixed
  left: 0
  top: 0
  margin: 0
  padding: 0
  z-index: 1
</style>