<template>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"  v-for="tab in tabs" :key="tab.id">
      <h1 class="title-tag display-1">{{ tab.title }}</h1>
    </li>
  </ul>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  name: 'Tabs',
  props: {
    tabs: Array
  }
})
export default class Tabs extends Vue {
}
</script>

<style lang="sass" scoped>
@import '@/assets/_config.sass';

ul
    position: relative
    padding: 0
    margin: 0
    padding-inline: 40vw
    display: flex
    flex-direction: row
    margin-top: 4em
    right: 0 !important




.list-group-item
    position: relative
    height: 20em
    min-width: 6em
    background: $darkGray
    margin-inline: .2rem
    padding: 0

    &:hover
      min-width: 20em
      height: 24em
      margin-top: -1.4em
      margin-bottom: -2.8em
      transform: scale(1.1)
      margin-inline: 1rem
      transition-duration: 250ms
      transition-timing-function: ease-in-out
      z-index: 2
    
    .title-tag
      font-family: $secondaryFont
      -webkit-text-fill-color: transparent
      -webkit-text-stroke: .3px lighten(violet, 10%)
      position: absolute
      bottom: 5%
      left: 50%
      transform: translateX(-50%)
      white-space: nowrap
      visibility: hidden

    img
      width: 100%
      height: inherit
      object-fit: cover

</style>