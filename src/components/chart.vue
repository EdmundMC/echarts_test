<template>
  <div id="wrapper">
    <div id="map" ref="map" class="cell"></div>
    <div id="main" ref="main" class="cell"></div>
    <div id="sankey" ref="sankey" class="cell"></div>
    <div id="polyline" ref="polyline" class="cell"></div>
  </div>
</template>

<script>
require("../assets/china.json");
require("../assets/vintage.js");

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
      let myChart = this.$echarts.init(this.$refs.main, 'vintage');
      let option = {
        title: {
          text: "堆叠柱状图",
          textStyle: {
          },
        },
        grid: {
          y: 60,
          y2: 30,
        },
        legend: {
          y: 30,
        },
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
      window.addEventListener("resize", () => myChart.resize());
    },
    drawChart2() {
      let myChart = this.$echarts.init(this.$refs.sankey,'vintage');
      let option = {
        title: {
          text: "桑基图",
          textStyle: {
          },
        },
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
      window.addEventListener("resize", () => myChart.resize());
    },
    drawChart3() {
      let myChart = this.$echarts.init(this.$refs.map, 'vintage');

      function randomData() {
        return Math.round(Math.random() * 500);
      }

      //绘制图表
      let optionMap = {
        title: {
          text: "地图",
          textStyle: {
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
            color: ["#f4e9a3", "#c0464d"], //取值范围的颜色
          },
          show: true, //图注
        },
        //配置属性
        series: [
          {
            name: "数据",
            type: "map",
            map: "china",
            roam: false,
            label: {
              show: false, //省份名称
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
      window.addEventListener("resize", () => myChart.resize());
    },
    drawChart4() {
      let myChart = this.$echarts.init(this.$refs.polyline,'vintage');
      let option = {
        title: {
          text: "堆叠折线图",
          textStyle: {
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
          y: 30,
          data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "Email",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "Union Ads",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: "Video Ads",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: [150, 232, 201, 154, 190, 330, 410],
          },
          {
            name: "Direct",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: [320, 332, 301, 334, 390, 330, 320],
          },
          {
            name: "Search Engine",
            type: "line",
            stack: "Total",
            label: {
              show: true,
              position: "top",
            },
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320],
          },
        ],
      };
      myChart.setOption(option);
      window.addEventListener("resize", () => myChart.resize());
    },
  },
  mounted() {
    this.drawChart();
    this.drawChart2();
    this.drawChart3();
    this.drawChart4();
  },
};
</script>

<style scoped>
#wrapper {
  display: grid;
  grid-template-rows: 70vh 27vh;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.5em;
}

#map {
  grid-row: 1/2;
  grid-column: 1/3;
  height: auto;
}

#main {
  width: 100%;
  height: auto;
  grid-row: 2/3;
  grid-column: 1/2;
  margin: 0;
}

#sankey {
  grid-row: 1/3;
  grid-column: 3/4;
  width: 100%;
  height: auto;
  margin: 0;
}

#polyline {
  grid-row: 2/3;
  grid-column: 2/3;
  width: 100%;
  height: auto;
  margin: 0;
}

.cell {
  border: 1px solid #fcd59a;
  border-radius: 5px;
}
</style>