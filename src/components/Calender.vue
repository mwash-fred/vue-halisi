<template>
  <Calendar
    class-name="week-mode"
    :remarks="remarks"
    mode="week"
    monFirst
    useSwipe        
    selectMode="multi"
    ref="weekModeRef"

  />
</template>

<script>
import { ref } from "vue";
import Calendar from "mpvue-calendar";

export default {
  name: "calender",
  components: {
    Calendar,
  },
  mode: "week",

  setup() {
    const remarks = ref({
      "2021-1-13": "some tings",
      mode: "week",
    });

    return {
      remarks,
    };
  },
};
</script>

<style lang="sass" scoped>
@import "../assets/_config.sass"
.week-mode
    padding: 0
    margin: 0
    height: 2px
    width: 20vw
    margin-left: .8vw
</style>
