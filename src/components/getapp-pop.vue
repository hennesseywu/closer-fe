<template>
  <mt-popup v-model="visible" :class="className" :closeOnClickModal="closeOnClickModal">
    <div class="pop-body">
      <slot></slot>
    </div>
  </mt-popup>
</template>
<script>
import Vue from "vue";
import { Popup } from "mint-ui";
Vue.component(Popup.name, Popup);

export default {
  name: "pop",
  components: {},
  props: {
    className: String,
    closeOnClickModal: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      visible: false
    };
  },
  methods: {
    open() {
      this.visible = true;
    },
    close() {
      this.visible = false;
    }
  }
};
</script>
