<template>
  <div class="wrapper d-flex justify-content-between">
    <h1>{{ title }}</h1>
    <div class="hamburgerIcon" @mouseover="$emit('hovered-here')" @mouseleave="$emit('hovered-outta-here')" @click="toggleMenu"> <!--@click="toggleMenu"-->
      <div class="top"></div>
      <div class="bottom"></div>
    </div>
  </div>
  <router-link to="/" @mouseover="$emit('hovered-here')" @mouseleave="$emit('hovered-outta-here')">Halisi Studios</router-link>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";


@Options({
  name: "Header",
  props: {
    title: String,
  },
  methods: {
    toggleMenu() {
      console.log("Show the damn menu..");
    },
  },
  emits: ["hovered-here","hovered-outta-here"],
})
export default class Sidebar extends Vue {
  title!: string;
}
</script>

<style lang="sass" scoped>
@import '@/assets/_config.sass'

.wrapper
  margin-inline: 3em
  padding-top: .5em
  margin-bottom: -1em

a
  font-size: 1.8rem
  font-family: $secondaryFont
  // margin-top: 10em

h1
  font-family: $secondaryFont
  font-size: 2em
  z-index: 10

.hamburgerIcon
  margin-top: .8em
  z-index: 10

  div
    width: 2rem
    height: .21rem
    margin-block: .3em
    background-color: white
    border-radius: 25px

  div:nth-child(2)
    margin-left: .6rem
    width: 1.4rem
</style>

