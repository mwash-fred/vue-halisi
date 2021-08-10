<template>
  <footer class="d-block">
    <div class="d-flex">
      <ul class="socials">
        <li>
          <router-link to="/"><i class="fab fa-instagram"></i></router-link>
        </li>
        <li>
          <router-link to="/"><i class="fab fa-twitter"></i></router-link>
        </li>
        <li>
          <router-link to="/"><i class="fab fa-facebook-f"></i></router-link>
        </li>
      </ul>
    </div>

    <div class="policies d-flex">
      <router-link to="/"> Privacy policy </router-link>
      <router-link to="/Contact">Contact</router-link>
      <div class="ref">Copyright &copysr; 2021</div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="sass" scoped>
@import '@/assets/_config.sass'

footer
  font-family: $primaryFont
  font-size: 1rem
  position: fixed
  bottom: 0
  padding-block: 1em

  a
    padding-inline: .8em
    color: white
    font-weight: bold

  .socials
    margin-bottom: 7em

ul
  width: 2em
  height: 2em
  border-radius: 50%
  list-style-type: none
  margin-left: .5em
  padding: 0

ul li
  @extend ul
  margin-block: .5em
  background: $darkGray
  border: .5px solid $ashGray

  & i
    font-size: .9rem
    color: $yellow
    margin-left: -.28em
    margin-top: .55em

  &:nth-child(2) i
    margin-left: -.3em

  &:nth-child(3) i
    margin-top: .6em
    margin-left: -.2em

.ref
  position: relative
  left: 75vw
</style>