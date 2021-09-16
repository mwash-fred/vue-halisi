<template>
  <div>
    <img
      id="audio-icon"
      alt="audio-icon"
      src="../../public/img/icons/mute.svg"
      @click="play"
      autoplay="true"
    />
  </div>
</template>

<script>
import useSound from "vue-use-sound";
// import { onMounted } from "vue-demi";

export default {
  name: "SoundButton",
  setup() {
    const { play } = useSound("../assets/TheSea.mp3")
    return { play }
  },
};
</script>

<style lang="sass" scoped>
@import '@/assets/_config.sass'

img
  height: 100%
  position: fixed
  left: 0
  top: 0
  margin: 0
  padding: 0
  z-index: 1
</style>