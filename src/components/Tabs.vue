<template>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"  v-for="tab in tabs" :key="tab.id"></li>
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
    margin-left: 40vw
    display: flex
    flex-direction: row
    margin-top: 4em
    right: 0

.list-group-item
    height: 20em
    width: 6em
    background: $darkGray
    margin-inline: .2rem
    padding: 0

    img
      width: 100%
      height: inherit
      object-fit: cover

</style>