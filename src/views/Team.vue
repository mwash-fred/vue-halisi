<template>
  <div class="Team">
    <h1>This is the team page</h1>
    <Middledash />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Middledash from "@/components/Middledash.vue"


@Options({
  components: {
    Middledash
  },
})
export default class Home extends Vue {}
</script>