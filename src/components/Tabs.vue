<template>
  <ul class="list-group list-group-flush">
      <li class="list-group-item"></li>
      <li class="list-group-item"></li>
      <li class="list-group-item"></li>
      <li class="list-group-item"></li>
      <li class="list-group-item"></li>
      <li class="list-group-item"></li>
      <li class="list-group-item"></li>
      <li class="list-group-item"></li>
      <li class="list-group-item"></li>
  </ul>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
@import '@/assets/_config.sass';

ul
    position: absolute
    offset-block-start: 4em
    display: flex
    flex-direction: row
    margin-top: 4em
    right: 0

.list-group-item
    height: 20em
    width: 6em
    background: $darkGray
    margin-inline: .2rem

</style>