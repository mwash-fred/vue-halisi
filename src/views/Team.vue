<template>
  <div class="Team">
    <Header title="The Team"/>

    <div class="container-fluid text-middle d-flex"></div>

    <div class="row container-fluid">
      <div class="col-sm-3">col-sm-4</div>

      <div class="col-sm-9 d-flex">
        <img alt="newt" src="../assets/newt.jpg" />

        <div class="d-block content">
          <h1 class="title text-end">Co-founder</h1>

          <div class="d-flex row">
            <h2 class="text-start">Newton Mutuma</h2>

            <p class="quote pt-4 pb-2">
              "Photography is a way of feeling, of touching, of loving."
            </p>

            <div class="row about-info text-start">
              <div class="col-sm-8 about">
                <p>
                  As the co-founder of Halisi studios, he is a renown
                  photographer bleh bleh bleh and more bleehs for the next four
                  paragraphs until this section looks like a block of text so
                  that it provides the user enough information about this dude.
                  You are an open book in your career so write more information
                  about yourself here...
                </p>
              </div>
              <div class="col-sm-4 info">
                <h2><a href="/">Instagram</a> <br /><a href="/contact">Dribble</a><br /><a href="/home">Only Fans</a></h2>
                <p>Find me on other platforms.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Middledash />
    <Scrollspy />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Middledash from "@/components/Middledash.vue";
import Header from "@/components/Header.vue";
import Scrollspy from "@/components/Scrollspy.vue";
import Footer from "@/components/Footer.vue";

@Options({
  components: {
    Header,
    Middledash,
    Scrollspy,
    Footer,
  },
  methods: {
  },
})
export default class Home extends Vue {}
</script>

<style lang="sass" scoped>
@import '@/assets/_config.sass'

img
  border: 1px solid gray
  width: auto
  height: 56vh
  // transform: translate(-50%,16%)

.container-fluid
  margin-left: -3vw !important
  transform: translateY(12.5%)
  padding: 0
  margin: 0

.content
  // background-color: $mustard
  padding-left: 2.4vw

  h1
    font-family: $secondaryFont
    font-size: 7rem
    -webkit-text-fill-color: transparent
    -webkit-text-stroke: .1rem $darkGray
    margin-top: -1.6rem
    margin-bottom: 2.4rem

  .quote:before
    content: ''
    border-left: 4px solid $yellow
    border-radius: 25px
    margin-inline: .4rem

  h2
    font-size: 3rem
    font-family: $secondaryFont

  .about-info
    .about
      padding-inline: 2rem
      font-size: .9rem
      line-height: 1.15rem
      color: $midGray
    .info
      margin-top: 2vh
      p
        position: absolute
        font-size: .8rem
        color: $yellow
        padding: 0
        margin: 0
        margin-left: 7em

</style>