<template>
  <Mouse />
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-2 sidetab">
          <h1>Admin</h1>
          <div class="userIcon rounded-circle"><i class="fa fa-user" aria-hidden="true"></i></div>
          <p>Newton Mutuma</p>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><i class="fa fa-th-large" aria-hidden="true"></i> Dashboard</li>
          </ul>
          <router-link id="exit-tab" to="/Adminpanel">
              <i class="fas fa-sign-out-alt"><span> Signout</span></i>
          </router-link>
      </div>

      <div class="col-sm-10 content">
        <div class="tab pie-chart">
          <Piechart2 />
        </div>
        <div class="tab graph">
          <Linechart />
        </div>
        <div class="tab pie-chart-long">
          <Voidpie />
        </div>
        <div class="second">
          <div class="gigs tab">
            <Calender />
          </div>
          <div class="users tab">
            <Daylinechart />
          </div>
          <div class="bar-graph tab">
            <Barchart />
          </div>
        </div>

        <p id="tag">Halisi studio analytics</p>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Piechart from "@/components/Piechart.vue";
import Piechart2 from "@/components/Piechart2.vue";
import Barchart from "@/components/Barchart.vue";
import Voidpie from "@/components/Voidpie.vue";
import Linechart from "@/components/Linechart.vue";
import Daylinechart from "@/components/Daylinechart.vue";
import Calender from "@/components/Calender.vue";

@Options({
  name: "Dashboard",
  components: {
    Piechart,
    Piechart2,
    Barchart,
    Voidpie,
    Linechart,
    Daylinechart,
    Calender
  }
})
export default class Dashboard extends Vue {}
</script>



<style lang="sass" scoped>
@import '@/assets/_config.sass'

*
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

    p
      margin-top: 1em
      font-size: 1.4em

    .userIcon
        background-color: $midGray
        text-align: center
        width: 10rem
        height: 10rem
        margin-inline: 1.24rem

        i
          font-size: 5rem
          padding: 2rem

    ul 
      margin-top: 4rem
      font-family: $primaryFont

      li
        background-color: transparent
        margin-inline: -.8rem
        color: white
        border-left: 4px solid white

        i
          color: lighten($green,20%)
          margin-left: -2em
          margin-right: 1em

    #exit-tab
        position: absolute
        bottom: 0
        left: 0
        padding-inline: 3em
        margin-bottom: 6vh
        padding-right: 6em
        padding-block: .8em
        color: white

        i
            padding-right: 1em

            span
                font-family: $primaryFont
                margin-left: 1em
                font-weight: normal

.content
    background-color: $lightGreen
    text-align: center
    display: grid
    padding: 4em
    padding-top: 2.4em !important
    grid-template-columns: 40% 60%
    grid-template-rows: 40% 60%
    grid-gap: 1rem
    padding-bottom: 5.4em !important

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
        color: $yellow
</style>