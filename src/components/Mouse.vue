<template>
  <div class="newCursor"></div>
</template>

<script>
export default {
  name: 'Mouse',
  methods: {
    // const cursor = document.querySelector(".newCursor"),
    // document.addEventListener("mousemove", e => {
    // cursor.setAttribute( "style", "left: "+(e.clientX - 2.5)+"px; top:"+(e.clientY - 2.5)+"px;");
    // })
  }
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

