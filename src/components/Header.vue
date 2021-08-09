<template>
  <div class="hamburgerIcon" @click="$emit('toggle-menu')">
    <div class="top"></div>
    <div class="bottom"></div>
  </div>
  <router-link class="text-center" to="/">Halisi Studios</router-link>
</template>

<script>
export default {
  name: "Header",
  emits: ["toggle-menu"],
};
</script>

<style lang="sass" scoped>
@import '@/assets/_config.sass'

a
    font-size: 2rem
    font-family: $secondaryFont

.hamburgerIcon
    position: absolute
    right: 3em
    z-index: 5
    // margin-top: -6em
    div
        width: 2.2rem
        height: .22rem
        margin: .4em
        background-color: white
        border-radius: 25px
    div:nth-child(2)
        margin-left: .8rem
        width: 1.8rem
</style>

