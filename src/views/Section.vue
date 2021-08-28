<template>
  <Header />
  <Mouse />
  <div class="background-cover">
    <div class="d-flex flex-column">

      <div class="d-flex flex-row top">
        <div class="one col-lg-3 col-md-3">
          <div class="black-overlay"></div>
          <img alt="subImg-2" src="../assets/img2.jpg" />
        </div>
        <div class="two col-lg-3 col-md-3">
          <div class="black-overlay"></div>
          <img alt="subImg-1" src="../assets/img1.jpg" />
        </div>
        <div class="three col-lg-3 col-md-3">
          <div class="black-overlay"></div>
          <img alt="subImg-2" src="../assets/img2.jpg" />
        </div>
        <div class="col-lg-3 col-md-3">
          <div class="black-overlay"></div>
          <img alt="subImg-1" src="../assets/img1.jpg" />
        </div>
      </div>

      <div class="d-flex flex-row bottom">
        <div class="five col-lg-3 col-md-3">
          <div class="black-overlay"></div>
          <img alt="subImg-3" src="../assets/img3.jpg" />
        </div>
        <div class="six col-lg-6 col-md-6 justify-content-left">
          <div class="black-overlay"></div>
          <img alt="subImg-3" src="../assets/img4.jpg" />
        </div>
        <div class="seven col-lg-3 col-md-3">
          <div class="black-overlay"></div>
          <img alt="subImg-3" src="../assets/img4.jpg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "Adminpanel",
  components: {
  },
})
export default class Admin extends Vue {}
</script>

<style lang="sass" scoped>
@import '@/assets/_config.sass'
a
  color: white !important

.background-cover
  height: 100vh
  width: 100vw
  position: absolute
  background-color: $mustard
  left: 0
  top: 0
  overflow: hidden

  .col-md-3, .col-md-6
    border: 1px solid black

  img
    width: 100%
    height: 50vh
    object-fit: cover

  .black-overlay
    position: absolute
    background-color: black
    width: inherit
    height: 50vh
    opacity: 0.2
</style>