<template>
  <Mouse :style="{'--my-var': myVar }"/>
  <Header title="Contact" @hovered-here="mouseOverHere" @hovered-outta-here="mouseOuttaHere"/> <!-- Include this class @toggle-menu="toggleMenu" -->
  
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

  <div
    class="
      container
      form-section-container
      d-flex
      flex-row
      justify-content-between
    "
  >
    <div class="text-section col-md-2">
      <p>
        STUDIO : <br />Nairobi, NRB<br />
        +254 711 111 111 <br />
        <span
          ><a href="mailto:inquiry@halisistudios.co.ke" @mouseover="mouseOverHere" 
          @mouseleave="mouseOuttaHere">
            Inquiry@Halisistudios.co.ke</a
          ></span
        ><br /><br />PRESS :<br />Residential Area
      </p>
    </div>

    <form class="justify-self-center bookings">
      <div class="form-group">
        <input
          type="text"
          class="form-control pl-2"
          id="validationServer01"
          placeholder="Your Name"
          required
          v-model="userInfo.name"
          @mouseover="mouseOverHere" 
          @mouseleave="mouseOuttaHere"
        />
      </div>

      <div class="form-group">
        <input
          type="email"
          class="form-control pl-2"
          id="bookingEmail"
          aria-describedby="emailHelp"
          placeholder="Your Email Address"
          @mouseover="mouseOverHere" 
          @mouseleave="mouseOuttaHere"
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
          @mouseover="mouseOverHere" 
          @mouseleave="mouseOuttaHere"
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
        <button type="submit" class="btn">Submit</button>
      </div>
    </form>

    <div class="third-section col-md-4">
      <p>
        Add your details and you'll receive our quarterly email, including what
        events we will be holding, our price discounts, current offers, updates
        on new posts and the community building actiivities around Halisi
        Studios.
      </p>
      <div class="form-group">
        <label for="newsletterEmail" class="py-1 text-left d-flex"
          ><span>Subscribe to our newsletter !</span></label
        >
        <input
          type="email"
          class="form-control pl-2"
          id="newsletterEmail"
          aria-describedby="emailHelp"
          placeholder="Your Email Address"
          @mouseover="mouseOverHere" 
          @mouseleave="mouseOuttaHere"
          required
        />
        <button class="btn d-block" type="submit">Subscribe</button>
      </div>
      <p class="slogan">"Halisi studios slogan could go here.."</p>
    </div>
  </div>

  <Footer @hovered-here="mouseOverHere" @hovered-outta-here="mouseOuttaHere"/>
</template>


<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Middledash from "@/components/Middledash.vue";
import Mouse from "@/components/Mouse.vue"
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue"

@Options({
  components: {
    Mouse,
    Header,
    Middledash,
    Footer,
  },
  data () {
    return {
      myVar: 1,
      userInfo : {
        name: 'Timothy Davis',
        email: 'thehilltimmy@gmail.com',
        phone: '+25717846486',
        message: 'I\'d like to make a booking for 29th October',
      }
    }
  },
  methods: {
    mouseOverHere () {
      this.myVar = 1.5;
    },
    mouseOuttaHere () {
      this.myVar = 1;
    }
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

span
  -webkit-text-fill-color: $yellow
  -webkit-text-stroke: 0px white
  // color: $yellow
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
  -webkit-text-fill-color: transparent
  -webkit-text-stroke: .04rem white

.headings
  display: flex
  justify-content: space-around
  margin-right: 2em

  h2
    @extend h1
    font-size: 3rem
    text-align: left
    padding-block: .5rem
    margin-left: 5.5em
    margin-top: .05em

    &:nth-child(2)
      justify-self: end
      margin-left: 1em

  & > p
    position: absolute
    bottom: 0
    left: 16vw

.form-section-container
  // display: grid
  // grid-template-columns: repeat(3,1fr)
  // grid-column-gap: 8em
  margin-left: 10.5em
  // margin-inline: 2em

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

  .text-section a
    cursor: pointer

  .bookings .form-control
    width: 16em
    height: 2em
    background-color: $darkGray
    border: none
    opacity: 0.8
    border-radius: .1em
    caret-color: $yellow
    cursor: none

    &:active, &:focus
      border-left: .5em solid lighten($yellow,30%)
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

  .bookings button
    border-top-left-radius: 0
    border-top-right-radius: 0
    padding: 0
    margin: 0
    font-weight: bold
    color: $darkGray
    background-color: lighten($yellow,30%)
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

/* Email subscription and company slogan */
.third-section
  padding: 0
  margin: 0
  justify-self: end
  margin-top: -2em

  .form-group
    span
      background-image: url('../assets/brush3.png')
      background-repeat: no-repeat
      background-size: 100% 95%;
      padding: 6px
      padding-inline: 2em
      font-weight: bold
      -webkit-text-fill-color: $darkGray

    input
      border: none
      border-left: .5em solid lighten($yellow,30%)
      background-color: $darkGray
      cursor: none

    button
      float: right
      margin-top: .1rem
      border: $yellow
      box-shadow: none
      background-color: $yellow
      color: $darkGray
      font-weight: bold

      &:hover, &:active
        background-color: darken($yellow, 10%)

      &:focus
        background-color: darken($yellow, 30%)

  p
    line-height: 1rem
    text-align: left
    font-size: .9rem

  .slogan
    margin-top: 4em

    &:before
      content: ''
      border-left: 4px solid $yellow
      border-radius: 25px
      margin-right: .4rem
      
      &:hover
        color: red !important
</style>
