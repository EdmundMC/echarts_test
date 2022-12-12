<template>
  <div id="wrapper">
    <div id="maps" class="cell">
      <div id="map" ref="map"></div>
      <div id="timeline" ref="timeline"></div>
    </div>
    <div id="main" ref="main" class="cell"></div>
    <div id="sankey" ref="sankey" class="cell"></div>
    <div id="sankey2" ref="sankey2" class="cell"></div>
    <div id="polyline" ref="polyline" class="cell"></div>
  </div>
</template>

<script>
require("../assets/world.json");
require("../assets/vintage.js");

export default {
  name: "chart",
  data() {
    return {
      dataList: [
        {
          name: "阿富汗",
          value: this.randomData(), //账户余额
          cityName: "(亚洲)阿富汗", //位置 和国家
          proportion: "0", //比例
          accountNum: "0", //账户个数
        },
        {
          name: "安哥拉",
          value: this.randomData(),
          cityName: "(非洲)安哥拉",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "阿尔巴尼亚",
          value: this.randomData(),
          cityName: "(欧洲)阿尔巴尼亚",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "阿拉伯联合酋长国",
          value: this.randomData(),
          cityName: "(亚洲)阿拉伯联合酋长国",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "阿根廷",
          value: this.randomData(),
          cityName: "(南美洲)阿根廷",
          proportion: "0",
          accountNum: "0",
        },
        {
          name: "亚美尼亚",
          value: this.randomData(),
          cityName: "(亚洲)亚美尼亚",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "南极洲陆地",
          value: this.randomData(),
          cityName: "(南极洲)南极洲陆地",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "澳大利亚",
          value: this.randomData(),
          cityName: "(大洋洲)澳大利亚",
          proportion: "5%",
          accountNum: "20",
        },
        {
          name: "奥地利",
          value: this.randomData(),
          cityName: "(欧州)奥地利",
          proportion: "0",
          accountNum: "0",
        },
        {
          name: "阿塞拜疆",
          value: this.randomData(),
          cityName: "(亚州)阿塞拜疆",
          proportion: "0",
          accountNum: "0",
        },
        {
          name: "布隆迪",
          value: this.randomData(),
          cityName: "(非州)布隆迪",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "比利时",
          value: this.randomData(),
          cityName: "(欧州)比利时",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "贝宁",
          value: this.randomData(),
          cityName: "(非州)贝宁",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "布基纳法索",
          value: this.randomData(),
          cityName: "(非州)布基纳法索",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "基里巴斯",
          value: this.randomData(),
          cityName: "基里巴斯",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "孟加拉国",
          value: this.randomData(),
          cityName: "(亚州)孟加拉国",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "保加利亚",
          value: this.randomData(),
          cityName: "(欧州)保加利亚",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "巴哈马群岛",
          value: this.randomData(),
          cityName: "(南美州)巴哈马群岛",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "波斯尼亚和赫尔兹",
          value: this.randomData(),
          cityName: "(欧州)波斯尼亚和赫尔兹",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "白俄罗斯",
          value: this.randomData(),
          cityName: "(欧州)白俄罗斯",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "伯利兹",
          value: this.randomData(),
          cityName: "(北美州)伯利兹",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "百慕大群岛",
          value: this.randomData(),
          cityName: "(北美州)百慕大群岛",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "玻利维亚",
          value: this.randomData(),
          cityName: "(南美州)玻利维亚",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "巴西",
          value: this.randomData(),
          cityName: "(南美州)巴西",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "巴西文莱",
          value: this.randomData(),
          cityName: "(南美州)巴西文莱",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "不丹",
          value: this.randomData(),
          cityName: "(亚州)不丹",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "博茨瓦纳",
          value: this.randomData(),
          cityName: "(非州)博茨瓦纳",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "中非共和国",
          value: this.randomData(),
          cityName: "(非州)中非共和国",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "加拿大",
          value: this.randomData(),
          cityName: "(北美州)加拿大",
          proportion: "10%",
          accountNum: "30",
        },
        {
          name: "瑞士",
          value: this.randomData(),
          cityName: "(欧州)瑞士",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "智利",
          value: this.randomData(),
          cityName: "(南美州)智利",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "中国",
          value: this.randomData(), //账户余额
          cityName: "(亚洲)中国", //位置 和国家
          proportion: "60%", //比例
          accountNum: "1200", //账户个数
        },
        {
          name: "Côte d'Ivoire",
          value: this.randomData(),
          cityName: "(非州)象牙海岸",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "喀麦隆",
          value: this.randomData(),
          cityName: "(非州)喀麦隆",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "刚果共和国",
          value: this.randomData(),
          cityName: "(非州)刚果共和国",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "刚果",
          value: this.randomData(),
          cityName: "(非州)刚果",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "哥伦比亚",
          value: this.randomData(),
          cityName: "(南美州)哥伦比亚",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "哥伦比亚哥斯达黎加",
          value: this.randomData(),
          cityName: "(北美州)哥伦比亚哥斯达黎加",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "古巴",
          value: this.randomData(),
          cityName: "(北美州)古巴",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "北塞浦路斯",
          value: this.randomData(),
          cityName: "(欧州)北塞浦路斯",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "塞浦路斯",
          value: this.randomData(),
          cityName: "(亚州)塞浦路斯",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "捷克共和国",
          value: this.randomData(),
          cityName: "(欧州)捷克共和国",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "德国",
          value: this.randomData(),
          cityName: "(欧州)德国",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "吉布提",
          value: this.randomData(),
          cityName: "(非州)吉布提",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "丹麦",
          value: this.randomData(),
          cityName: "(欧州)丹麦",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "多米尼加共和国",
          value: this.randomData(),
          cityName: "(北美州)多米尼加共和国",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "阿尔及利亚",
          value: this.randomData(),
          cityName: "(欧州)阿尔及利亚",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "厄瓜多尔",
          value: this.randomData(),
          cityName: "(南美州)厄瓜多尔",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "埃及",
          value: this.randomData(),
          cityName: "(非州)埃及",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "厄立特里亚",
          value: this.randomData(),
          cityName: "(非州)厄立特里亚",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "西班牙",
          value: this.randomData(),
          cityName: "(欧州)西班牙",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "爱沙尼亚",
          value: this.randomData(),
          cityName: "(欧州)爱沙尼亚",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "埃塞俄比亚",
          value: this.randomData(),
          cityName: "(非州)埃塞俄比亚",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "芬兰",
          value: this.randomData(),
          cityName: "(欧州)芬兰",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "斐济",
          value: this.randomData(),
          cityName: "(大洋州)斐济",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "福克兰群岛",
          value: this.randomData(),
          cityName: "(南美州)福克兰群岛",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "法国",
          value: this.randomData(),
          cityName: "(欧州)法国",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "加蓬",
          value: this.randomData(),
          cityName: "(非州)加蓬",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "英国",
          value: this.randomData(),
          cityName: "(欧州)英国",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "佐治亚州",
          value: this.randomData(),
          cityName: "(北美州)佐治亚州",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "加纳",
          value: this.randomData(),
          cityName: "(非州)加纳",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "几内亚",
          value: this.randomData(),
          cityName: "(非州)几内亚",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "冈比亚",
          value: this.randomData(),
          cityName: "(非州)冈比亚",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "几内亚比绍",
          value: this.randomData(),
          cityName: "(非州)几内亚比绍",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "几内亚比索赤道几内亚",
          value: this.randomData(),
          cityName: "(非州)几内亚比索赤道几内亚",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "希腊",
          value: this.randomData(),
          cityName: "(欧州)希腊",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "格陵兰岛",
          value: this.randomData(),
          cityName: "(北美州)格陵兰岛",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "危地马拉",
          value: this.randomData(),
          cityName: "(北美州)危地马拉",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "危地马拉法属圭亚那",
          value: this.randomData(),
          cityName: "(南美州)危地马拉法属圭亚那",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "圭亚那",
          value: this.randomData(),
          cityName: "(南美州)圭亚那",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "洪都拉斯",
          value: this.randomData(),
          cityName: "(北美州)洪都拉斯",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "克罗地亚",
          value: this.randomData(),
          cityName: "(南美州)克罗地亚",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "海地",
          value: this.randomData(),
          cityName: "(北美州)海地",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "匈牙利",
          value: this.randomData(),
          cityName: "(欧州)匈牙利",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "印度尼西亚",
          value: this.randomData(),
          cityName: "(亚州)印度尼西亚",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "印度",
          value: this.randomData(),
          cityName: "(亚州)印度",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "爱尔兰",
          value: this.randomData(),
          cityName: "(欧州)爱尔兰",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "伊朗",
          value: this.randomData(),
          cityName: "(亚州)伊朗",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "伊拉克",
          value: this.randomData(),
          cityName: "(亚州)伊拉克",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "冰岛",
          value: this.randomData(),
          cityName: "(欧州)冰岛",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "以色列",
          value: this.randomData(),
          cityName: "(亚州)以色列",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "意大利",
          value: this.randomData(),
          cityName: "(欧州)意大利",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "牙买加",
          value: this.randomData(),
          cityName: "(北美州)牙买加",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "约旦",
          value: this.randomData(),
          cityName: "(亚州)约旦",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "日本",
          value: this.randomData(),
          cityName: "(亚州)日本",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "哈萨克斯坦",
          value: this.randomData(),
          cityName: "(亚州)哈萨克斯坦",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "肯尼亚",
          value: this.randomData(),
          cityName: "(非州)肯尼亚",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "吉尔吉斯斯坦",
          value: this.randomData(),
          cityName: "(亚州)吉尔吉斯斯坦",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "柬埔寨",
          value: this.randomData(),
          cityName: "(亚州)柬埔寨",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "韩国",
          value: this.randomData(),
          cityName: "(亚州)韩国",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "科索沃",
          value: this.randomData(),
          cityName: "(欧州)科索沃",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "科威特",
          value: this.randomData(),
          cityName: "(亚州)科威特",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "老挝",
          value: this.randomData(),
          cityName: "(亚州)老挝",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "黎巴嫩",
          value: this.randomData(),
          cityName: "(亚州)黎巴嫩",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "利比里亚",
          value: this.randomData(),
          cityName: "(非州)利比里亚",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "利比亚",
          value: this.randomData(),
          cityName: "(非州)利比亚",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "斯里兰卡",
          value: this.randomData(),
          cityName: "(亚州)斯里兰卡",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "莱索托",
          value: this.randomData(),
          cityName: "(非州)莱索托",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "立陶宛",
          value: this.randomData(),
          cityName: "(欧州)立陶宛",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "卢森堡",
          value: this.randomData(),
          cityName: "(欧州)卢森堡",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "拉脱维亚",
          value: this.randomData(),
          cityName: "(欧州)拉脱维亚",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "摩洛哥",
          value: this.randomData(),
          cityName: "(非州)摩洛哥",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "摩尔多瓦",
          value: this.randomData(),
          cityName: "(欧州)摩尔多瓦",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "马达加斯加",
          value: this.randomData(),
          cityName: "(非州)马达加斯加",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "墨西哥",
          value: this.randomData(),
          cityName: "(南美州)墨西哥",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "马其顿",
          value: this.randomData(),
          cityName: "(欧州)马其顿",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "马里",
          value: this.randomData(),
          cityName: "(非州)马里",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "缅甸",
          value: this.randomData(),
          cityName: "(亚州)缅甸",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "黑山",
          value: this.randomData(),
          cityName: "(欧州)黑山",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "蒙古",
          value: this.randomData(),
          cityName: "(亚州)蒙古",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "莫桑比克",
          value: this.randomData(),
          cityName: "(非州)莫桑比克",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "毛里塔尼亚",
          value: this.randomData(),
          cityName: "(非州)毛里塔尼亚",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "马拉维",
          value: this.randomData(),
          cityName: "(非州)马拉维",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "马来西亚",
          value: this.randomData(),
          cityName: "(亚州)马来西亚",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "纳米比亚",
          value: this.randomData(),
          cityName: "(非州)纳米比亚",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "新喀里多尼亚",
          value: this.randomData(),
          cityName: "(大洋州)新喀里多尼亚",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "尼日尔",
          value: this.randomData(),
          cityName: "(非州)尼日尔",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "尼日利亚",
          value: this.randomData(),
          cityName: "(非州)尼日利亚",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "尼加拉瓜",
          value: this.randomData(),
          cityName: "(北美州)尼加拉瓜",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "荷兰",
          value: this.randomData(),
          cityName: "(欧州)荷兰",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "挪威",
          value: this.randomData(),
          cityName: "(欧州)挪威",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "尼泊尔",
          value: this.randomData(),
          cityName: "(亚州)尼泊尔",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "新西兰",
          value: this.randomData(),
          cityName: "(大洋州)新西兰",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "阿曼",
          value: this.randomData(),
          cityName: "(大洋州)阿曼",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "巴基斯坦",
          value: this.randomData(),
          cityName: "(亚州)巴基斯坦",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "巴拿马",
          value: this.randomData(),
          cityName: "(北美州)巴拿马",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "秘鲁",
          value: this.randomData(),
          cityName: "(南美州)秘鲁",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "菲律宾",
          value: this.randomData(),
          cityName: "(亚州)菲律宾",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "巴布亚新几内亚",
          value: this.randomData(),
          cityName: "(大洋州)巴布亚新几内亚",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "波兰",
          value: this.randomData(),
          cityName: "(欧州)波兰",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "波多黎各",
          value: this.randomData(),
          cityName: "(北美州)波多黎各",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "朝鲜",
          value: this.randomData(),
          cityName: "(亚州)朝鲜",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "葡萄牙",
          value: this.randomData(),
          cityName: "(欧州)葡萄牙",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "巴拉圭",
          value: this.randomData(),
          cityName: "(南美州)巴拉圭",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "卡塔尔",
          value: this.randomData(),
          cityName: "(亚州)卡塔尔",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "罗马尼亚",
          value: this.randomData(),
          cityName: "(欧州)罗马尼亚",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "俄罗斯",
          cityName: "(欧洲)俄罗斯",
          proportion: "12%",
          value: this.randomData(),
          accountNum: 20,
        },
        {
          name: "卢旺达",
          value: this.randomData(),
          cityName: "(非州)卢旺达",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "撒哈拉沙漠",
          value: this.randomData(),
          cityName: "(非州)撒哈拉沙漠",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "沙特阿拉伯",
          value: this.randomData(),
          cityName: "(亚州)沙特阿拉伯",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "苏丹",
          value: this.randomData(),
          cityName: "(非州)苏丹",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "南苏丹",
          value: this.randomData(),
          cityName: "(非州)南苏丹",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "塞内加尔",
          value: this.randomData(),
          cityName: "(非州)塞内加尔",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "所罗门群岛",
          value: this.randomData(),
          cityName: "(大洋州)所罗门群岛",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "塞拉利昂",
          value: this.randomData(),
          cityName: "(非州)塞拉利昂",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "萨尔瓦多",
          value: this.randomData(),
          cityName: "(北美州)萨尔瓦多",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "索马里兰",
          value: this.randomData(),
          cityName: "(非州)索马里兰",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "索马里",
          value: this.randomData(),
          cityName: "(非州)索马里",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "塞尔维亚",
          value: this.randomData(),
          cityName: "(欧州)塞尔维亚",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "苏里南",
          value: this.randomData(),
          cityName: "(南美州)苏里南",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "斯洛伐克",
          value: this.randomData(),
          cityName: "(欧州)斯洛伐克",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "斯洛文尼亚",
          value: this.randomData(),
          cityName: "(欧州)斯洛文尼亚",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "瑞典",
          value: this.randomData(),
          cityName: "(欧州)瑞典",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "斯威士兰",
          value: this.randomData(),
          cityName: "(非州)斯威士兰",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "叙利亚",
          value: this.randomData(),
          cityName: "(亚州)叙利亚",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "乍得",
          value: this.randomData(),
          cityName: "(非州)乍得",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "多哥",
          value: this.randomData(),
          cityName: "(非州)多哥",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "泰国",
          value: this.randomData(),
          cityName: "(亚州)泰国",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "塔吉克斯坦",
          value: this.randomData(),
          cityName: "(亚州)塔吉克斯坦",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "土库曼斯坦",
          value: this.randomData(),
          cityName: "(亚州)土库曼斯坦",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "霍尼亚拉东帝汶",
          value: this.randomData(),
          cityName: "(亚州)霍尼亚拉东帝汶",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "特立尼达和多巴哥",
          value: this.randomData(),
          cityName: "(北美州)特立尼达和多巴哥",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "突尼斯",
          value: this.randomData(),
          cityName: "(非州)突尼斯",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "土耳其",
          value: this.randomData(),
          cityName: "(亚州)土耳其",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "坦桑尼亚联合共和国",
          value: this.randomData(),
          cityName: "(非州)坦桑尼亚联合共和国",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "乌干达",
          value: this.randomData(),
          cityName: "(非州)乌干达",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "乌克兰",
          value: this.randomData(),
          cityName: "(欧州)乌克兰",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "乌拉圭",
          value: this.randomData(),
          cityName: "(南美州)乌拉圭",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "美国",
          value: this.randomData(),
          cityName: "(北美州)美国",
          proportion: "10%",
          accountNum: "50",
        },
        {
          name: "乌兹别克斯坦",
          value: this.randomData(),
          cityName: "(亚州)乌兹别克斯坦",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "委内瑞拉",
          value: this.randomData(),
          cityName: "(南美州)委内瑞拉",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "越南",
          value: this.randomData(),
          cityName: "(亚州)越南",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "瓦努阿图",
          value: this.randomData(),
          cityName: "(大洋州)瓦努阿图",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "西岸",
          value: this.randomData(),
          cityName: "(亚州)西岸",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "也门",
          value: this.randomData(),
          cityName: "(亚州)也门",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "南非",
          value: this.randomData(),
          cityName: "(非州)南非",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "赞比亚",
          value: this.randomData(),
          cityName: "(非州)赞比亚",
          proportion: "0%",
          accountNum: "0",
        },
        {
          name: "津巴布韦",
          value: this.randomData(),
          cityName: "(非州)津巴布韦",
          proportion: "0%",
          accountNum: "0",
        },
      ],
      stackData: [
        [406, 531, 190, 320, 27],
        [27, 25, 831, 7.3, 1000],
        [236, 213, 45, 912, 166],
        [120, 232, 214, 174, 134],
        [40, 14, 22, 5.1, 751],
        [119, 184, 136, 636, 185],
        [30, 136, 136, 331, 175],
        [76, 158, 61, 142, 90],
        [329, 211, 89, 34, 35],
        [57, 40, 214, 62, 53],
        [20, 17, 231, 22, 48],
      ],
      mainData: [
        [45, 37.9, 37.5, 39.4, 24.3],
        [55, 62.1, 62.5, 60.6, 75.7],
        [95.1, 82.5, 85.1, 81.7, 33],
        [4.9, 17.5, 14.9, 18.3, 67],
      ],
    };
  },
  methods: {
    randomData() {
      return Math.round(Math.random() * 500);
    },
    drawChart() {
      let myChart = this.$echarts.init(this.$refs.main, "vintage");
      let option = {
        title: {
          text: "支持率百分比柱状图",
          textStyle: {},
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        legend: {
          y: 30,
          itemWidth: 10,
          itemHeight: 10,
        },
        tooltip: {},
        // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
        xAxis: {
          type: "category",
          data: ["1", "2", "3", "4", "5"],
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
        },
        // 声明一个 Y 轴，数值轴。
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "支持俄罗斯[油管]",
            type: "bar",
            stack: "x",
            data: this.mainData[0],
          },
          {
            name: "支持乌克兰[油管]",
            type: "bar",
            stack: "x",
            data: this.mainData[1],
          },
          {
            name: "支持俄罗斯[b站]",
            type: "bar",
            stack: "x",
            data: this.mainData[2],
          },
          {
            name: "支持乌克兰[b站]",
            type: "bar",
            stack: "x",
            data: this.mainData[3],
          },
        ],
      };
      myChart.setOption(option);
      window.addEventListener("resize", () => myChart.resize());
    },
    drawChart2() {
      let myChart = this.$echarts.init(this.$refs.sankey, "vintage");
      let option = {
        title: {
          text: "支持率桑基图",
          textStyle: {},
        },
        tooltip: {
          trigger: "item",
          triggerOn: "mousemove",
        },
        animation: false,
        series: [
          {
            type: "sankey",
            top: "15%",
            bottom: "15%",
            left: "5%",
            right: "5%",
            emphasis: {
              focus: "adjacency",
            },
            data: [
              { name: "b站" },
              { name: "油管" },
              { name: "支持俄罗斯" },
              { name: "支持乌克兰" },
            ],
            links: [
              { source: "b站", target: "支持俄罗斯", value: 95.1 },
              { source: "b站", target: "支持乌克兰", value: 4.9 },
              { source: "油管", target: "支持俄罗斯", value: 45 },
              { source: "油管", target: "支持乌克兰", value: 55 },
            ],
            orient: "vertical",
            label: {
              position: "top",
            },
            lineStyle: {
              color: "gradient",
              curveness: 0.5,
            },
          },
        ],
      };
      myChart.setOption(option);
      window.addEventListener("resize", () => myChart.resize());
    },
    drawChart3() {
      let myChart = this.$echarts.init(this.$refs.map, "vintage");

      //绘制图表

      let option = {
        title: {
          text: "热度世界地图",
          textStyle: {},
        },
        tooltip: {
          //数据格式化
          formatter: function (params, callback) {
            return params.name + "<br />" + "热度" + "：" + params.value;
          },
        },
        visualMap: {
          min: 0,
          max: 1000,
          left: "left",
          top: "bottom",
          text: ["高", "低"], //取值范围的文字
          inRange: {
            color: ["#f4e9a3", "#c0464d"],
            //取值范围的颜色
          },
          show: true, //图注
        },
        geo: {
          map: "world", //引入地图数据
          roam: false, //不开启缩放和平移
          zoom: 1, //视角缩放比例
          label: {
            show: false,
          },
          nameMap: {
            Canada: "加拿大",
            Turkmenistan: "土库曼斯坦",
            "Saint Helena": "圣赫勒拿",
            "Lao PDR": "老挝",
            Lithuania: "立陶宛",
            Cambodia: "柬埔寨",
            Ethiopia: "埃塞俄比亚",
            "Faeroe Is.": "法罗群岛",
            Swaziland: "斯威士兰",
            Palestine: "巴勒斯坦",
            Belize: "伯利兹",
            Argentina: "阿根廷",
            Bolivia: "玻利维亚",
            Cameroon: "喀麦隆",
            "Burkina Faso": "布基纳法索",
            Aland: "奥兰群岛",
            Bahrain: "巴林",
            "Saudi Arabia": "沙特阿拉伯",
            "Fr. Polynesia": "法属波利尼西亚",
            "Cape Verde": "佛得角",
            "W. Sahara": "西撒哈拉",
            Slovenia: "斯洛文尼亚",
            Guatemala: "危地马拉",
            Guinea: "几内亚",
            "Dem. Rep. Congo": "刚果（金）",
            Germany: "德国",
            Spain: "西班牙",
            Liberia: "利比里亚",
            Netherlands: "荷兰",
            Jamaica: "牙买加",
            "Solomon Is.": "所罗门群岛",
            Oman: "阿曼",
            Tanzania: "坦桑尼亚",
            "Costa Rica": "哥斯达黎加",
            "Isle of Man": "曼岛",
            Gabon: "加蓬",
            Niue: "纽埃",
            Bahamas: "巴哈马",
            "New Zealand": "新西兰",
            Yemen: "也门",
            Jersey: "泽西岛",
            Pakistan: "巴基斯坦",
            Albania: "阿尔巴尼亚",
            Samoa: "萨摩亚",
            "Czech Rep.": "捷克",
            "United Arab Emirates": "阿拉伯联合酋长国",
            Guam: "关岛",
            India: "印度",
            Azerbaijan: "阿塞拜疆",
            "N. Mariana Is.": "北马里亚纳群岛",
            Lesotho: "莱索托",
            Kenya: "肯尼亚",
            Belarus: "白俄罗斯",
            Tajikistan: "塔吉克斯坦",
            Turkey: "土耳其",
            Afghanistan: "阿富汗",
            Bangladesh: "孟加拉国",
            Mauritania: "毛里塔尼亚",
            "Dem. Rep. Korea": "朝鲜",
            "Saint Lucia": "圣卢西亚",
            "Br. Indian Ocean Ter.": "英属印度洋领地",
            Mongolia: "蒙古",
            France: "法国",
            "Cura?ao": "库拉索岛",
            "S. Sudan": "南苏丹",
            Rwanda: "卢旺达",
            Slovakia: "斯洛伐克",
            Somalia: "索马里",
            Peru: "秘鲁",
            Vanuatu: "瓦努阿图",
            Norway: "挪威",
            Malawi: "马拉维",
            Benin: "贝宁",
            "St. Vin. and Gren.": "圣文森特和格林纳丁斯",
            Korea: "韩国",
            Singapore: "新加坡",
            Montenegro: "黑山共和国",
            "Cayman Is.": "开曼群岛",
            Togo: "多哥",
            China: "中国",
            "Heard I. and McDonald Is.": "赫德岛和麦克唐纳群岛",
            Armenia: "亚美尼亚",
            "Falkland Is.": "马尔维纳斯群岛（福克兰）",
            Ukraine: "乌克兰",
            Ghana: "加纳",
            Tonga: "汤加",
            Finland: "芬兰",
            Libya: "利比亚",
            "Dominican Rep.": "多米尼加",
            Indonesia: "印度尼西亚",
            Mauritius: "毛里求斯",
            "Eq. Guinea": "赤道几内亚",
            Sweden: "瑞典",
            Vietnam: "越南",
            Mali: "马里",
            Russia: "俄罗斯",
            Bulgaria: "保加利亚",
            "United States": "美国",
            Romania: "罗马尼亚",
            Angola: "安哥拉",
            Chad: "乍得",
            "South Africa": "南非",
            Fiji: "斐济",
            Liechtenstein: "列支敦士登",
            Malaysia: "马来西亚",
            Austria: "奥地利",
            Mozambique: "莫桑比克",
            Uganda: "乌干达",
            Japan: "日本",
            Niger: "尼日尔",
            Brazil: "巴西",
            Kuwait: "科威特",
            Panama: "巴拿马",
            Guyana: "圭亚那",
            Madagascar: "马达加斯加",
            Luxembourg: "卢森堡",
            "American Samoa": "美属萨摩亚",
            Andorra: "安道尔",
            Ireland: "爱尔兰",
            Italy: "意大利",
            Nigeria: "尼日利亚",
            "Turks and Caicos Is.": "特克斯和凯科斯群岛",
            Ecuador: "厄瓜多尔",
            "U.S. Virgin Is.": "美属维尔京群岛",
            Brunei: "文莱",
            Australia: "澳大利亚",
            Iran: "伊朗",
            Algeria: "阿尔及利亚",
            "El Salvador": "萨尔瓦多",
            "C?te d'Ivoire": "科特迪瓦",
            Chile: "智利",
            "Puerto Rico": "波多黎各",
            Belgium: "比利时",
            Thailand: "泰国",
            Haiti: "海地",
            Iraq: "伊拉克",
            "S?o Tomé and Principe": "圣多美和普林西比",
            "Sierra Leone": "塞拉利昂",
            Georgia: "格鲁吉亚",
            Denmark: "丹麦",
            Philippines: "菲律宾",
            "S. Geo. and S. Sandw. Is.": "南乔治亚岛和南桑威奇群岛",
            Moldova: "摩尔多瓦",
            Morocco: "摩洛哥",
            Namibia: "纳米比亚",
            Malta: "马耳他",
            "Guinea-Bissau": "几内亚比绍",
            Kiribati: "基里巴斯",
            Switzerland: "瑞士",
            Grenada: "格林纳达",
            Seychelles: "塞舌尔",
            Portugal: "葡萄牙",
            Estonia: "爱沙尼亚",
            Uruguay: "乌拉圭",
            "Antigua and Barb.": "安提瓜和巴布达",
            Lebanon: "黎巴嫩",
            Uzbekistan: "乌兹别克斯坦",
            Tunisia: "突尼斯",
            Djibouti: "吉布提",
            Greenland: "格陵兰岛",
            "Timor-Leste": "东帝汶",
            Dominica: "多米尼克",
            Colombia: "哥伦比亚",
            Burundi: "布隆迪",
            "Bosnia and Herz.": "波斯尼亚和黑塞哥维那",
            Cyprus: "塞浦路斯",
            Barbados: "巴巴多斯",
            Qatar: "卡塔尔",
            Palau: "帕劳",
            Bhutan: "不丹",
            Sudan: "苏丹",
            Nepal: "尼泊尔",
            Micronesia: "密克罗尼西亚",
            Bermuda: "百慕大",
            Suriname: "苏里南",
            Venezuela: "委内瑞拉",
            Israel: "以色列",
            "St. Pierre and Miquelon": "圣皮埃尔和密克隆群岛",
            "Central African Rep.": "中非",
            Iceland: "冰岛",
            Zambia: "赞比亚",
            Senegal: "塞内加尔",
            "Papua New Guinea": "巴布亚新几内亚",
            "Trinidad and Tobago": "特立尼达和多巴哥",
            Zimbabwe: "津巴布韦",
            Jordan: "约旦",
            Gambia: "冈比亚",
            Kazakhstan: "哈萨克斯坦",
            Poland: "波兰",
            Eritrea: "厄立特里亚",
            Kyrgyzstan: "吉尔吉斯斯坦",
            Montserrat: "蒙特塞拉特",
            "New Caledonia": "新喀里多尼亚",
            Macedonia: "马其顿",
            Paraguay: "巴拉圭",
            Latvia: "拉脱维亚",
            Hungary: "匈牙利",
            Syria: "叙利亚",
            Honduras: "洪都拉斯",
            Myanmar: "缅甸",
            Mexico: "墨西哥",
            Egypt: "埃及",
            Nicaragua: "尼加拉瓜",
            Cuba: "古巴",
            Serbia: "塞尔维亚",
            Comoros: "科摩罗",
            "United Kingdom": "英国",
            "Fr. S. Antarctic Lands": "南极洲",
            Congo: "刚果（布）",
            Greece: "希腊",
            "Sri Lanka": "斯里兰卡",
            Croatia: "克罗地亚",
            Botswana: "博茨瓦纳",
            "Siachen Glacier": "锡亚琴冰川地区",
          },

          itemStyle: {
            normal: {
              borderColor: "rgba(0, 0, 0, 0.2)",
            },
            emphasis: {
              //高亮的显示设置
              areaColor: "#61A0A8", //鼠标选择区域颜色
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
        // 鼠标悬浮提示框
        series: [
          {
            name: "国家",
            type: "map",
            geoIndex: 0,
            data: this.dataList,
          },
        ],
      };
      myChart.setOption(option);
      window.addEventListener("resize", () => myChart.resize());
    },
    drawChart4() {
      let myChart = this.$echarts.init(this.$refs.polyline, "vintage");
      let option = {
        title: {
          text: "热度堆叠折线图",
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
        legend: {
          y: 30,
          itemWidth: 10,
          itemHeight: 10,
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          data: ["1", "2", "3", "4", "5"],
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
        },
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "俄",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: this.stackData[0],
          },
          {
            name: "乌",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: this.stackData[1],
          },
          {
            name: "美/英/澳",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: this.stackData[2],
          },
          {
            name: "中",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: this.stackData[3],
          },
          {
            name: "意",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: this.stackData[4],
          },
          {
            name: "日",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: this.stackData[5],
          },
          {
            name: "德",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: this.stackData[6],
          },
          {
            name: "法",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: this.stackData[7],
          },
          {
            name: "瑞典",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: this.stackData[8],
          },
          {
            name: "印尼",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: this.stackData[9],
          },
          {
            name: "希腊",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: this.stackData[10],
          },
        ],
      };
      myChart.setOption(option);
      window.addEventListener("resize", () => myChart.resize());
    },
    drawChart5() {
      let myChart = this.$echarts.init(this.$refs.sankey2, "vintage");
      let option = {
        title: {
          text: "热度桑基图",
          textStyle: {},
        },
        tooltip: {
          trigger: "item",
          triggerOn: "mousemove",
        },
        animation: false,
        series: [
          {
            type: "sankey",
            top: "15%",
            bottom: "15%",
            left: "5%",
            right: "5%",
            emphasis: {
              focus: "adjacency",
            },
            data: [
              { name: "总热度" },
              { name: "俄" },
              { name: "乌" },
              { name: "美/英/澳" },
              { name: "中" },
              { name: "意" },
              { name: "日" },
              { name: "德" },
              { name: "法" },
              { name: "瑞典" },
              { name: "印尼" },
              { name: "希腊" },
            ],
            links: [
              {
                source: "总热度",
                target: "俄",
                value: this.stackData[0][0],
              },
              {
                source: "总热度",
                target: "乌",
                value: this.stackData[1][0],
              },
              {
                source: "总热度",
                target: "美/英/澳",
                value: this.stackData[2][0],
              },
              { source: "总热度", target: "中", value: this.stackData[3][0] },
              {
                source: "总热度",
                target: "意",
                value: this.stackData[4][0],
              },
              { source: "总热度", target: "日", value: this.stackData[5][0] },
              { source: "总热度", target: "德", value: this.stackData[6][0] },
              { source: "总热度", target: "法", value: this.stackData[7][0] },
              { source: "总热度", target: "瑞典", value: this.stackData[8][0] },
              {
                source: "总热度",
                target: "印尼",
                value: this.stackData[9][0],
              },
              {
                source: "总热度",
                target: "希腊",
                value: this.stackData[10][0],
              },
            ],
            orient: "vertical",
            label: {
              position: "bottom",
            },
            lineStyle: {
              color: "gradient",
              curveness: 0.5,
            },
          },
        ],
      };
      myChart.setOption(option);
      window.addEventListener("resize", () => myChart.resize());
    },
    drawChart6() {
      let myChart = this.$echarts.init(this.$refs.timeline, "vintage");
      let option = {
        baseOption: {
          timeline: {
            axisType: "category",
            // loop: false,
            autoPlay: false,
            currentIndex: 0,
            playInterval: 20 * 1000,
            left: "10%",
            right: 0,
            top: 2,
            bottom: 0,
            data: [
              "2022/2/22",
              "2022/4/7",
              "2022/5/21",
              "2022/9/5",
              "2022/10/23",
            ],
            lineStyle: {
              color: "#EBE09F",
              width: 1,
            },
            itemStyle: {
              color: "#D49576",
            },
            symbol: "circle",
            checkpointStyle: {
              color: "#C1484E",
              borderColor: "rgba(233,219,154, 0.2)",
            },
            controlStyle: {
              color:"#D49576",
              borderColor: "#D49576",
              itemSize: 18,
              itemGap: 30,
            },
            emphasis: {
              label: {
                color: "#C1484E",
                fontSize: 14,
                fontWeight: 900,
              },
              itemStyle: {
                color: "#F3E7A2",
              },
              controlStyle: {
                color:"#F3E7A2",
                borderColor: "#F3E7A2",
              },
            },
            progress:{
              itemStyle: {
                color: "#C1484E",
              },
              lineStyle:{
                color: "#C1484E",
              },
            }
          },
        },
        calculable: true,
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
    this.drawChart5();
    this.drawChart6();
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

#maps {
  grid-row: 1/8;
  grid-column: 1/3;
  height: auto;
}

#map {
  width: 100%;
  height: 90%;
}

#timeline {
  width: 80%;
  height: 10%;
}

#main {
  width: 100%;
  height: auto;
  grid-row: 8/11;
  grid-column: 1/2;
  margin: 0;
}

#sankey {
  grid-row: 1/6;
  grid-column: 3/4;
  width: 100%;
  height: 99%;
  margin: 0;
}

#sankey2 {
  grid-row: 6/11;
  grid-column: 3/4;
  width: 100%;
  height: auto;
  margin: 0;
}

#polyline {
  grid-row: 8/11;
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