<template>
  <div class="container-fluid">
    <div class="slide">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <router-link to="/" class="d-flex">
            <div class="card text-start">
              <h1>Home</h1>
              <p>A display for our portfolio.</p>
              <h2 class="text-end"><small>No. </small>01</h2>
            </div>
            <div class="main">
              <h3>Home</h3>
              <div class="dotted"></div>
            </div>
          </router-link>
        </li>

        <li class="list-group-item d-flex">
          <router-link to="/story" class="d-flex">
            <div class="card text-start">
              <h1>Our Story</h1>
              <p>All about halisi and how it <br />was started.</p>
              <h2 class="text-end"><small>No. </small>02</h2>
            </div>
            <div class="main">
              <h3>Our Story</h3>
              <div class="dotted"></div>
            </div>
          </router-link>
        </li>

        <li class="list-group-item d-flex">
          <router-link to="/team" class="d-flex">
            <div class="card text-start">
              <h1>The Team</h1>
              <p>
                The individuals behind <br />
                Halisi.
              </p>
              <h2 class="text-end"><small>No. </small>03</h2>
            </div>
            <div class="main">
              <h3>The Team</h3>
              <div class="dotted"></div>
            </div>
          </router-link>
        </li>

        <li class="list-group-item d-flex">
          <router-link to="/contact" class="d-flex">
            <div class="card text-start">
              <h1>Bookings</h1>
              <p>
                Book a gig or reach out to us<br />
                for a project.
              </p>
              <h2 class="text-end"><small>No. </small>04</h2>
            </div>
            <div class="main">
              <h3>Bookings</h3>
              <div class="dotted"></div>
            </div>
          </router-link>
        </li>

      </ul>
      <p>Terms & Conditions</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "@/components/Header.vue";
import Dash from "@/components/Dash.vue";

@Options({
  name: "Menu",
  components: {
    Header,
    Dash,
  },
})
export default class Home extends Vue {}
</script>

<style lang="sass" scoped>
@import '@/assets/_config.sass'

*
  color: white

.container-fluid
  background-color: black
  position: absolute
  height: 100vh
  width: 85.69vw
  top: 0
  right: 0
  z-index: 2

.slide
  @extend .container-fluid
  background-color: rgba(26,70,69,.8)
  z-index: 2
  // overflow: scroll

  .list-group
    margin: 2em
    // margin-top: 1em
    transform: scale(0.9)

    .list-group-item
      border: none

    h1,h2,p,small
      opacity: 0.6

    h1,h2,h3
      font-family: $secondaryFont

    li
      background: transparent

      .card
        background-color: rgba(255,255,255,.2)
        border-radius: 0
        padding-inline: .5em
        width: 17vw

        p
          line-height: 1.2em
          margin-bottom: -.2em
          padding-left: .4em

        h2
          padding: 0 !important
          margin: 0 !important
          color: $yellow
          font-size: 3em
          opacity: 1

          small
            font-size: .4em !important
  & > p
    position: absolute
    bottom: 0
    left: 2vw

.main
  display: run-in

  h3
    font-size: 8em
    text-align: left
    align-self: center
    margin-inline: .8em
    margin-top: -.1em
    margin-bottom: -1em
    -webkit-text-fill-color: transparent
    -webkit-text-stroke: .02rem white
    z-index: 444

    &:hover
      -webkit-text-stroke: .02rem $mustard

  .dotted
    position: absolute
    width: 69.69vw
    margin-top: 3.5em

    height: .1rem
    background-image: linear-gradient(to right, $gray 0%, $gray 50%, transparent 50%)
    background-size: 4px 1px
    background-repeat: repeat-x
    pointer-events: none
    opacity: 0.5
    z-index: 1
</style>