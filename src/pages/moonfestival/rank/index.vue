<template>
  <div class="main">
    <div class="yun-wrapper min">
      <div class="yun"></div>
      <div class="yun1"></div>
    </div>
    <div class="moon-rank">
      <moon-header v-if="ENV.app" back></moon-header>
      <section class="bd">
        <div class="bd-name">排行榜</div>
        <div class="bd-mine">
          <div class="bd-item bd-item-mine">
            <div class="user-rank">{{selfRank.rank}}</div>
            <div class="user-info">
              <img class="user-img" :src="makeFileUrl(selfRank.user.avatar)"/>
              <div class="user-name" v-html="selfRank.user.fullname"></div>
            </div>
            <div class="user-score">{{selfRank.maxScore}}分</div>
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
              <img class="user-img" :src="makeFileUrl(item.user.avatar)"/>
              <div class="user-name" v-html="item.user.fullname"></div>
            </div>
            <div class="user-score">{{item.maxScore}}分</div>
          </div>

        </div>
      </section>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue';
  import { mapState, mapActions } from 'vuex';
  import { makeFileUrl } from '../../../utils/utils';
  import moonHeader from '../components/header';
  
  export default {
    name: 'rank',
    data() {
      return {}
    },
    components: {
      moonHeader
    },
    computed: {
      ...mapState('moon', {
        selfRank: state => state.rank.selfRank,
        rankList: state => state.rank.rankList
      })
    },
    // beforeRouteEnter(to, from, next) {
    //   if (from.name != 'moonIndex') {
    //     this.$router.replace({name: 'moonIndex'})
    //   } else {
    //     next();
    //   }
    // },
    created() {
      this.getRankList();
    },
    methods: {
      ...mapActions('moon', [
        'getRankList'
      ]),
      makeFileUrl(url) {
        return makeFileUrl(url)
      }
    },
    mounted() {
      
      // this.friendList.push(...testData)
    }
  }
</script>
<style lang="less" scoped>
  @import '../assets/style/main.less';
  @import '../assets/style/rank.less';
  @import '../assets/style/animation.less';
</style>