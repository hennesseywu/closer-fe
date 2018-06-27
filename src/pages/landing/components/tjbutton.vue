<template>
  <div class="tjbutton" @click="onClick">
    <div class="download-btn">{{ text }}</div>
  </div>
</template>
<script>
export default {
  name: "tjbutton",
  props: {
    text: {
      type: String,
      default: "立即下载"
    },
    onClick: {
      type: Function
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.tjbutton {
  .download-btn {
    padding: 25pr 32pr;
    font-size: 32pr;
    color: rgba(75, 73, 69, 1);
    background: rgba(253, 219, 0, 1);
    border-radius: 12pr;
    text-align: center;
  }
}
</style>


