<template>
  <div class="Team">
    <Mouse :style="{ '--my-var': myVar }" />
    <Header title="The Team"/>

    <div class="d-flex">

      <div class="row container-fluid sec">
          <div class="col-sm-3"></div>

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
      <div class="row container-fluid sec">
          <div class="col-sm-2"></div>

          <div class="col-sm-10 d-flex">
            <img alt="newt" src="../assets/vlad.jpg" />

            <div class="d-block content">
              <h1 class="title text-end">Co-founder</h1>

              <div class="d-flex row">
                <h2 class="text-start">Vlad Mutuma</h2>

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

    </div>


      
  
    <Middledash />
    <Scrollspy />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Middledash from "@/components/Middledash.vue";
import $ from 'jquery';

@Options({
  components: {
    Middledash,
  },
  data() {
    return {
      myVar: 1,
    }
  },
  mounted () {
    var links = [$("a"),$(".hamburgerIcon")];
    links.forEach((el) => {
      el.mouseover(this.mouseHovered);
      el.mouseleave(this.mouseExit);
    });
  },
  methods: {
     mouseHovered() {
      this.myVar = 1.5;
    },
    mouseExit() {
      this.myVar = 1;
    },
  },
})
export default class Home extends Vue {}
</script>

<style lang="sass" scoped>
@import '@/assets/_config.sass'
.sec
  width: 100vw

img
  border: 1px solid gray
  width: auto
  height: 56vh
  // transform: translate(-50%,16%)

.container-fluid
  margin-left: -3vw !important
  transform: translate(-2%,25%)
  padding: 0
  margin: 0

.content
  // background-color: $mustard
  padding-left: 2.4vw

  h1
    font-family: $secondaryFont
    font-size: 7rem
    -webkit-text-fill-color: transparent
    -webkit-text-stroke: .3px $midGray
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
      font-size: .93rem
      line-height: 1.1rem
      color: $midGray
    .info
      margin-top: 2vh
      color: red !important

      & a:hover
        color: yellow
        
      p
        position: absolute
        font-size: .8rem
        color: $yellow
        padding: 0
        margin: 0
        margin-left: 7em

</style>