<template>
  <div class="wrapper d-flex justify-content-between">
    <h1>{{ title }}</h1>
    <div class="hamburgerIcon" @click="$emit('toggle-menu')">
      <div class="top"></div>
      <div class="bottom"></div>
    </div>
  </div>
  <router-link class="text-center" to="/">Halisi Studios</router-link>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "Header",
  props: {
    title: String,
  },
  emits: ["toggle-menu"],
})
export default class Sidebar extends Vue {
  title!: string;
}
</script>

<style lang="sass" scoped>
@import '@/assets/_config.sass'

.text-center

.wrapper
  margin-inline: 3em
  padding-top: .5em
  margin-bottom: -1em

a
  font-size: 1.8rem
  font-family: $secondaryFont
  margin-top: 10em

h1
  font-family: $secondaryFont
  font-size: 2em
  z-index: 2

.hamburgerIcon
  margin-top: .8em

  div
    width: 2.2rem
    height: .2rem
    margin-block: .4em
    background-color: white
    border-radius: 25px

  div:nth-child(2)
    margin-left: .6rem
    width: 1.6rem
</style>

