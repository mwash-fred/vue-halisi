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
]);

export default defineComponent({
  name: "Barchart",
  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: "vintage",
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
            300,
            300,
            400,
            400,
            400,
            250,
            400,
            200,
            400,
            150,
            200,
          ],
        ],
      },
      xAxis: {
        type: "category",
        axisTick: {
          show: false,
        },

      },
      yAxis: { 
        axisTick: {
          length: 5
        },
        axisLine: {
          onZero: false,
          lineStyle: {
            color: "#b8b8b8",
            width: 0
          }
        }
      },
      series: [
        {
          type: "bar",
          seriesLayoutBy: "row",
          barWidth: 24,
          selectedMode: "single",
          colorBy: "data",
          height: 255,
          cursor: "none",
          labelLayout: {
            x: "40%",
            y: "80%",
          },
          itemStyle: {
            borderRadius: [3],
          },
          emphasis: {
            focus: 'data',
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