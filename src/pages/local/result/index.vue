<template>
  <div class="result-wrapper">
    <div class="content1">
      <div class="avater" :class="level == 1 ? 'avater1' : (level == 2 ? 'avater2' : 'avater3')">
        <span class="avater-commen" :class="level == 1 ? 'avater1-icon' : (level == 2 ? 'avater2-icon' : 'avater3-icon')"></span>
      </div>
      <div class="regards">
        <span>{{regards}}</span>分
      </div>
      <div class="local-name box box-lr box-center-center">
        <div class="line left"></div>
        <div class="name">获得称号</div>
        <div class="line right"></div>
      </div>
    </div>
    <div class="content2 box box-tb box-center-center">
      <div class="commen-width animated bounceInDown" :class="level == 1 ? 'local1-img' : (level == 2 ? 'local2-img' : 'local3-img')">
        <div class="logo animated shake"></div>
      </div>
      <div class="local-desc localText">
        {{level == 1 ? localText1 : (level == 2) ? localText2 : localText3}}
      </div>
    </div>
    <div class="content3">
      <div class="btn-commen go-answer" @click="goAnswer">再次答题</div>
      <div class="chance-remain">剩余{{chance}}次答题机会</div>
      <div class="btn-commen get-cash animated zoomIn" @click="downloadApp">{{btnText}}</div>
      <div class="text-commen go-wallet">去“我的-钱包”查看</div>
      <div class="text-commen tips">提高正确率，请查看攻略<span class="arrow"></span> </div>
    </div>
    <local-dialog :show="dialog.show" :share="dialog.share" :content="dialog.content" @close="closeDialog"></local-dialog>
  </div>
</template>

<script>
  import {
    mapState,
    mapActions
  } from "vuex";
  import {
    downloadApp
  } from '../../../utils/utils'
  import localDialog from '../components/dialog'
  export default {
    components: {
      localDialog
    },
    data() {
      return {
        btnText: "下载APP",
        regards: 0,
        score: 0,
        level: '',
        chance: 10,
        localText1: '同样是九年义务教育，为什么你那么优秀？你“土”的一览众山小，谁都没你DIAO',
        localText2: '恭喜你获得2元奖励，但你对成都了解还不够多哦！冲击满分赢5元！',
        localText3: '盆友，你是路过成都吗？得满分可以领5元现金，再试试吧',
        // 弹窗
        dialog: {
          // 是否显示弹窗
          show: false,
          // 是否为分享弹窗
          share: false,
          // 弹窗文字内容
          content: '呃~没有答题机会了，<br/>快去分享给好友获取答题机会吧！'
        }
      };
    },
    created() {
      this.score = sessionStorage.score
      this.level = sessionStorage.level
      // this.chance = $store.state.local.statistic.chance
      console.log('level', this.level)
      this.regardsAdd();
    },
    mounted() {
  
    },
    computed: {
      ...mapState('local', {
        // endData: state => state.endData
      })
    },
    methods: {
      regardsAdd() {
        if (this.regards > this.score) {
          return
        }
        setInterval(() => {
          if (this.regards >= this.score) {
            return
          }
          this.regards++
        }, 10)
      },
      goAnswer() {
        if(this.chance > 0) {
          this.chance--
          this.$router.push({
            name: 'localAnswer'
          })
        } else {
          this.dialog.show = true
        }

      },
      closeDialog() {
        this.dialog.show = false;
      },
      downloadApp() {
        downloadApp()
      }
    }
  };
</script>

<style lang="less" scoped>
  @import '../assets/style/animation.less';
  @import '../assets/style/result.less';
</style>
