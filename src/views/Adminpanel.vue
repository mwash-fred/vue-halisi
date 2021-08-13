<template>
  <div class="background-cover">
    <div class="d-flex flex-column">
      <div class="d-flex flex-row top">
        <div class="one col-lg-3 col-md-3"><h1><router-link to="/">Halisi Studios</router-link></h1></div>
        <div class="two col-lg-3 col-md-3">
          <div class="black-overlay"></div>
          <img alt="subImg-1" src="../assets/img1.jpg" />
        </div>
        <div class="three col-lg-3 col-md-3">
          <div class="black-overlay"></div>
          <h1 class="overlay-text">Admin Control Panel</h1>
          <img alt="subImg-2" src="../assets/img2.jpg" />
        </div>
        <div class="col-lg-3 col-md-3"></div>
      </div>
      <div class="d-flex flex-row bottom">
        <div class="five col-lg-3 col-md-3">
          <div class="black-overlay"></div>
          <img alt="subImg-3" src="../assets/img3.jpg" />
        </div>
        <div class="six col-lg-6 col-md-6 justify-content-left">
          <form class="login-deets">
            <div class="form-group">
              <div class="input-items d-flex">
                <i class="fa fa-user" aria-hidden="true"></i>
                <input
                  type="text"
                  class="form-control"
                  id="validationDefaultUsername"
                  placeholder="Username"
                  required
                />
              </div>
            </div>
            <div class="form-group">
              <div class="input-items d-flex">
                <i class="fa fa-lock" aria-hidden="true"></i>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
            </div>
            <label class="forgot-password-label" for="exampleCheck1"
              >Forgot Password?</label
            >
            <button type="submit" class="btn btn-outline-light">Submit</button>
          </form>
        </div>
        <div class="seven col-lg-3 col-md-3">
          <div class="black-overlay"></div>
          <p class="ref">Copyright &copysr; 2021</p>
          <img alt="subImg-3" src="../assets/img4.jpg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "@/components/Header.vue";

@Options({
  name: "Adminpanel",
  components: {
    Header,
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
  background-color: $green
  left: 0
  top: 0
  overflow: hidden

  .col-md-3, .col-md-6
    border: 1px solid black

  h1
    font-family: $secondaryFont
    color: white

  img
    width: 100%
    height: 50vh
    object-fit: cover

  .one h1
    padding: .1em
    margin-top: 40vh

  .overlay-text
    font-family: $primaryFont
    font-size: 2.2em
    position: absolute
    margin-top: 4.4em
    margin-left: -3.5em
    transform: rotate(90deg)
    z-index: 2

  .black-overlay
    position: absolute
    background-color: black
    width: inherit
    height: 50vh
    opacity: 0.8

  .six
    padding: 5em
    text-align: left

    .form-group
      margin-block-end: 2.5em

      input
        background-color: transparent
        border: 0em
        border-bottom: .15em solid $midGray
        border-radius: .1em
        font-size: 1.4em
        color: white
        padding-left: .5em

        &:focus
          box-shadow: none
          border-bottom: .15em solid white

      ::placeholder
        color: $midGray
        font-size: 2em
      ::-ms-input-placeholder
        color: $midGray
      ::-ms-input-placeholder
        color: $midGray

      input:-webkit-autofill,
      input:-webkit-autofill:hover,
      input:-webkit-autofill:focus,
      input:-webkit-autofill:active
        -webkit-text-fill-color: $darkGray
        -webkit-box-shadow: 0 0 0 30px pink inset !important
        border-radius: 5px
        font-weight: bold

      i
        font-size: 1.2rem
        margin-right: 1em
        line-height: 2em

    .forgot-password-label
      padding-left: 2em

    .btn
      float: right

  .seven p
    position: absolute
    bottom: 0
    right: 0
    margin: 1em
    color: $yellow
</style>