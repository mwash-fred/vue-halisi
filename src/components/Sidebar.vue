<template>
    <img alt="Vue logo" src="../assets/sidebar.png" >
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
  }
})
export default class Sidebar extends Vue {
}
</script>

<style lang="scss" scoped>
img {
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
}
</style>