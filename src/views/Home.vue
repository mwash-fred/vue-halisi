<template>
  <div class="home" ref="home">
    <!-- <Menu /> -->
    <Mouse :style="{ '--my-var': myVar }" />
    <Header
      title="Home"
      @hovered-here="mouseOverHere"
      @hovered-outta-here="mouseOuttaHere"
      
    />
    <Dash />

    <h1 class="titleTag">
      <div>Halisi Studios Halisi Studios Halisi Studios</div>
      <div>Halisi Studios Halisi Studios Halisi Studios</div>
    </h1>
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
    <Tabs :tabs="categories" />
    <div class="info">
      <p>Scroll Down</p>
      <i class="fa fa-angle-down" aria-hidden="true"></i>
    </div>
    <Scrollspy />
    <Footer />
  </div>
</template>

<script lang="ts">
// native
import { Options, Vue } from "vue-class-component";

// Components
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Dash from "@/components/Dash.vue";
import Tabs from "@/components/Tabs.vue";

// assets
import $ from "jquery";
// import HorizontalScroll from "vue-horizontal-scroll";

import { gsap } from "@/assets/my-gsap";

@Options({
  components: {
    Dash,
    Tabs,
    HelloWorld,
    // HorizontalScroll,
  },
  data() {
    return {
      myVar: 1,
      categories: [],
    };
  },
  mounted() {
    document.addEventListener
    // let foot = $("li");
    // gsap.to(foot, { xPercent: -50 });

    //Horizontal scroll
    // gsap.to($())

    //scrollDown alert
    gsap.timeline({repeat: -1})
      .to($('.fa-angle-down'),{repeat: 3, yPercent: 80, delay: 4, duration: .5, yoyo: true})
  },
  methods: {
    mouseOverHere() {
      this.myVar = 1.5;
    },
    mouseOuttaHere() {
      this.myVar = 1;
    },
    
  },
  created() {
    window.addEventListener("load", this.onWindowLoad),
      (this.categories = [
        {
          id: 1,
          title: "Portrait",
          image: "",
        },
        {
          id: 2,
          title: "Weddings",
          image: "",
        },
        {
          id: 3,
          title: "Nature Trail",
          image: "",
        },
        {
          id: 4,
          title: "Studio shots",
          image: "",
        },
        {
          id: 5,
          title: "Videography",
          image: "",
        },
        {
          id: 6,
          title: "Music",
          image: "",
        },
        {
          id: 7,
          title: "Music",
          image: "",
        },
        {
          id: 8,
          title: "Music",
          image: "",
        },
        {
          id: 9,
          title: "Music",
          image: "",
        },
        {
          id: 10,
          title: "Music",
          image: "",
        },
        {
          id: 11,
          title: "Music",
          image: "",
        },
      ]);
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
  position: absolute
  bottom: 0
  left: 50%
  transform: translate(-50%,0)
  margin-bottom: 3em

  p
    margin: 0
    padding: 0
</style>
