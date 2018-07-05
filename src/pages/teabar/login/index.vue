<template>
  
</template>

<script>
  import {
    Swipe,
    SwipeItem,
    Toast
  } from "mint-ui";
  import {
    mapState,
    mapActions
  } from "vuex";
  import Utils from "../../../utils/utils";
  import {
  
  } from "../../../utils/utils";
  
  export default {
    name: "index",
    components: {
      
    },
    data() {
      return {
        phone: "",
        imgCode:"",
        code: ""
      };
    },
    computed: {
      ...mapState("teabarLogin", {
       
      })
    },
    created() {
      if (!this.$route.query.code) {
        this.getAuthPath();
      }else{
        this.loginWithWechat(this.$route.query.code);
      }
    },
    mounted() {
    },
    methods: {
      ...mapActions("teabarLogin", [ "getAuthPath","loginWithWechat"]),
      ...mapActions('index', ['getCode', 'login'])
    }
  };
</script>

<style lang="less" scoped>
  
</style>


