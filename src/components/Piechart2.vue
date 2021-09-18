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
  VisualMapComponent
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, defineComponent } from "vue";

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  VisualMapComponent
]);

export default defineComponent({
  name: "Piechart2",
  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: "light",
  },
  setup() {
    const option = ref({
      backgroundColor: "transparent",

      title: {
        text: "Engagements",
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

      tooltip: {
        trigger: "item",
        formatter: "{b} : {c} ({d}%)",
      },

      legend: {
        orient: "horizontal",
        top: "bottom",
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

      visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
          colorLightness: [0, 1],
        },
      },
      series: [
        {
          name: "",
          type: "pie",
          radius: "65%",
          center: ["50%", "45%"],
          data: [
            { value: 335, name: "Instagram" },
            { value: 310, name: "Facebook" },
            { value: 274, name: "Ad Networks" },
            { value: 235, name: "Youtube" },
            { value: 400, name: "Search Engines" },
          ].sort(function (a, b) {
            return a.value - b.value;
          }),
          roseType: "radius",
          label: {
            color: "rgba(255, 255, 255, 0.3)",
          },
          labelLine: {
            lineStyle: {
              color: "rgba(55, 255, 172, 0.3)",
            },
            smooth: 0.2,
            length: 10,
            length2: 20,
          },
          itemStyle: {
            color: "#c23531",
            shadowBlur: 200,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
          selectedMode: true,
          emphasis: {
              itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          },

          animationType: "scale",
          animationEasing: "elasticOut",
          animationDelay: function (idx) {
            return Math.random() * 200;
          },
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