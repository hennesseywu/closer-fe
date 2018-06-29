<template>
  <div class="tjinput box box-lr box-align-center">
    <label class="label">{{ label }}</label>
    <input class="_input flex" ref="_input" :disabled="disabled" :maxlength="maxlength" :minlength="minlength" :type="type" :placeholder="placeholder"
    />
  </div>
</template>
<script>
export default {
  name: "tjinput",
  props: {
    bname: {
      type: String,
      default: "按钮"
    },
    type: {
      type: String,
      default: "text"
    },
    currentChange: {
      type: Function
    },
    disabled: {
      default: false
    },
    maxlength: {
      type: String,
      default: "9999999"
    },
    minlength: {
      type: String,
      default: "0"
    },
    placeholder: {
      type: String,
      default: "请输入内容"
    },
    label: {
      type: String,
      default: "手机号"
    }
  },
  data() {
    // bname: 'button'
    return {
      name: "buttons"
    };
  },
  mounted() {
    // console.log(this.$refs._button);
    // this.$refs._button.setAttribute("class", `button button-${this.type}`);
  }
};
</script>
<style lang="less" scoped>
@import "../assets/style/index.less";
.tjinput {
  .label {
    color: #4b4945;
    margin-right: 18pr;
  }
  ._input {
    padding: 18pr 32pr;
    font-size: 32pr;
    color: rgba(75, 73, 69, 1);
    background: rgba(255, 255, 255, 1);
    border-radius: 12pr;
    border: 1px solid #e8e8e8;
  }
}
</style>