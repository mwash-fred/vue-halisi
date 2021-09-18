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
  LegendComponent,
  VisualMapComponent,
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, defineComponent } from "vue";

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  VisualMapComponent,
]);

export default defineComponent({
  name: "Voidpie",
  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: "light",
  },
  setup() {
    const option = ref({
      tooltip: {
        trigger: "item",
      },
      title: {
        text: "Average time spent on the website",
        left: "16",
        top: 5,
        textStyle: {
          fontFamily: "cormorant garamond",
          color: "#dedede",
          fontSize: 16,
          backgroundColor: "transparent",
          fontWeight: "normal",
        },
      },
      legend: {
        orient: "horizontal",
        top: "bottom",
        left: 20,
        // itemGap: 5,
        inactiveColor: "#707070",
        icon: "circle",
        textStyle: {
          color: "white",
          fontFamily: "cormorant garamond",
          fontSize: 12.5,
        },
      },
      visualMap: {
        show: false,
        min: -400,
        max: 400,
        inRange: {
          colorLightness: [0, 1],
        },
      },
      series: [
        {
          type: "pie",
          radius: ["40%", "70%"],
          center: ["50%", "50%"],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontFamily: "cormorant garamond",
              fontSize: "18",
              fontWeight: "bold",
              backgroundColor: "transparent",
              color: "#F8BC24",

            },
          },
          labelLine: {
            show: false,
          },
          itemStyle: {
            color: "#1A4645",
            shadowBlur: 200,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
          data: [
            { value: 30, name: "30 Minutes" },
            { value: 60, name: "1 Hour" },
            { value: 300, name: "More than 1 hour" },
          ],
        },
      ],
    });

    return { option };
  },
});
</script>

<style lang="sass" scoped>
@import '@/assets/_config.sass'

.chart
    font-family: $secondaryFont !important
</style>