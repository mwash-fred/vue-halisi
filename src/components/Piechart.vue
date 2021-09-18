<template>
  <v-chart class="chart" :option="option" />
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, defineComponent } from "vue";

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent
]);

export default defineComponent({
  name: "Piechart",
  components: {
    VChart
  },
  provide: {
    [THEME_KEY]: "light"
  },
  setup() {
    const option = ref({
      title: {
        text: "Engagements",
        left: "16",
        top: 5,
        textStyle: {
            fontFamily: "cormorant garamond",
            color: "white",
            fontSize: 16,
            backgroundColor: "transparent",
            fontWeight: "normal"
        }
      },
      tooltip: {
        trigger: "item",
        formatter: "{b} : {c} ({d}%)"
      },
      legend: {
        orient: "horizontal",
        top: "175",
        left: 20,
        itemGap: 5,
        inactiveColor: "#707070",
        icon: "circle",
        fontSize: 1,
        textStyle: {
            color: "white",
            fontFamily: "cormorant garamond",
            fontSize: 11,
        },
      },
      series: [
        {
          name: "",
          type: "pie",
          radius: "50%",
          selectedMode: true,
          cursor: "none",
          center: ["50%", "40%"],
          data: [
            { value: 335, name: "Instagram" },
            { value: 310, name: "Facebook" },
            { value: 234, name: "Ad Networks" },
            { value: 135, name: "Youtube" },
            { value: 748, name: "Search Engines" },
            { value: 848, name: "Direct" }
          ],
          label:{
              fontFamily: "cormorant garamond",
              backgroundColor: "transparent",
              color: "white"
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        }
      ]
    });

    return { option };
  }

});
</script>

<style lang="sass" scoped>
@import '@/assets/_config.sass'

.chart
    font-family: $secondaryFont !important
    
</style>