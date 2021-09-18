<template>
  <v-chart class="chart" :option="option" />
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart } from "echarts/charts";
import { LabelLayout, UniversalTransition } from "echarts/features";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  VisualMapComponent,
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, defineComponent } from "vue";

use([
  CanvasRenderer,
  BarChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LabelLayout,
  UniversalTransition,
  VisualMapComponent,
]);

export default defineComponent({
  name: "Barchart",
  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: "light",
  },
  setup() {
    const option = ref({
      // color: ["#1A4645"],
      title: {
        text: "Monthly Visitors",
        left: "24",
        top: 5,
        textStyle: {
          fontFamily: "cormorant garamond",
          color: "white",
          fontSize: 16,
          backgroundColor: "transparent",
          fontWeight: "normal",
        },
      },
      dataset: {
        source: [
          [
            "type",
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          [
            "Activity",
            500,
            450,
            400,
            400,
            400,
            400,
            450,
            500,
            500,
            400,
            450,
            400,
          ],
        ],
      },
      grid: {
        left: "10%",
        right: "5%",
        bottom: "16%",
        top: "25%",
        containLabel: false,
      },
      xAxis: {
        type: "category",
        axisTick: {
          show: false,
        },
        // axisLine: {
        //   lineStyle: {
        //     color: "#dedede",
        //     width: 1,
        //   }
        // },
        axisLabel: {
          fontFamily: "cormorant garamond",
          color: "#dedede",
        },
      },
      yAxis: {
        axisTick: {
          length: 5,
        },
        axisLabel: {
          fontFamily: "cormorant garamond",
          color: "#b8b8b8",
          fontSize: 14,
        },
        splitLine: {
          lineStyle: {
            color: "gray",
            opacity: 0.1,
          },
        },
        axisLine: {
          onZero: false,
          lineStyle: {
            color: "#b8b8b8",
          },
        },
      },
      visualMap: {
        show: false,
        min: 80,
        max: 700,
        inRange: {
          colorLightness: [0, 1],
        },
      },
      series: [
        {
          type: "bar",
          seriesLayoutBy: "row",
          barWidth: 16,
          selectedMode: "single",
          colorBy: "data",
          height: 255,
          cursor: "none",
          labelLayout: {
            x: "40%",
            y: "80%",
          },
          itemStyle: {
            borderRadius: [4],
            color: "#c23531",
          },
          emphasis: {
            focus: "data",
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.4)",
            },
          },
        },
      ],
    });
    return { option };
  },
});
</script>