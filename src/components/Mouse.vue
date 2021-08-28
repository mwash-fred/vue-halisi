<template>
    <div class="newCursor" :style="moveNewCursor"></div> 
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "Mouse",
  data() {
    return {
      x: 0,
      y: 0
    }
  },
  mounted () {
    document.addEventListener('mousemove', this.onMouseMove);
    // document.addEventListener('mouseover', this.hoverOnLink);
  },
  computed: {
    moveNewCursor() {
      return `transform: translateX(${this.x - 8 }px) translateY(${this.y - 8}px);`
    },
    // linkHoverEffect() { return `--my-var: 1.4;` }
  },
  methods: {
    onMouseMove(e) {
      this.x = e.clientX
      this.y = e.clientY
    }
  }
})
export default class Mouse extends Vue {
}
</script>


<style lang="sass" scoped>
div
    position: fixed
    height: 1em
    width: 1em
    border-radius: 50%
    background-color: white
    z-index: 99999999999999
    pointer-events: none
    --my-var: 1

    &::after
        content: ''
        position: fixed
        height: 1.5em
        width: 1.5em
        border: 1.2px solid lighten(#1A4645,30%)
        background-color: transparent
        border-radius: 50%
        transform: translate(-50%,-15%) scale(var(--my-var))
        transition-duration: 250ms
        transition-timing-function: ease-out
        mix-blend-mode: color-burn

</style>

