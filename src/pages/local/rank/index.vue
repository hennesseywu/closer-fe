<template>
  <div class="main rank">
    <div class="hd" @click="handleBack()"></div>
    <section class="bd">
      <div class="bd-name">排行榜</div>
      <div class="bd-mine">
        <div class="bd-item bd-item-mine">
          <div class="user-rank">12</div>
          <div class="user-info">
            <img class="user-img" src=""/>
            <div class="user-name" v-html="userName"></div>
          </div>
          <div class="user-score">60分</div>
        </div>
      </div>
      <div class="bd-friends">
        <!--
        <div class="bd-item bd-item-1 animated slideInUp fast">
          <div class="user-rank">1</div>
          <div class="user-info">
            <img class="user-img" src=""/>
            <div class="user-name" v-html="userName"></div>
          </div>
          <div class="user-score">60分</div>
        </div>
        -->
        <div class="bd-item animated fadeInUp faster" 
          v-for="(item,index) in friendList" 
          :key="item.rank"
          :style="{'animation-delay': index%10*5+'0ms'}"
          :class="item.rank < 4 ? 'bd-item-'+item.rank : ''">
          <div class="user-rank">{{item.rank}}</div>
          <div class="user-info">
            <img class="user-img" :src="item.userImg"/>
            <div class="user-name" v-html="item.userName"></div>
          </div>
          <div class="user-score">{{item.score}}分</div>
        </div>

      </div>
    </section>
  </div>
</template>
<script>
  import Vue from 'vue';
  import router from '../../../router';
  const testData = [
    {
      rank: 1,
      userImg: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3424486807,3445080459&fm=58',
      userName: 'zhangsan',
      score: '100'
    },{
      rank: 2,
      userImg: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3424486807,3445080459&fm=58',
      userName: 'zhangsan',
      score: '100'
    },{
      rank: 3,
      userImg: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3424486807,3445080459&fm=58',
      userName: 'zhangsan',
      score: '100'
    },{
      rank: 4,
      userImg: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3424486807,3445080459&fm=58',
      userName: 'zhangsan',
      score: '100'
    },{
      rank: 5,
      userImg: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3424486807,3445080459&fm=58',
      userName: 'zhangsan',
      score: '100'
    },{
      rank: 6,
      userImg: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3424486807,3445080459&fm=58',
      userName: 'zhangsan',
      score: '100'
    },{
      rank: 7,
      userImg: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3424486807,3445080459&fm=58',
      userName: 'zhangsan',
      score: '100'
    },{
      rank: 8,
      userImg: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3424486807,3445080459&fm=58',
      userName: 'zhangsan',
      score: '100'
    },{
      rank: 9,
      userImg: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3424486807,3445080459&fm=58',
      userName: 'zhangsan',
      score: '100'
    },{
      rank: 10,
      userImg: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3424486807,3445080459&fm=58',
      userName: 'zhangsan',
      score: '100'
    },{
      rank: 11,
      userImg: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3424486807,3445080459&fm=58',
      userName: 'zhangsan',
      score: '100'
    },{
      rank: 12,
      userImg: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3424486807,3445080459&fm=58',
      userName: 'zhangsan',
      score: '100'
    },{
      rank: 13,
      userImg: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3424486807,3445080459&fm=58',
      userName: 'zhangsan',
      score: '100'
    },{
      rank: 14,
      userImg: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3424486807,3445080459&fm=58',
      userName: 'zhangsan',
      score: '100'
    },{
      rank: 15,
      userImg: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3424486807,3445080459&fm=58',
      userName: 'zhangsan',
      score: '100'
    }
  ];
  export default {
    name: 'rule',
    data() {
      return {
        userName: '张三',
        friendList: []
      }
    },
    beforeRouteEnter(to, from, next) {
      if (from.name != 'localIndex') {
        router.replace({name: 'localIndex'})
      } else {
        next();
      }
    },
    methods: {
      handleBack() {
        this.$router.back();
      }
    },
    mounted() {
      this.friendList.push(...testData)
    }
  }
</script>
<style lang="less">
  @import '../assets/style/main.less';
  @import '../assets/style/rank.less';
  @import '../assets/style/animation.less';
</style>