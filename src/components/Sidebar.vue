<template>
  <img alt="Vue logo" src="../assets/sidebar.png" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "Sidebar",
})
export default class Sidebar extends Vue {}
</script>

<style lang="sass" scoped>
@import '@/assets/_config.sass'

img
  height: 100%
  position: absolute
  left: 0
  top: 0
</style>