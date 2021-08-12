<template>
  <div class="home">
    <Dash />
    <h1 class="titleTag">
      <div>Halisi Studios Halisi Studios Halisi Studios</div>
      <div>Halisi Studios Halisi Studios Halisi Studios</div>
    </h1>
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
    <Tabs />
    <div class="info">
      <p>Scroll Down</p>
      <i class="fa fa-angle-down" aria-hidden="true"></i>
    </div>
    <Scrollspy />
    <Footer />

  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Header from "@/components/Header.vue";
import Dash from "@/components/Dash.vue";
import Tabs from "@/components/Tabs.vue";
import Scrollspy from "@/components/Scrollspy.vue"
import Footer from "@/components/Footer.vue";


@Options({
  components: {
    Dash,
    Header,
    Tabs,
    HelloWorld,
    Scrollspy,
    Footer
  },
})
export default class Home extends Vue {}
</script>

<style lang="sass" scoped>
@import '@/assets/_config.sass'

.titleTag div
  font-family: $secondaryFont
  position: absolute
  transform: rotate(-90deg)
  white-space: nowrap
  font-size: 5rem
  width: 70vh
  margin-top: 3.4em
  animation: text-loop 20s linear infinite

@keyframes text-loop
  0%
    transform: rotate(-90deg) translateX(0%)
  100%
    transform: rotate(-90deg) translateX(-100%)

.info
  margin-top: 4.5em

  p
    margin: 0
    padding: 0
  

</style>
