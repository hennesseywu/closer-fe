<template>
  <div class="main rank">
    <div class="hd" @click="handleBack()"></div>
    <section class="bd">
      <div class="bd-name">排行榜</div>
      <div class="bd-mine">
        <div class="bd-item bd-item-mine">
          <div class="user-rank">{{statistic.rank}}</div>
          <div class="user-info">
            <img class="user-img" :src="makeFileUrl(user.avatar)"/>
            <div class="user-name" v-html="user.fullname"></div>
          </div>
          <div class="user-score">{{statistic.totalAwardAmt}}分</div>
        </div>
      </div>
      <div class="bd-friends">
        <div class="bd-item animated fadeInUp faster" 
          v-for="(item,index) in rankList" 
          :key="item.rank"
          :style="{'animation-delay': index%10*5+'0ms'}"
          :class="item.rank < 4 ? 'bd-item-'+item.rank : ''">
          <div class="user-rank">{{item.rank}}</div>
          <div class="user-info">
            <img class="user-img" :src="makeFileUrl(user.avatar)"/>
            <div class="user-name" v-html="item.fullname"></div>
          </div>
          <div class="user-score">{{item.totalAwardAmt}}分</div>
        </div>

      </div>
    </section>
  </div>
</template>
<script>
  import Vue from 'vue';
  import router from '../../../router';
  import { mapState, mapActions } from 'vuex';
  import { makeFileUrl } from '../../../utils/utils';
  const testData = [
    {
      rank: 1,
      avatar: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3424486807,3445080459&fm=58',
      userName: 'zhangsan',
      totalAwardAmt: '100'
    },{
      rank: 2,
      avatar: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3424486807,3445080459&fm=58',
      userName: 'zhangsan',
      totalAwardAmt: '100'
    },{
      rank: 3,
      avatar: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3424486807,3445080459&fm=58',
      userName: 'zhangsan',
      totalAwardAmt: '100'
    },{
      rank: 4,
      avatar: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3424486807,3445080459&fm=58',
      userName: 'zhangsan',
      totalAwardAmt: '100'
    },{
      rank: 5,
      avatar: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3424486807,3445080459&fm=58',
      userName: 'zhangsan',
      totalAwardAmt: '100'
    },{
      rank: 6,
      avatar: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3424486807,3445080459&fm=58',
      userName: 'zhangsan',
      totalAwardAmt: '100'
    },{
      rank: 7,
      avatar: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3424486807,3445080459&fm=58',
      userName: 'zhangsan',
      totalAwardAmt: '100'
    },{
      rank: 8,
      avatar: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3424486807,3445080459&fm=58',
      userName: 'zhangsan',
      totalAwardAmt: '100'
    },{
      rank: 9,
      avatar: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3424486807,3445080459&fm=58',
      userName: 'zhangsan',
      totalAwardAmt: '100'
    },{
      rank: 10,
      avatar: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3424486807,3445080459&fm=58',
      userName: 'zhangsan',
      totalAwardAmt: '100'
    },{
      rank: 11,
      avatar: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3424486807,3445080459&fm=58',
      userName: 'zhangsan',
      totalAwardAmt: '100'
    },{
      rank: 12,
      avatar: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3424486807,3445080459&fm=58',
      userName: 'zhangsan',
      totalAwardAmt: '100'
    },{
      rank: 13,
      avatar: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3424486807,3445080459&fm=58',
      userName: 'zhangsan',
      totalAwardAmt: '100'
    },{
      rank: 14,
      avatar: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3424486807,3445080459&fm=58',
      userName: 'zhangsan',
      totalAwardAmt: '100'
    },{
      rank: 15,
      avatar: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3424486807,3445080459&fm=58',
      userName: 'zhangsan',
      totalAwardAmt: '100'
    }
  ];
  export default {
    name: 'rule',
    data() {
      return {}
    },
    computed: {
      ...mapState('local', [
        'user',
        'statistic',
        'rankList'
      ])
    },
    beforeRouteEnter(to, from, next) {
      if (from.name != 'localIndex') {
        router.replace({name: 'localIndex'})
      } else {
        next();
      }
    },
    methods: {
      ...mapActions('local', [
        'getRankList'
      ]),
      handleBack() {
        this.$router.back();
      },
      makeFileUrl(url) {
        return makeFileUrl(url)
      }
    },
    mounted() {
      this.getRankList();
      // this.friendList.push(...testData)
    }
  }
</script>
<style lang="less">
  @import '../assets/style/main.less';
  @import '../assets/style/rank.less';
  @import '../assets/style/animation.less';
</style>