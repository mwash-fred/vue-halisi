<template>
  <div class="video-container">
    <p id="clickToSkip">Skip Intro</p>
  </div>
</template>

<script>
import { onMounted } from "vue-demi";
import { gsap } from "@/assets/my-gsap";
import $ from "jquery";

export default {
  name: "intro",
  data() {
    return {
      video: false,
    };
  },
  setup() {
    onMounted(() => {
      $("html").css("overflow", "hidden");

      var videoElmnt = document.createElement("video");
      $(".video-container").append(videoElmnt);
      gsap.set(videoElmnt, {
        attr: {
          src: "http://192.168.40.16:8080/src/assets/bloom.mp4",
          class: "myVideoElement",
        },
      });
      $(document).click(function () {
        if (!this.video) {
          videoElmnt.play();
          this.video = true;
          console.log(this.video);
        }
      });

      //Skip myStory video
      $("#clickToSkip").click(function () {
        videoElmnt.pause();
        videoEndHandler();
      });

      videoElmnt.addEventListener("ended", videoEndHandler, false);
      function videoEndHandler() {
        gsap
          .timeline({ defaults: { duration: 2 } })
          .to($(".video-container"), {
            autoAlpha: 0,
            ease: "easeOut",
            delay: 1,
          })
          .set($(".title a"), { css: { zIndex: 35 } }, "-2")
          .from(
            $(".title a"),
            {
              yPercent: 700,
              scale: 2,
              delay: 3,
              ease: "easeOut",
            },
            "<"
          );
        $("html").css("overflow-x", "scroll");
      }
    });
  },
};
</script>

<style lang="sass" scoped>
@import '@/assets/_config.sass'
div
  position: absolute
  background-color: black
  height: 100vh
  width: 100vw
  overflow: hidden !important
  top: 0
  left: 0
  z-index: 30

  p
    position: absolute
    left: 50%
    top: 90%
    transform: translateX(-50%)
    color: $midGray
    font-weight: 900
    font-size: 1.2rem
    overflow: hidden
    cursor: pointer
    z-index: 31

    &::after
      content: ''
      position: absolute
      bottom: 0
      left: 0
      width: 100%
      height: 0.05em
      background-color: $yellow
      opacity: 0
      transition: opacity 300ms, transform 300ms
      opacity: .8
      transform: translate3d(-100%, 0, 0)

    &:hover::after, &:focus::after
      transform: translate3d(0, 0, 0)

    &:hover
      color: $yellow

.myVideoElement
  background-size: cover
</style>