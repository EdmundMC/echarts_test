<template>
  <div id="main">
    <div id="title">{{ title }}</div>
    <child name="Jone" class="a" @changeTitle="changeTitle" />
    <div class="a">
      <div style="font-size: 100px">{{ message }}</div>
      <div><button @click="jiajia">点我加一</button></div>
      <div><button @click="jianjian">点我减一</button></div>
      <div style="font-size: 100px">{{ cp }}</div>
    </div>
    <div class="a">
      <button @click="awesome = !awesome">Toggle</button>

      <h1 v-if="awesome">Vue is awesome!</h1>
      <h1 v-else>Oh no 😢</h1>
    </div>
    <div class="a">
      <div v-for="(item, index) in items" :key="index">
        item[{{ index }}]={{ item }}
      </div>
    </div>
    <div class="a">
      <textarea v-model="article" cols="30" rows="10"> </textarea>
      <h2>article当前的值是：{{ article }}</h2>
      <div>Checked names: {{ checkedNames }}</div>
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
      <label for="jack">Jack</label>

      <input type="checkbox" id="john" value="John" v-model="checkedNames" />
      <label for="john">John</label>

      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
      <label for="mike">Mike</label>
    </div>
  </div>
</template>

<script>
import child from "./subcomponent/child.vue";

export default {
  name: "test",
  components: {
    child,
  },
  data() {
    return {
      title: "屎山代码大全",
      message: 1,
      awesome: true,
      items: [1, 3, 5, 7, 9],
      article: "a",
      checkedNames: [],
      titlePos: 0,
      op: true,
    };
  },
  computed: {
    cp() {
      return this.message * 2;
    },
  },
  methods: {
    jiajia() {
      this.message++;
    },
    jianjian() {
      this.message--;
    },
    changeTitle() {
      this.title = this.op ? "理塘电子烟批发商场" : "屎山代码大全";
      this.op = !this.op;
    },
  },
};
</script>

<style scoped>
#main {
  margin: 0;
  padding: 0;
}

#title {
  font-size: 50px;
  font-weight: bold;
}

.a {
  padding: 0;
  border: solid 2px #41b98323;
  border-radius: 2px;
  max-width: max(730px, 70%);
  margin: auto;
}

#header {
  content: "";
}

textarea {
  position: relative;
  width: 95%;
  border: 0px;
  background-color: rgba(255, 255, 255, 0);
  resize: none;
}
</style>