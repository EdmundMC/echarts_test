<template>
  <div id="wrapper">
    <div id="map" ref="map" class="cell"></div>
    <div id="main" ref="main" class="cell"></div>
    <div id="sankey" ref="sankey" class="cell"></div>
  </div>
</template>

<script>
require("../assets/china.json");

let color = [
  "#344b5c",
  "#3c676a",
  "#44ac84",
  "#44bb84",
  "#3c987a",
  "#40a67c",
  "#44cc8c",
];

export default {
  name: "chart",
  methods: {
    drawChart() {
      let myChart = this.$echarts.init(this.$refs.main);
      let option = {
        color: color,
        title: {
          text: "堆叠柱状图",
          textStyle: {
            color: "#44cc8c",
          },
        },
        legend: {},
        tooltip: {},
        dataset: {
          // 提供一份数据。
          source: [
            ["product", "2015", "2016", "2017"],
            ["Matcha Latte", 43.3, 85.8, 93.7],
            ["Milk Tea", 83.1, 73.4, 55.1],
            ["Cheese Cocoa", 86.4, 65.2, 82.5],
            ["Walnut Brownie", 72.4, 53.9, 39.1],
          ],
          dimensions: [
            "product",
            { name: "2015", type: "float" },
            { name: "2016", type: "float" },
            { name: "2017", type: "float" },
          ],
        },
        // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
        xAxis: { type: "category" },
        // 声明一个 Y 轴，数值轴。
        yAxis: {},
        series: [
          {
            type: "bar",
            stack: "x",
          },
          {
            type: "bar",
            stack: "x",
          },
          {
            type: "bar",
            stack: "x",
          },
        ],
      };
      myChart.setOption(option);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },
    drawChart2() {
      let myChart = this.$echarts.init(this.$refs.sankey);
      let option = {
        title: {
          text: "桑基图",
          textStyle: {
            color: "#44cc8c",
          },
        },
        color: color,
        tooltip: {
          trigger: "item",
          triggerOn: "mousemove",
        },
        animation: false,
        series: [
          {
            type: "sankey",
            bottom: "10%",
            emphasis: {
              focus: "adjacency",
            },
            data: [
              { name: "a" },
              { name: "b" },
              { name: "a1" },
              { name: "b1" },
              { name: "c" },
              { name: "e" },
            ],
            links: [
              { source: "a", target: "a1", value: 5 },
              { source: "e", target: "b", value: 3 },
              { source: "a", target: "b1", value: 3 },
              { source: "b1", target: "a1", value: 1 },
              { source: "b1", target: "c", value: 2 },
              { source: "b", target: "c", value: 1 },
            ],
            orient: "vertical",
            label: {
              position: "top",
            },
            lineStyle: {
              color: "source",
              curveness: 0.5,
            },
          },
        ],
      };
      myChart.setOption(option);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },
    drawChart3() {
      let myChartContainer = this.$refs.map;

      let myChart = this.$echarts.init(myChartContainer);

      function randomData() {
        return Math.round(Math.random() * 500);
      }

      //绘制图表
      let optionMap = {
        title: {
          text: "地图",
          textStyle: {
            color: "#44cc8c",
          },
        },
        tooltip: {
          trigger: "item",
        },
        //左侧小导航图表
        visualMap: {
          min: 0,
          max: 600,
          left: "left",
          top: "bottom",
          text: ["高", "低"], //取值范围的文字
          inRange: {
            color: ["#44cc8c", "#344b5c"], //取值范围的颜色
          },
          show: true, //图注
        },
        //配置属性
        series: [
          {
            name: "数据",
            type: "map",
            mapType: "china",
            roam: false,
            label: {
              normal: {
                show: false, //省份名称
              },
            },
            emphasis: {
              show: false,
            },
            data: [
              { name: "北京", value: "100" },

              { ame: "天津", value: randomData() },

              { name: "上海", value: randomData() },

              { name: "重庆", value: randomData() },

              { name: "河北", value: randomData() },

              { name: "河南", value: randomData() },

              { name: "云南", value: randomData() },

              { name: "辽宁", value: randomData() },

              { name: "黑龙江", value: randomData() },

              { name: "湖南", value: randomData() },

              { name: "天津", value: randomData() },

              { name: "安徽", value: randomData() },

              { name: "山东", value: randomData() },

              { name: "新疆", value: randomData() },

              { name: "江苏", value: randomData() },

              { name: "浙江", value: randomData() },

              { name: "江西", value: randomData() },

              { name: "湖北", value: randomData() },

              { name: "广西", value: randomData() },

              { name: "甘肃", value: randomData() },

              { name: "山西", value: randomData() },

              { name: "内蒙古", value: randomData() },

              { name: "陕西", value: randomData() },

              { name: "吉林", value: randomData() },

              { name: "福建", value: randomData() },

              { name: "贵州", value: randomData() },

              { name: "广东", value: randomData() },

              { name: "青海", value: randomData() },

              { name: "西藏", value: randomData() },

              { name: "四川", value: randomData() },

              { name: "宁夏", value: randomData() },

              { name: "海南", value: randomData() },

              { name: "台湾", value: randomData() },

              { name: "香港", value: randomData() },

              { name: "澳门", value: randomData() },

              { name: "南海诸岛", value: 0 },
            ], //数据
          },
        ],
      };
      myChart.setOption(optionMap);
      window.onresize = function () {
        myChart.resize();
      };
    },
  },
  mounted() {
    this.drawChart();
    this.drawChart2();
    this.drawChart3();
  },
};
</script>

<style scoped>
#wrapper {
  display: grid;
  grid-template-rows: 70vh 30vh;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: .5em;
}


#map {
  grid-column: 1/5;
  height: auto;
}

#main {
  width: 100%;
  height: auto;
  margin: 0;
}

#sankey {
  width: 100%;
  height: auto;
  margin: 0;
}

.cell {
  border: 1px solid #44cc8d2b;
  border-radius: 5px;
}
</style>