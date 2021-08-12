<template>
  <div class="dash"></div>
</template>

<script>
export default {
  name: "Dash",
};
</script>

<style lang="sass" scoped>
@import '@/assets/_config.sass'

.dash
  margin-top: 3em
  margin-left: 35vw
    // padding-top: 5em
  // border-top: .1rem dashed gray

  // width: 75vw
  height: .1rem
  background-image: linear-gradient(to right, $gray 0%, $gray 50%, transparent 50%)
  background-size: 14px 1px
  background-repeat: repeat-x
</style>