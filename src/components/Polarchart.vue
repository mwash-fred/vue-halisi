<template>
  <v-chart class="chart" :option="option" />
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { Polarchart } from "echarts/charts";
import { LabelLayout, UniversalTransition } from "echarts/features";
import {
  TitleComponent,

} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, defineComponent } from "vue";

use([
  CanvasRenderer,
  Polarchart,
  TitleComponent,
  LabelLayout,
  UniversalTransition,
]);

export default defineComponent({
  name: "Polarchart",
  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: "vintage",
  },
  setup() {
    const option = ref({
      angleAxis: {
        type: "category",
        data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      },
      radiusAxis: {},
      polar: {},
      series: [
        {
          type: "bar",
          data: [1, 2, 3, 4, 3, 5, 1],
          coordinateSystem: "polar",
          name: "A",
          stack: "a",
          emphasis: {
            focus: "series",
          },
        },
        {
          type: "bar",
          data: [2, 4, 6, 1, 3, 2, 1],
          coordinateSystem: "polar",
          name: "B",
          stack: "a",
          emphasis: {
            focus: "series",
          },
        },
        {
          type: "bar",
          data: [1, 2, 3, 4, 1, 2, 5],
          coordinateSystem: "polar",
          name: "C",
          stack: "a",
          emphasis: {
            focus: "series",
          },
        },
      ],
      legend: {
        show: true,
        data: ["A", "B", "C"],
      },
    });
    return { option };
  },
});
</script>