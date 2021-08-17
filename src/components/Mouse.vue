<template>
  <!-- <transition appear @before-enter="beforeEnter" @enter="enter"> @before-enter="$emit('before-enter')" @enter="$emit('enter')" -->
    <div class="newCursor" @before-enter="$emit('before-enter')" @enter="$emit('enter')"></div>
  <!-- </transition> -->
</template>


<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "Mouse",
  emits: ["before-enter","enter"],
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
    z-index: 999999
    pointer-events: none

    &::after
        content: ''
        position: fixed
        height: 1.5em
        width: 1.5em
        border: 1px solid violet
        background-color: transparent
        border-radius: 50%
        transform: translate(-50%,-15%)
</style>

