<template>
  <div class="wrapper header-wrap">
    <div class="d-block">
      <div class="d-flex layer1">
        <h1>{{ title }}</h1>

        <div class="hamburgerIcon" @click="toggleMenu">
          <div class="top"></div>
          <div class="bottom"></div>
        </div>
      </div>

      <div class="title">
        <router-link to="/">Halisi Studios</router-link>
      </div>
    </div>
    <Menu />
  </div>
</template>


<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { gsap } from "@/assets/my-gsap";
import $ from "jquery";

@Options({
  name: "Header",
  components: {},
  data() {
    return {
      rotation: 0,
    };
  },
  props: {
    title: String,
  },
  methods: {
    toggleMenu() {
      if (this.rotation == 0) {
        gsap.to($(".hamburgerIcon"), {
          rotate: "35",
          transformOrigin: "80% 40%",
          duration: 0.4,
        });
        gsap.timeline()
          .to($(".main-menu"), { autoAlpha: 1 })
          .to($("#sidebar"),{ xPercent: 0, duration: .5, ease: 'easeInOut'},"<")
          .fromTo($("#closeTag"),{yPercent: 60, autoAlpha: 0},{yPercent: 0, autoAlpha: 1, duration: .5, ease: 'Power1.easeOut'});

        this.rotation = 1;
      } else {
        gsap.to($(".hamburgerIcon"), {
          rotate: "0",
          transformOrigin: "80% center",
          duration: 0.4,
        });
        gsap.to($(".main-menu"), { autoAlpha: 0 });
        gsap.to($("#closeTag"), {yPercent: 60, autoAlpha: 0});
        this.rotation = 0;
      }
    },
  },

})
export default class Sidebar extends Vue {
  title!: string;
}
</script>


<style lang="sass" scoped>
@import '@/assets/_config.sass'

.wrapper
  // position: relative
  // top: 0
  // margin-inline: 3em
  // width: 100vw
  padding-top: .4em
  // margin-bottom: -1em

h1 //Page Title
  font-family: $secondaryFont
  font-size: 2em
  position: fixed
  z-index: 2

a //Home Control
  font-size: 1.8rem
  font-family: $secondaryFont
  position: fixed
  left: 50%
  transform: translate(-50%,0)
  margin-top: 4vh

.layer1
  margin-inline: 3em
  position: fixed-top

  .hamburgerIcon
    position: fixed
    margin-top: .8em
    right: 0
    z-index: 10
    margin-right: 3em

    div
      width: 2rem
      height: 4px
      margin-block: 6px
      background-color: white
      border-radius: 25px

    div:nth-child(2)
      margin-left: .6rem
      width: 1.4rem
</style>

