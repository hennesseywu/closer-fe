<template>
  <div v-show="loading">
    <div class="list-box box box-tb" v-if="data">
      <div class="list-item box box-lr" v-for="(item, index) of data" :key="index">
        <img src="../../assets/logo.png" alt="">
        <div class="desc">{{item.desc}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("list", {
      data: state => state.data,
      loading: state => state.loading
    })
  },
  created() {
    this.getList();
  },
  methods: {
    ...mapActions("list", ["getList"])
  }
};
</script>
<style lang="less" scoped>
.list-box {
  width: 100%;
  background: #fefefe;
  .list-item {
    margin: 10pr 30pr;
    border: 1px solid #9b9b9b;
    > img {
      width: 200pr;
      height: 200pr;
      border: 1px solid black;
    }
    .desc {
      margin-left: 20pr;
      border: 1px solid gray;
    }
  }
}
</style>


