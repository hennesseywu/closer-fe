<template>
  <div class="pullnew">
    <router-link class="rule-button" :to="{name:'pullNewRule'}">活动说明 </router-link>
    <div class="title"></div>
    <div class="share-button" @click="inviteFriends"></div>
    <div class="content">
      <div class="left-top-icon"></div>
      <div class="right-top-icon"></div>
      <div class="left-bottom-icon"></div>
      <div class="right-bottom-icon"></div>
      <div class="content-title">首次邀请好友即奖励10元现金</div>
      <div class="content-desc">之后每邀请1位奖励2元，如果您邀请了7位好友，那么第7位奖励您10元</div>
      <div class="progress-bg" v-if="pullNewStatic.invitedUsers&&pullNewStatic.invitedUsers.length==0">
        <div class="progress icon1 grey"><span class="progress-text">2</span>元</div>
        <div class="progress icon2 grey"><span class="progress-text">10</span>元</div>
        <div class="progress icon3 grey"><span class="progress-text">10</span>元</div>
        <div class="progress icon4 grey"><span class="progress-text">10</span>元</div>
        <div class="progress icon5 grey"><span class="progress-text">10</span>元</div>
        <div class="progress icon6 grey"><span class="progress-text">10</span>元</div>
        <div class="progress icon7 grey"><span class="progress-text">10</span>元</div>
      </div>
      <div class="progress-bg" v-else>
        <div v-for="(item,key,index) in pullNewStatic.invitedUsers" :key="key" :class="item.isGrey?'progress grey icon'+(index+1):'progress yellow icon'+(index+1)">
          <span class="progress-text">{{item.amount/100}}</span>元
        </div>
      </div>
      <div class="progress-desc">
        <div v-for="(value,key,index) in pullNewStatic.invitedUsers" :key="index" :class="index==0 ? 'progress-desc-text'+(index+1):'progress-desc-text'">{{key}}<span class="progress-ren">人</span></div>
      </div>
      <div class="share-title">
        <span class="share-text">分享快捷通道</span>
      </div>
      <div class="share">
        <div class="timeline" @click="toShare('inviteNewGuyActionWxTimeLine')"></div>
        <div class="weixin" @click="toShare('inviteNewGuyActionWeChat')"></div>
        <div class="weibo" @click="toShare('inviteNewGuyActionSina')"></div>
        <div class="save-img" @click="toShare('inviteNewGuyActionSavePicture')"></div>
      </div>
      <div class="balance">
        <div class="remain-money">奖金已到账 {{pullNewStatic.awardTotalAmt}}元</div>
        <div class="drawing" @click="toShare('inviteNewGuyActionWithdraw')"></div>
      </div>
    </div>
    <div class="bottom">
      <div class="friends-list">
        <div class="remind-title" v-if="loginCount > 0">
          您有{{loginCount}}位好友今天未登录，提醒他们登录 每位好友登录为您解冻0.2元
        </div>
        <div class="remind-title" v-if="loginCount == 0">
          您还没有好友哦，快去邀请好友赚钱吧！
        </div>
        <!-- <div> -->
        <mt-loadmore class="loadmore" v-if="loginUsers.length > 0" :bottom-method="loadBottom" :auto-fill="false" :bottom-all-loaded="allLoaded" :bottomPullText="bottomPullText" :bottomLoadingText="bottomLoadingText" :bottomDistance="bottomDistance" ref="loadmore">
          <div class="remind-content">
            <div class="friend" v-for="(value,key) in loginUsers" :key="key">
              <img src="../assets/images/timeline.png" class="headphoto">
              <div class="info">
                <div class="name">{{value.inviteeUser.fullname}}</div>
                <div class="name">{{formateDate(value.inviteeUser.createTime)}}</div>
              </div>
              <div class="amount" v-if="value.loginAmount">+0.2元</div>
              <div v-else>
                <img src="../assets/images/reminded.png" v-if="value.reminded" class="action">
                <img src="../assets/images/remind-login.png" @click="remind(value.inviteeUser.objectID)" v-else class="action">
              </div>
            </div>
          </div>
        </mt-loadmore>
        <!-- </div> -->
  
  
      </div>
    </div>
    <Redbag v-if="awardAmt>0" :amount="awardAmt"></Redbag>
  </div>
</template>

<script>
  import Vue from "vue";
  import Redbag from "../components/redbag";
  import {
    Loadmore
  } from 'mint-ui';
  
  import {
    dateFormat
  } from "../../../utils/utils";
  
  
  Vue.component(Loadmore.name, Loadmore);
  
  import {
    mapActions,
    mapState
  } from "vuex"
  export default {
    name: "index",
    components: {
      Redbag
    },
    data() {
      return {
        bottomDistance: 50,
        bottomPullText: '上拉加载更多',
        bottomLoadingText: '加载中',
        redbagVisiable: false,
        allLoaded: false,
        inviteUsers: [],
        loginUsers: [],
        pagenum: 1,
        pagesize: 0,
        loginCount: null
      }
    },
    async mounted() {
      if (this.$store.state.IS_APP) {
        this.checkLogin(async(res) => {
          console.log("checkLogin res");
          await this.getPullNewInfo();
          await this.getYesterdayAwardAmt();
          let {
            data
          } = await this.getInviteUserList();
          this.loginUsers = data;
        })
      } else {
        // Cookies.set("GroukAuth", "1.cd29b035dff0af5a6d76738d9ffe4999483cf9b37d4be9a01b56d292aa70f832", {
        //   expires: 30
        // })
        await this.getPullNewInfo();
        await this.getYesterdayAwardAmt();
        let {
          data,
          pagesize,
          count
        } = await this.getInviteUserList();
        this.loginCount = count;
  
        this.loginUsers = data;
        this.pagesize = pagesize;
        console.log('11111----loginusers', this.loginUsers)
      }
    },
    computed: {
      ...mapState("pullNew", {
        pullNewStatic: state => state.pullNewStatic,
        awardAmt: state => state.awardAmt
      })
    },
    methods: {
      ...mapActions("pullNew", ["checkLogin", "getInviteUserList", "getPullNewInfo", "remindLogin", "getYesterdayAwardAmt"]),
      async loadBottom() {
        console.log("loading")
        // this.allLoaded = true;
        pagenum++
        let {
          data,
          pagesize,
          count
        } = await this.getInviteUserList({
          pagenum: this.pagenum
        });
        this.pagesize = pagesize;
        this.loginCount = count;
  
        console.log("data", data)
        for (var a in data) {
          this.loginUsers.push(data[a]);
        }
        this.$refs.loadmore.onBottomLoaded();
        console.log(this.loginUsers)
      },
      remind(invitee) {
        this.remindLogin({
          invitee: invitee
        });
      },
      toShare(type) {
        console.log("toShare", type)
        let ua = this.$store.state.UA;
        console.log("ua", ua);
        if (ua.indexOf("closer-ios") > -1) {
          setupWebViewJavascriptBridge(function(bridge) {
            console.log("toShare ios bridge", bridge)
            if (bridge) {
              //ios获取用户token 判断登录
              bridge.callHandler("inviteNewGuyAction", type, function(data, responseCallback) {})
            }
          })
        } else if (ua.indexOf("closer-android") > -1) {
          console.log("toShare android bridge", bridge)
          if (typeof window.bridge != "undefined") {
            window.bridge.inviteNewGuyAction(type);
          }
        }
  
      },
      inviteFriends() {
        let ua = this.$store.state.UA;
        console.log("inviteFriends", ua)
        if (ua.indexOf("closer-ios") > -1) {
          setupWebViewJavascriptBridge(function(bridge) {
            console.log("toShare ios bridge", bridge)
            if (bridge) {
              //ios获取用户token 判断登录
              bridge.callHandler("inviteUser", null, function(data, responseCallback) {})
            }
          })
        } else if (ua.indexOf("closer-android") > -1) {
          if (typeof window.bridge != "undefined") {
            window.bridge.inviteUser(null);
          } else {
            location.href = "closer_invite_guys_raise_cash";
          }
        }
      },
      formateDate(date) {
        return dateFormat(date)
      }
  
    }
  
  }
</script>

<style lang="less" scoped>
  .pullnew {
    background: url("../assets/images/bg.png") no-repeat center;
    height: 1680pr;
    background-size: cover;
    padding-top: 126pr;
    .rule-button {
      background: url("../assets/images/rule-button.png") no-repeat center;
      width: 176pr;
      height: 70pr;
      background-size: cover;
      padding: 10pr 0 0 27pr;
      font-size: 30pr;
      color: #ffffff;
      float: right;
      margin-top: -70pr;
    }
    .title {
      background: url("../assets/images/title.png") no-repeat center;
      width: 464pr;
      height: 83pr;
      margin: 0 auto;
      background-size: cover;
    }
    .share-button {
      background: url("../assets/images/share-button.png") no-repeat center;
      width: 341pr;
      height: 109pr;
      margin: 24px auto 14pr auto;
      background-size: cover;
    }
    .content {
      position: relative;
      height: 673pr;
      border: 6pr solid #000000;
      background: #ffffff;
      border-radius: 10pr;
      text-align: center;
      margin: 0 17pr 17pr 21pr;
      .left-top-icon {
        background: url("../assets/images/icon1.png") no-repeat center;
        background-size: cover;
        width: 50pr;
        height: 70pr;
        position: absolute;
        left: 28pr;
        top: 25pr;
      }
      .right-top-icon {
        background: url("../assets/images/icon2.png") no-repeat center;
        background-size: cover;
        width: 50pr;
        height: 70pr;
        position: absolute;
        right: 28pr;
        top: 25pr;
      }
      .left-bottom-icon {
        background: url("../assets/images/icon3.png") no-repeat center;
        background-size: cover;
        width: 50pr;
        height: 70pr;
        position: absolute;
        left: 28pr;
        bottom: 9pr;
      }
      .right-bottom-icon {
        background: url("../assets/images/icon4.png") no-repeat center;
        background-size: cover;
        width: 50pr;
        height: 70pr;
        position: absolute;
        right: 28pr;
        bottom: 9pr;
      }
      .content-title {
        font-size: 36pr;
        color: #222222;
        margin: 30pr 0 30pr 0;
      }
      .content-desc {
        font-size: 28pr;
        color: #454545;
        margin: 0 57pr 38pr 58pr;
      }
      .progress-bg {
        background: url("../assets/images/progress-bg.png") no-repeat center;
        background-size: cover;
        width: 668pr;
        height: 82pr;
        margin: 0 auto;
        display: flex;
        font-size: 16pr;
        flex-direction: row;
        .progress {
          width: 64pr;
          height: 64pr;
          line-height: 64pr;
          border-radius: 64pr;
          text-align: center;
        }
        .icon1 {
          margin: 9pr 35pr 9pr 9pr;
        }
        .icon2 {
          margin: 9pr 35pr 9pr 0;
        }
        .icon3 {
          margin: 9pr 35pr 9pr 0;
        }
        .icon4 {
          margin: 9pr 35pr 9pr 0;
        }
        .icon5 {
          margin: 9pr 35pr 9pr 0;
        }
        .icon6 {
          margin: 9pr 35pr 9pr 0;
        }
        .icon7 {
          margin: 9pr 8pr 9pr 0;
        }
        .yellow {
          background-color: #fedc21;
        }
        .grey {
          background-color: #dcdcdc;
        }
        .progress-text {
          color: #222222;
          font-size: 26pr;
        }
      }
      .progress-desc {
        display: flex;
        flex-direction: row;
        justify-content: center;
        color: #454545;
        font-size: 26pr;
        margin: 18pr 21pr 40pr 21pr;
        text-align: center;
        >div {
          width: 64pr;
          margin-left: 35pr;
        }
        .progress-desc-text1 {
          margin-left: 0;
        }
        .progress-ren {
          font-size: 20pr;
        }
      }
      .share-title {
        margin: 40pr 0 36pr 0;
        height: 1px;
        border-top: 1px solid #ddd;
        text-align: center;
        font-size: 28pr;
        color: #747474;
        .share-text {
          position: relative;
          top: -18pr;
          background: #fff;
          padding: 0 20pr;
        }
      }
      .share {
        margin-top: 23pr;
        display: flex;
        flex-direction: row;
        justify-content: center;
        .timeline {
          background: url("../assets/images/timeline.png") no-repeat center;
          background-size: cover;
          margin-right: 84pr;
          width: 62pr;
          height: 62pr;
        }
        .weixin {
          background: url("../assets/images/weixin.png") no-repeat center;
          background-size: cover;
          margin-right: 81pr;
          width: 81pr;
          height: 62pr;
        }
        .weibo {
          background: url("../assets/images/weibo.png") no-repeat center;
          background-size: cover;
          margin-right: 77pr;
          width: 80pr;
          height: 62pr;
        }
        .save-img {
          background: url("../assets/images/save-img.png") no-repeat center;
          background-size: cover;
          width: 62pr;
          height: 62pr;
        }
      }
      .balance {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 60pr;
        .remain-money {
          color: #212121;
          font-size: 32pr;
          margin: 15pr 32pr 0 0;
        }
        .drawing {
          background: url("../assets/images/drawing.png") no-repeat center;
          background-size: cover;
          width: 197pr;
          height: 78pr;
          margin-left: 32pr;
        }
      }
    }
    .bottom {
      background-color: #025182;
      padding-bottom: 48pr;
      .friends-list {
        border: 6pr solid #000000;
        border-radius: 10pr;
        margin: 0 17pr 0 21pr;
        .remind-title {
          width: 100%;
          padding: 24pr 63pr 27pr 59pr;
          background-color: #1570A9;
          border-bottom: 6pr solid #000000;
          border-radius: 10pr;
          text-align: center;
          font-size: 32pr;
          line-height: 50pr;
          color: #ffffff;
        }
        .loadmore {
          background-color: #DC214C;
          padding-bottom: 83pr;
          .remind-content {
            .friend {
              position: relative;
              display: flex;
              flex-direction: row;
              margin-top: 41pr;
              height: 100pr;
              color: #ffffff;
              .headphoto {
                width: 87pr;
                height: 87pr;
                margin-left: 23pr;
              }
              .info {
                display: flex;
                flex-direction: column;
                margin-left: 20pr;
                .name {
                  font-size: 28pr;
                  margin-right: 20pr;
                }
              }
              .amount {
                width: 225pr;
                height: 96pr;
                text-align: center;
                font-size: 32pr;
                margin-top: 25pr;
              }
              .action {
                position: absolute;
                width: 225pr;
                height: 96pr;
                right: 18pr;
              }
            }
          }
        }
      }
    }
  }
</style>

