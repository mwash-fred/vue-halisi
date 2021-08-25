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
  margin-top: 16vh
  margin-left: 35vw

  height: .1rem
  background-image: linear-gradient(to right, $ashGray 0%, $ashGray 50%, transparent 50%)
  background-size: 14px 1px
  background-repeat: repeat-x
</style>