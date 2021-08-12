<template>
  <div>
    <div class="scrollspy"></div>
    <div class="scrollspy"></div>
  </div>
</template>

<script>
export default {
  name: "Scrollspy",
};
</script>

<style lang="sass" scoped>
@import '@/assets/_config.sass'
div
    position: absolute
    margin: auto
    bottom: 5%
    left: 50%

    .scrollspy
        position: relative
        left: -50%
        background-color: $gray
        width: 10rem
        height: .4rem
        border-radius: 25px
    
    &:nth-child(2)
        height: .25rem
        width: 1rem
        background-color: $darkGray
        margin-top: -.3rem
        
</style>