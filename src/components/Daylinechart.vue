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
    var colors = [ "#EE6666"];

    var option = ref({
      color: colors,
      title: {
        text: "Active Users",
        left: "16",
        top: 5,
        borderColor: "yellow",
        borderLeft: 4,
        textStyle: {
          fontFamily: "cormorant garamond",
          color: "white",
          fontSize: 16,
          backgroundColor: "transparent",
          fontWeight: "normal",
        },
      },

      tooltip: {
        trigger: "none",
        axisPointer: {
          type: "cross",
        },
      },

      grid: {
        // left: "5%",
        // right: "5%",
        bottom: "20%",
        top: "25%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          axisTick: {
            alignWithLabel: true,
          },
          splitLine: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            show: true,
          },
          axisPointer: {
            label: {
              formatter: function (params) {
                return (
                  "降水量  " +
                  params.value +
                  (params.seriesData.length
                    ? "：" + params.seriesData[0].data
                    : "")
                );
              },
            },
          },
          data: [
            "8-Sep",
            "9-Sep",
            "10-Sep",
            "11-Sep",
            "12-Sep",
            "13-Sep",
            "14-Sep",
          ],
        },
      ],
      yAxis: [
        {
          type: "value",
          splitLine: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
        },
      ],
      series: [
        {
          //   name: "2016 降水量",
          type: "line",
          smooth: true,
          emphasis: {
            focus: "series",
          },
          data: [3.9, 11.1, 58.7, 231.6, 69.2, 48.3, 0.7],
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