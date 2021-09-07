<template>
  <div class="line">
    <div class="tab"></div>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";

@Options({
  name: "Middledash",
})
export default class HelloWorld extends Vue {}
</script>

<style lang="sass" scoped>
@import '@/assets/_config.sass'

div
  position: absolute
  // width: 75vw
  top: 50%
  left: 34%
  transform: translate(0, -50%)

  width: 160vw
  height: .01rem
  background-image: linear-gradient(to right, $ashGray 0%, $ashGray 50%, transparent 50%)
  background-size: 10px .08px
  background-repeat: repeat-x

  .tab
    border-left: 2px solid $ashGray
    border-radius: 25px
    left: 0
    width: .08rem
    height: 1rem
    margin-top: -.05rem
</style>