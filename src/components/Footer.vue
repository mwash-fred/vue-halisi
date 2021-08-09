<template>
  <footer class="d-flex align-items-end">
    <div class="links">
      <router-link to="/">Privacy policy</router-link>
      <router-link to="/Contact">Contact</router-link>
    </div>
    <div class="scrollNav"></div>
    <div class="ref">Copyright &copysr; 2021</div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
@import '@/assets/_config.sass'

footer
  font-family: $primaryFont
  font-size: 1rem
  position: absolute
  bottom: 0
  // padding: 1em
</style>