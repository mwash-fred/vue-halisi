<template>
  <h1 class="payment text-left">Till No: <br /><span>000000</span></h1>
  <h1 class="title">Get in <span>touch</span></h1>

  <Middledash />
  <div class="container headings">
    <h2>
      Drop an email for <br />
      booking
    </h2>
    <h2>Join Our Newsletter</h2>
    <p>Terms & Conditions</p>
  </div>

  <div class="container form-section-container">
    <div>
      <p>
        STUDIO : <br />Nairobi, NRB<br />
        +254 711 111 111 <br />
        <span
          ><a href="mailto:inquiry@halisistudios.co.ke">
            Inquiry@Halisistudios.co.ke</a
          ></span
        ><br /><br />PRESS :<br />Residential Area
      </p>
    </div>

    <form>
      <div class="col-md-4 d-flex">
        <input
          type="text"
          class="form-control pl-2"
          id="validationServer01"
          placeholder="Your Name"
          required
        />
      </div>

      <div class="form-group d-flex">
        <div class="input-group-prepend active"></div>
        <input
          type="email"
          class="form-control pl-2"
          id="bookingEmail"
          aria-describedby="emailHelp"
          placeholder="Your Email Address"
          required
        />
      </div>

      <div class="form-group">
        <input
          type="tel"
          class="form-control pl-1"
          id="tel"
          aria-describedby="telephone"
          placeholder="Your Phone Number"
          required
        />
      </div>

      <div class="form-group d-block">
        <textarea
          class="form-control"
          id="messageArea"
          rows="3"
          placeholder="Enter your message here..."
          required
        ></textarea>
        <button type="submit" class="btn align-self-center">Submit</button>
      </div>
    </form>

    <div>
      <p></p>
      <div class="form-group">
        <input
          type="email"
          class="form-control"
          id="newsletterEmail"
          aria-describedby="emailHelp"
          placeholder="Your Email Address"
        />
      </div>
    </div>
  </div>

  <Footer />
</template>


<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Middledash from "@/components/Middledash.vue";
import Footer from "@/components/Footer.vue";

@Options({
  components: {
    Middledash,
    Footer,
  },
})
export default class Home extends Vue {}
</script>


<style lang="sass" scoped>
@import '@/assets/_config.sass'
*
  color: white

a
  color: $gray

h1
  font-family: $secondaryFont
  font-size: 3.5rem

h1:nth-child(3)
  -webkit-text-fill-color: transparent
  -webkit-text-stroke: .05rem white

span
  -webkit-text-fill-color: $yellow
  -webkit-text-stroke: 0px white
  color: $yellow
  white-space: nowrap

.payment
  position: absolute
  transform: rotate(90deg)
  width: 80vh

.title
  font-size: 6.5rem
  text-align: right
  margin-inline-end: 3.5vw
  margin-top: .6em

.headings
  display: flex
  justify-content: space-around
  margin-right: 2em

  h2
    @extend h1
    font-size: 2.8rem
    text-align: left
    padding-block: .7rem
    margin-left: 6.5em

    &:nth-child(1)
      line-height: 1.4em
      padding-block: .4rem

    &:nth-child(2)
      justify-self: end
      margin-left: 2em

  & > p
    position: absolute
    bottom: 0
    left: 16vw

.form-section-container
  display: grid
  grid-template-columns: repeat(3,1fr)
  grid-column-gap: 8em
  margin-left: 6em

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active
    -webkit-box-shadow: 0 0 0 30px lighten($yellow,40%) inset !important
    -webkit-text-fill-color: $green
    border-radius: .1rem

  ::placeholder
    color: $midGray
    opacity: 1
  ::-ms-input-placeholder
    color: $midGray
  ::-ms-input-placeholder
    color: $midGray

  .form-control
    width: 16em
    height: 2em
    background-color: $darkGray
    border: none
    opacity: 0.8
    border-radius: .1em
    caret-color: $yellow

    &:active, &:focus
      border-left: .5em solid $yellow
      box-shadow: $yellow


  input, textarea
    padding-left: 1em
    color: $yellow !important
    font-weight: bold

    &:focus
      box-shadow: none

  textarea
    resize: none
    border: none !important
    height: 5em !important
    width: 20em !important
    font-weight: normal !important


  .form-group button
    border-top-left-radius: 0
    border-top-right-radius: 0
    font-weight: bold
    color: $darkGray
    background-color: $yellow
    justify-self: center
    width: 20em
    &:hover
      background-color: lighten($yellow,10%)
      border-color: $yellow !important
    &:active, &:focus
      box-shadow: none
      background-color: darken($yellow,20%)

  div
    padding-block: .3em

  div:nth-child(1)
    text-align: right !important
    font-size: .9rem

</style>
