<template>
  <v-chart class="chart" :option="option" />
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  VisualMapComponent,
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, defineComponent } from "vue";

use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  VisualMapComponent,
]);

export default defineComponent({
  name: "Linechart",
  components: {
    VChart,
  },
  setup() {
    var option = ref({
      title: {
        text: "Daily visits",
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
        trigger: "axis",
        axisPointer: {
          type: "cross",
          label: {
            backgroundColor: "#6a7985",
          },
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
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      grid: {
        left: "10%",
        right: "5%",
        bottom: "20%",
        top: "22%",
        containLabel: false,
      },
      xAxis: [
        {
          type: "category",
          boundaryGap: false,
          axisTick: false,
          axisLabel: {
            fontFamily: "cormorant garamond",
            color: "#dedede"
          },
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Thu", "Fri"],
        },
      ],
      yAxis: [
        {
          type: "value",
          axisLabel: {
            fontFamily: "cormorant garamond",
            color: "#b8b8b8",
            fontSize: 14,
          },
          splitLine: {
            lineStyle: {
              color: "gray",
              type: [5, 2],
              opacity: 0.6,
            },
          },
        },
      ],
      series: [
        {
          name: "Tiktok",
          type: "line",
          smooth: true,
          symbol: "circle",
          legendHoverLink: true,
          lineStyle: {
            width: 1,
            opacity: 0.5,
          },
          areaStyle: {
            opacity: 0.5,
          },
          emphasis: {
            focus: "data",
          },
          data: [120, 20, 101, 30, 90, 230, 210],
        },
        {
          name: "Instagram",
          type: "line",
          smooth: true,
          symbol: "circle",
          lineStyle: {
            width: 1,
            opacity: 0.5,
          },
          areaStyle: {
            opacity: 0.5,
          },
          emphasis: {
            focus: "series",
          },
          data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
          name: "Tumblr",
          type: "line",
          smooth: true,
          symbol: "circle",
          lineStyle: {
            width: 1,
            opacity: 0.5,
          },
          areaStyle: {
            opacity: 0.5,
          },
          emphasis: {
            focus: "series",
          },
          data: [150, 232, 201, 154, 190, 330, 410],
        },
        {
          name: "Youtube",
          type: "line",
          smooth: true,
          symbol: "circle",
          smoothMonotone: "x",
          lineStyle: {
            width: 1,
            opacity: 0.5,
          },
          areaStyle: {
            opacity: 0.5,
          },
          emphasis: {
            focus: "series",
          },
          data: [320, 332, 301, 334, 390, 330, 320],
        },
        {
          name: "Facebook",
          type: "line",
          smooth: true,
          symbol: "circle",
          lineStyle: {
            width: 1,
            opacity: 0.5,
          },
          label: {
            show: false,
            position: "top",
          },
          areaStyle: {
            opacity: 0.5,
          },
          emphasis: {
            focus: "series",
          },
          data: [820, 20, 901, 934, 40, 1330, 1320],
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