<template>
  <Mouse />
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-2 sidetab">
          <h1>Admin</h1>
          <div class="userIcon rounded-circle"><i class="fa fa-user" aria-hidden="true"></i></div>
          <p>Newton Mutuma</p>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><i class="fa fa-th-large" aria-hidden="true"></i>
Dashboard</li>
          </ul>
      </div>

      <div class="col-sm-10 content">

        <div class="control2" ref="exitTab">
          <router-link to="/Adminpanel"><i class="fas fa-sign-out-alt"></i><span class="signout-tag"> Signout</span></router-link>
        </div>

        <div class="tab pie-chart">pie-chart</div>
        <div class="tab graph">graph</div>
        <div class="tab pie-chart-long">pie-chart-long</div>
        <div class="second">
          <div class="gigs tab">gigs</div>
          <div class="users tab">users</div>
          <div class="bar-graph tab">bar-graph</div>
        </div>

        <p>Halisi studio analytics</p>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { gsap } from "@/assets/my-gsap";
import $ from "jquery";

@Options({
  name: "Dashboard",
  mounted () {
    $('.control').mouseover(this.mouseWentOverHere);
    $('.control').mouseover(this.mouseLeftHere);

    // gsap.to($('.control'),{})
  },
  methods: {
    mouseWentOverHere() {
      gsap.to($('.control'),{ width: "150%", duration: 2, delay: .2})
    },
    mouseLeftHere() {
      gsap.to($('.control'),{width: "0%", duration: 2, delay: .5})
    }
  },
})
export default class Dashboard extends Vue {}
</script>



<style lang="sass" scoped>
@import '@/assets/_config.sass'

*
    color: white
    z-index: 3

.container-fluid
    background-color: $green
    position: absolute
    height: 100vh
    width: 100vw
    top: 0
    right: 0

.sidetab
    background-color: $darkGreen
    height: 100vh
    font-family: $secondaryFont

    h1
      font-size: 2em
      padding-top: 2rem

    .userIcon
        background-color: $midGray
        text-align: center
        width: 10rem
        height: 10rem
        margin-inline: 1.24rem
        
        i
          font-size: 5rem
          padding: 2rem
          
    p
      margin-top: 1em
      font-size: 1.4em

    ul 
      margin-top: 4rem
      li
        background-color: transparent
        margin-inline: -.8rem
        border-left: 4px solid white

        i
          color: lighten($green,20%)
          margin-left: -2em
          margin-right: 1em

.content
    background-color: $lightGreen
    text-align: center
    display: grid
    padding: 4em
    padding-top: 5em !important
    grid-template-columns: 40% 60%
    grid-template-rows: 40% 60%
    grid-gap: 1rem

    .control
        align-self: center
        position: absolute
        right: 0
        top: 0
        min-height: 2.4em
        min-width: 2.4em
        align-items: center
        border-radius: 50%
        background-color: $darkGreen
        margin: .2em

        i
            margin-top: .6em

            &:hover, &:active
                color: $ashGray

    .control2
        @extend .control
        border-radius: 0
        margin: 0
        border-bottom-left-radius: .8em
        width: 6em
        height: 2em



        

    .tab
        background-color: darken($darkGreen,2%)
        border-radius: 12px
        box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)

    .second
        display: grid
        grid-template-columns: 1fr 1fr
        grid-template-rows: 1fr 2fr
        grid-gap: 1rem

        .bar-graph
            grid-column-end: span 2

    p
        position: absolute
        right: 0
        bottom: 0
        padding: .01em
        margin-right: 2em
</style>