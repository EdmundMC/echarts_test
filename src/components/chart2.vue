<template>
  <div id="wrapper">
    <div id="map" ref="map" class="cell"></div>
    <div id="sankey" ref="sankey" class="cell">
      <div id="country">{{ this.province }}</div>
      <img src="../assets/russia.jpg" v-show="this.province == '俄罗斯'" />
      <img src="../assets/usa.jpg" v-show="this.province == '美国'" />
      <img src="../assets/china.jpg" v-show="this.province == '中国'" />
      <img src="../assets/japan.jpg" v-show="this.province == '日本'" />
      <img src="../assets/yindo.jpg" v-show="this.province == '印度尼西亚'" />
      <img src="../assets/ruidian.jpg" v-show="this.province == '瑞典'" />
      <img src="../assets/usa.jpg" v-show="this.province == '希腊'" />
      <img src="../assets/german.jpg" v-show="this.province == '德国'" />
      <img src="../assets/france.jpg" v-show="this.province == '法国'" />
      <img src="../assets/ukelan.jpg" v-show="this.province == '乌克兰'" />
      <img src="../assets/italian.jpg" v-show="this.province == '意大利'" />
    </div>
    <div id="polyline" ref="polyline" class="cell"></div>
  </div>
</template>

<script>
require("../assets/vintage.js");

let colorPalette = [
  "#d87c7c",
  "#919e8b",
  "#61a0a8",
  "#6e7074",
  "#efa18d",
  "#787464",
  "#cc7e63",
  "#724e58",
  "#d7ab82",
];

export default {
  name: "chart",
  data() {
    return {
      stackData: {
        俄罗斯: [406, 531, 190, 320, 27],
        乌克兰: [27, 25, 831, 7.3, 1000],
        美国: [236, 213, 45, 912, 166],
        中国: [120, 232, 214, 174, 134],
        意大利: [40, 14, 22, 5.1, 751],
        日本: [119, 184, 136, 636, 185],
        德国: [30, 136, 136, 331, 175],
        法国: [76, 158, 61, 142, 90],
        瑞典: [329, 211, 89, 34, 35],
        印度尼西亚: [57, 40, 214, 62, 53],
        希腊: [20, 17, 231, 22, 48],
      },
      province: "俄罗斯",
      ciyun: {
        中国: [
          { name: " 冲突", value: 123 },
          { name: " 厉害", value: 164 },
          { name: " 超过", value: 131 },
          { name: " 美国", value: 152 },
          { name: " 普京", value: 115 },
          { name: " 乌克兰", value: 211 },
          { name: " 中国", value: 351 },
          { name: " 战争", value: 121 },
          { name: " 俄军", value: 561 },
          { name: " 专家", value: 123 },
          { name: " 战争", value: 164 },
          { name: " 能源", value: 131 },
          { name: " 可能", value: 152 },
          { name: " 欧盟", value: 115 },
          { name: " 世界", value: 211 },
          { name: " 不会", value: 351 },
          { name: " 克里米亚", value: 121 },
          { name: " 介入", value: 561 },
        ],
        美国: [
          { name: " 北约", value: 123 },
          { name: " 升级", value: 164 },
          { name: " 欧洲", value: 131 },
          { name: " 结束", value: 152 },
          { name: " 影响", value: 115 },
          { name: " 局势", value: 211 },
          { name: " 世界", value: 351 },
          { name: " 拜登", value: 121 },
          { name: " 战争", value: 561 },
          { name: " 冲突", value: 123 },
          { name: " 厉害", value: 164 },
          { name: " 超过", value: 131 },
          { name: " 美国", value: 152 },
          { name: " 普京", value: 115 },
          { name: " 乌克兰", value: 211 },
          { name: " 中国", value: 351 },
          { name: " 战争", value: 121 },
          { name: " 俄军", value: 561 },
        ],
        德国: [
          { name: " 持续", value: 123 },
          { name: " 战争", value: 164 },
          { name: " 超过", value: 131 },
          { name: " 可能", value: 152 },
          { name: " 爆发", value: 115 },
          { name: " 世界", value: 211 },
          { name: " 开始", value: 351 },
          { name: " 印度", value: 121 },
          { name: " 警告", value: 561 },
          { name: " 专家", value: 123 },
          { name: " 战争", value: 164 },
          { name: " 能源", value: 131 },
          { name: " 可能", value: 152 },
          { name: " 欧盟", value: 115 },
          { name: " 世界", value: 211 },
          { name: " 不会", value: 351 },
          { name: " 克里米亚", value: 121 },
          { name: " 介入", value: 561 },
        ],
        法国: [
          { name: " 无人机", value: 123 },
          { name: " 战争", value: 164 },
          { name: " 双方", value: 131 },
          { name: " 波兰", value: 152 },
          { name: " 战略", value: 115 },
          { name: " 世界", value: 211 },
          { name: " 战场", value: 351 },
          { name: " 总统", value: 121 },
          { name: " 发生", value: 561 },
          { name: " 冲突", value: 123 },
          { name: " 厉害", value: 164 },
          { name: " 超过", value: 131 },
          { name: " 美国", value: 152 },
          { name: " 普京", value: 115 },
          { name: " 乌克兰", value: 211 },
          { name: " 中国", value: 351 },
          { name: " 战争", value: 121 },
          { name: " 俄军", value: 561 },
        ],
        印度尼西亚: [
          { name: " 专家", value: 123 },
          { name: " 战争", value: 164 },
          { name: " 能源", value: 131 },
          { name: " 可能", value: 152 },
          { name: " 欧盟", value: 115 },
          { name: " 世界", value: 211 },
          { name: " 不会", value: 351 },
          { name: " 克里米亚", value: 121 },
          { name: " 介入", value: 561 },
        ],
        瑞典: [
          { name: " 俄方", value: 123 },
          { name: " 战争", value: 164 },
          { name: " 引发", value: 131 },
          { name: " 经济", value: 152 },
          { name: " 信号", value: 115 },
          { name: " 世界", value: 211 },
          { name: " 欧盟", value: 351 },
          { name: " 克里米亚", value: 121 },
          { name: " 信号", value: 561 },
          { name: " 攻击", value: 123 },
          { name: " 战争", value: 164 },
          { name: " 即将", value: 131 },
          { name: " 准备", value: 152 },
          { name: " 走向", value: 115 },
          { name: " 谈判", value: 211 },
          { name: " 回应", value: 351 },
          { name: " 世界", value: 121 },
          { name: " 美国", value: 561 },
        ],
        希腊: [
          { name: " 美军", value: 123 },
          { name: " 国家", value: 164 },
          { name: " 导致", value: 131 },
          { name: " 战争", value: 152 },
          { name: " 导弹", value: 115 },
          { name: " 世界", value: 211 },
          { name: " 变化", value: 351 },
          { name: " 出现", value: 121 },
          { name: " 反攻", value: 561 },
          { name: " 俄方", value: 123 },
          { name: " 战争", value: 164 },
          { name: " 引发", value: 131 },
          { name: " 经济", value: 152 },
          { name: " 信号", value: 115 },
          { name: " 世界", value: 211 },
          { name: " 欧盟", value: 351 },
          { name: " 克里米亚", value: 121 },
          { name: " 信号", value: 561 },
        ],
        俄罗斯: [
          { name: " 乌克兰", value: 123 },
          { name: " 战争", value: 164 },
          { name: " 赢家", value: 131 },
          { name: " 变化", value: 152 },
          { name: " 欧盟", value: 115 },
          { name: " 世界", value: 211 },
          { name: " 能源", value: 351 },
          { name: " 克里米亚", value: 121 },
          { name: " 总统", value: 561 },
          { name: " 国家", value: 164 },
          { name: " 导致", value: 131 },
          { name: " 战争", value: 152 },
          { name: " 导弹", value: 115 },
          { name: " 世界", value: 211 },
          { name: " 变化", value: 351 },
          { name: " 出现", value: 121 },
          { name: " 反攻", value: 561 },
          { name: " 俄方", value: 123 },
          { name: " 战争", value: 164 },
          { name: " 引发", value: 131 },
        ],
        乌克兰: [
          { name: " 历史", value: 123 },
          { name: " 战争", value: 164 },
          { name: " 能源", value: 131 },
          { name: " 基辅", value: 152 },
          { name: " 欧盟", value: 115 },
          { name: " 世界", value: 211 },
          { name: " 军事", value: 351 },
          { name: " 参战", value: 121 },
          { name: " 克里米亚", value: 561 },
          { name: " 俄方", value: 123 },
          { name: " 战争", value: 164 },
          { name: " 引发", value: 131 },
          { name: " 经济", value: 152 },
          { name: " 信号", value: 115 },
          { name: " 世界", value: 211 },
          { name: " 欧盟", value: 351 },
          { name: " 克里米亚", value: 121 },
          { name: " 信号", value: 561 },
        ],
        日本: [
          { name: " 表态", value: 123 },
          { name: " 外长", value: 164 },
          { name: " 希望", value: 131 },
          { name: " 制裁", value: 152 },
          { name: " 尽快", value: 115 },
          { name: " 战争", value: 211 },
          { name: " 和平", value: 351 },
          { name: " 国际", value: 121 },
          { name: " 到底", value: 561 },
          { name: " 攻击", value: 123 },
          { name: " 战争", value: 164 },
          { name: " 即将", value: 131 },
          { name: " 准备", value: 152 },
          { name: " 走向", value: 115 },
          { name: " 谈判", value: 211 },
          { name: " 回应", value: 351 },
          { name: " 世界", value: 121 },
          { name: " 美国", value: 561 },
        ],
        意大利: [
          { name: " 攻击", value: 123 },
          { name: " 战争", value: 164 },
          { name: " 即将", value: 131 },
          { name: " 准备", value: 152 },
          { name: " 走向", value: 115 },
          { name: " 谈判", value: 211 },
          { name: " 回应", value: 351 },
          { name: " 世界", value: 121 },
          { name: " 美国", value: 561 },
          { name: " 战争", value: 211 },
          { name: " 和平", value: 351 },
          { name: " 国际", value: 121 },
          { name: " 到底", value: 561 },
          { name: " 攻击", value: 123 },
          { name: " 战争", value: 164 },
          { name: " 即将", value: 131 },
          { name: " 准备", value: 152 },
          { name: " 走向", value: 115 },
        ],
      },
    };
  },
  methods: {
    randomData() {
      return Math.round(Math.random() * 500);
    },
    drawChart2() {
      let myChart = this.$echarts.init(this.$refs.map, "vintage");

      //绘制图表

      let option = {
        title: {
          text: "词云",
          textStyle: {},
          top: 14,
          left: 26,
        },
        series: [
          {
            type: "wordCloud",
            size: ["80%", "80%"],
            rotationRange: [0, 0],
            textPadding: 0,
            autoSize: {
              enable: true,
              minSize: 14,
            },
            left: "center",
            top: "center",
            right: null,
            bottom: null,
            textStyle: {
              color: function () {
                return colorPalette[Math.round(Math.random() * 160)%9];
              },
            },
            data: this.ciyun[this.province],
          },
        ],
      };

      myChart.setOption(option);
      window.addEventListener("resize", () => myChart.resize());
    },
    drawChart3() {
      let myChart = this.$echarts.init(this.$refs.polyline, "vintage");
      let option = {
        title: {
          text: "热度折线图",
          textStyle: {},
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
            data: [
              "2022/2/22",
              "2022/4/7",
              "2022/5/21",
              "2022/9/5",
              "2022/10/23",
            ],
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        label: {
          show: true,
        },
        series: [
          {
            name: this.province,
            type: "line",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: this.stackData[this.province],
          },
        ],
      };
      myChart.setOption(option);
      window.addEventListener("resize", () => myChart.resize());
    },
  },
  mounted() {
    this.province = this.$route.query.province;
    this.drawChart2();
    this.drawChart3();
  },
};
</script>

<style scoped>
#wrapper {
  display: grid;
  grid-template-rows: repeat(10, 8.95vh);
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.5em;
}

#map {
  grid-row: 1/8;
  grid-column: 1/3;
  width:100%;
}

#sankey {
  grid-row: 1/8;
  grid-column: 3/4;
  width: 100%;
  height: auto;
  margin: 0;
}

#polyline {
  grid-row: 8/11;
  grid-column: 1/4;
  width: 100%;
  height: auto;
  margin: 0;
}

.cell {
  border: 1px solid #fcd59a;
  border-radius: 5px;
}

img {
  width: 60%;
  margin-top: 30%;
  margin-left: 20%;
  margin-right: 20%;
}

#country {
  font-weight: 600;
  font-size: large;
  text-align: left;
  width: 80%;
  height: 1%;
  margin-top: 5%;
  margin-left: 5%;
}
</style>