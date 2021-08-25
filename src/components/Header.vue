<template>
  <div class="wrapper">
    <div class="d-block">
      
      <div class="d-flex layer1">
        <h1 class="">{{ title }}</h1>

        <div
          class="hamburgerIcon"
          @mouseover="$emit('hovered-here')"
          @mouseleave="$emit('hovered-outta-here')"
          @click="toggleMenu"
        >
          <div class="top"></div>
          <div class="bottom"></div>
        </div>
      </div>

      <div class="title">
        <router-link
        to="/"
        @mouseover="$emit('hovered-here')"
        @mouseleave="$emit('hovered-outta-here')"
        >Halisi Studios</router-link
      >
      </div>
      
    </div>
  </div>

  <Menu />
</template>


<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Menu from "@/views/Menu.vue";
import gsap from "gsap";
import $ from "jquery";

@Options({
  name: "Header",
  components: {
    Menu,
  },
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
          duration: 0.8,
        });
        this.rotation = 1;
      } else {
        gsap.to($(".hamburgerIcon"), {
          rotate: "0",
          transformOrigin: "80% center",
          duration: 0.8,
        });
        this.rotation = 0;
      }
      // console.log("Show the damn menu..");
    },
  },
  emits: ["hovered-here", "hovered-outta-here"],
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

