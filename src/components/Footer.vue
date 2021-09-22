<template>
  <footer class="d-block">
    <div class="d-flex">
      <ul class="socials" @mouseover="$emit('hovered-here')" @mouseleave="$emit('hovered-outta-here')">
        <li>
          <a :href="instagram"><i class="fab fa-instagram"></i></a>
        </li>
        <li>
          <a :href="twitter"><i class="fab fa-twitter"></i></a>
        </li>
        <li>
          <a :href="facebook"><i class="fab fa-facebook-f"></i></a>
        </li>
      </ul>
    </div>

    <div class="policies d-flex">
      <router-link to="/" @mouseover="$emit('hovered-here')" @mouseleave="$emit('hovered-outta-here')"> Privacy policy </router-link>
      <router-link to="/Contact" @mouseover="$emit('hovered-here')" @mouseleave="$emit('hovered-outta-here')">Contact</router-link>
      <div class="ref">Copyright &copysr; 2021</div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "Footer",
  data() {
    return {
      instagram: 'https://www.instagram.com/halisi_studios/',
      facebook: 'https://www.facebook.com/HalisiStudios',
      twitter: 'https://www.twitter.com/HalisiStudios'
    }
  },
  emits: ["hovered-here","hovered-outta-here"],
})
export default class Footer extends Vue {}
</script>

<style lang="sass" scoped>
@import '@/assets/_config.sass'

footer
  font-family: $primaryFont
  font-size: 1rem
  position: fixed
  bottom: 0
  padding-block: 1em
  z-index: 20

  a
    padding-inline: .8em
    color: $yellow
    font-weight: bold

    &:hover
      color: white !important
  .policies a
    color: white 

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
  border: .5px solid $midGray

  &:hover
      background: $lightGreen
      border: .5px solid white

  & i
    font-size: .9rem
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