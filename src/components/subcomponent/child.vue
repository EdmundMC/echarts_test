<template>
  <div @click="change">
    I am a {{ person }}, {{ name }}
    <div><button @click="$emit('changeTitle')">修改标题</button></div>
  </div>
</template>

<script>
export default {
  name: "child",
  data() {
    return {
      op: true,
      persons: ["child", "father"],
    };
  },
  computed: {
    person() {
      return this.op ? this.persons[0] : this.persons[1];
    },
  },
  methods: {
    change() {
      this.op = !this.op;
    },
  },
  props: {
    name: {
      type: String,
      default: "John",
    },
  },
};
</script>

<style scoped>
</style>