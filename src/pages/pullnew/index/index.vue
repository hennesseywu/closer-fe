<template>
  <div class="pullnew">
    <div class="rule-button" @click="toRule">
      活动说明
    </div>
    <div class="title"></div>
    <div class="pullnew-title">
      <div class="share-button" @click="inviteFriends"></div>
    </div>
  
    <div class="content">
      <div class="left-top-icon"></div>
      <div class="right-top-icon"></div>
      <div class="left-bottom-icon"></div>
      <div class="right-bottom-icon"></div>
      <div class="content-title">首次邀请好友即奖励10元现金</div>
      <div class="content-desc">之后每邀请1位奖励2元，如果您邀请了7位好友，那么第7位奖励您10元</div>
      <div class="progress-bg">
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
      <div class="share-tips">此活动需在最新版本客户端参与</div>
      <div class="balance">
        <div class="remain-money">奖金已到账 {{formateMoney(pullNewStatic.awardTotalAmt/100)}}元</div>
        <div class="drawing" @click="toShare('inviteNewGuyActionWithdraw')"></div>
      </div>
    </div>
    <div class="bottom">
      <div class="friends-list">
        <div v-if="pullNewStatic.inviteUserTotalCount > 0">
          <div class="remind-title" v-if="pullNewStatic.awardEnd">
            恭喜你，奖金全部解冻了，再接再厉去邀请哦~
          </div>
          <div v-else>
            <div class="remind-title" v-if="pullNewStatic.inviteUserTotalCount==pullNewStatic.remindCount">
              已经提醒全部好友登录了，再去邀请几个朋友一起赚钱吧!
            </div>
            <div class="remind-title" v-else>
              您有{{pullNewStatic.todayNotLoginUserCount}}位好友今天未登录，提醒他们登录 每位好友登录为您解冻0.2元
            </div>
          </div>
        </div>
        <div class="remind-title" v-else>
          您还没有好友哦，快去邀请好友赚钱吧！
        </div>
        <mt-loadmore class="loadmore" v-if="!pullNewStatic.awardEnd&&loginUsers.length> 0" :bottom-method="loadBottom" :auto-fill="false" :bottom-all-loaded="allLoaded" :bottomPullText="bottomPullText" :bottomLoadingText="bottomLoadingText" :bottomDistance="bottomDistance"
          ref="loadmore">
          <div class="remind-content">
            <div class="friend" v-for="(value,key) in loginUsers" :key="key">
              <div :class="key==0 ? 'top self-top' :'top'">
                <img :src="fileUrl+value.inviteeUser.avatar" class="headphoto">
                <div :class="key==0 ? 'info self' : 'info'">
                  <div class="name">{{value.inviteeUser.fullname}}</div>
                  <div class="name">{{formateDate(value.inviteeUser.createTime)}}</div>
                </div>
                <div class="amount" v-if="value.loginAmount">+{{formateMoney(value.loginAmount/100)}}</div>
                <div v-else :class="value.reminded ? 'reminded':'remind-login'" @click="remind(value.inviteeUser.objectID,value.reminded,$event)"></div>
              </div>
              <div v-if="value.awardedCount==0&&typeof(value.step)!='undefined'">
                <div class="arrow" @click="clickArrow($event,key)">
                  <span class="progress-span">邀请进度</span>
                  <span class="arrow-right"></span>
                </div>
                <div class="middle" :id="'m'+key">
                  <div :class="value.step>0 ? 'dot': 'dot-grey'"></div>
                  <div class="line"></div>
                  <div :class="value.step>1 ? 'dot': 'dot-grey'"></div>
                  <div class="line"></div>
                  <div :class="value.step>2 ? 'dot': 'dot-grey'"></div>
                </div>
                <div class="progress-bottom" :id="'b'+key">
                  <span :class="value.step>0 ? 'desc1 desc-active': 'desc1'">进入首页</span>
                  <span :class="value.step>1 ? 'desc2 desc-active': 'desc2'">查看1篇文章</span>
                  <span :class="value.step>2 ? 'desc3 desc-active': 'desc3'">查看2篇文章</span>
                </div>
  
              </div>
            </div>
          </div>
        </mt-loadmore>
      </div>
    </div>
    <Redbag v-if="awardAmt>0" :amount="formateMoney(awardAmt/100)"></Redbag>
  </div>
</template>

<script>
  import Vue from "vue";
  import Redbag from "../components/redbag";
  import {
    Loadmore,
    Toast,
    Indicator
  } from 'mint-ui';
  
  import feConfig from '../../../utils/api';
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
        allLoaded1: false,
        inviteUsers: [],
        loginUsers: [],
        pageNum: 1,
        pageSize: 10,
        totalPageNum: 0,
        isLogin: false,
        tabActive: 'tabLeft',
        fileUrl: feConfig.fileUrl
      }
    },
    async mounted() {
      if (this.$store.state.IS_DEV) {
        this.fileUrl = feConfig.fileDevURL;
      }
      if (this.$store.state.IS_APP) {
        this.checkLogin(async(res) => {
          if (res) {
            this.isLogin = true;
          }
          await this.getPullNewInfo({
            "noIndicator": true
          });
          await this.getYesterdayAwardAmt({
            "noIndicator": true
          });
          let {
            data,
            pagesize,
            count
          } = await this.getInviteUserList({
            pagenum: this.pageNum,
            pagesize: this.pageSize,
            "noIndicator": true
          });
          this.totalPageNum = Math.ceil(count / pagesize)
          this.loginUsers = data;
          if (this.pageNum == this.totalPageNum) {
            this.allLoaded = true;
            this.bottomPullText = ""
          }
        })
      } else {
        // Cookies.set("GroukAuth", 
        // "1.8e82d158f2cf188525c6bec291296ab0c0a711400790bb6cf721e858ae5211a32f8ed7339fb2e548c187281bab7fcf9c5d30216a7fcccc9efb66552b9116ffdd", {
        //   expires: 30
        // });
        this.checkLogin(async(res) => {
          if (res) {
            this.isLogin = true;
          }
          await this.getPullNewInfo({
            "noIndicator": true
          });
          await this.getYesterdayAwardAmt({
            "noIndicator": true
          });
          let {
            data,
            pagesize,
            count
          } = await this.getInviteUserList({
            pagenum: this.pageNum,
            pagesize: this.pageSize,
            "noIndicator": true,
            "awardType": "firstAward"
          });
          this.totalPageNum = Math.ceil(count / pagesize)
          for (let u in data) {
            if (typeof(data[u].awardedCount) != "undefined" && data[u].awardedCount == 0 && typeof(data[u].userActions) != "undefined") {
              data[u].step = this.checkLoginUser(data[u].userActions);
            }
          }
          this.loginUsers = data;
          if (this.pageNum == this.totalPageNum) {
            this.allLoaded = true;
            this.bottomPullText = ""
          }
        })
        // this.$router.push({
        //   name: "activityOver"
        // })
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
        if (this.pageNum == this.totalPageNum) {
          if (this.tabActive == 'tabLeft') {
            this.$refs.loadmore.onBottomLoaded();
          } else {
            this.$refs.loadmore1.onBottomLoaded();
          }
          this.allLoaded = true;
          this.bottomPullText = ""
          return;
        }
        this.pageNum++;
        let {
          data,
          pagesize,
          count
        } = await this.getInviteUserList({
          pagenum: this.pageNum,
          pagesize: this.pageSize,
          awardType: type
        });
        this.totalPageNum = Math.ceil(count / pagesize)
        for (let u in data) {
          if (typeof(data[u].awardedCount) != "undefined" && data[u].awardedCount == 0 && typeof(data[u].userActions) != "undefined") {
            data[u].step = this.checkLoginUser(data[u].userActions);
          }
          this.loginUsers.push(data[u]);
        }
        if (this.tabActive == 'tabLeft') {
          this.$refs.loadmore.onBottomLoaded();
        } else {
          this.$refs.loadmore1.onBottomLoaded();
        }
        if (this.pageNum == this.totalPageNum) {
          this.allLoaded = true;
          this.bottomPullText = ""
        }
      },
      async remind(invitee, reminded, that) {
        if (reminded) {
          Toast("已经提醒过啦~")
          return;
        }
        console.log(invitee)
        let backData = await this.remindLogin({
          invitee: invitee
        });
        if (backData) {
          that.srcElement.className = "reminded"
        }
      },
      checkLoginUser(userAction) {
        console.log(userAction)
        let step = 0;
        for (let u in userAction) {
          if (userAction[u]['userActionEnum'] == "listFeed") {
  
            step = 1;
          } else if (userAction[u]['userActionEnum'] == "viewSubject") {
            if (userAction[u]['count'] == 1) {
              step = 2;
            } else {
              step = 3;
            }
          }
        }
        return step;
      },
      toShare(type) {
        if (!this.isLogin) {
          this.checkLogin(async(res) => {})
          return;
        }
        let ua = this.$store.state.UA;
        if (ua.indexOf("closer-ios") > -1) {
          let isOK = false;
          setupWebViewJavascriptBridge(function(bridge) {
            if (bridge) {
              //ios获取用户token 判断登录
              bridge.callHandler("inviteNewGuyAction", type, function(data, responseCallback) {})
            }
          })
        } else if (ua.indexOf("closer-android") > -1) {
          if (typeof window.bridge != "undefined") {
            try {
              window.bridge.inviteNewGuyAction(type);
            } catch (e) {
              Toast("请升级最新版本客户端")
            }
          }
        }
  
      },
      clickArrow(e, key) {
        if (e.target.className == "arrow-right") {
          e.target.className = "arrow-down"
          document.getElementById("m" + key).style.display = 'flex';
          document.getElementById("b" + key).style.display = 'flex';
        } else {
          e.target.className = "arrow-right";
          document.getElementById("m" + key).style.display = 'none';
          document.getElementById("b" + key).style.display = 'none';
        }
      },
      inviteFriends() {
        if (!this.isLogin) {
          this.checkLogin(async(res) => {})
          return;
        }
        let ua = this.$store.state.UA;
        if (ua.indexOf("closer-ios") > -1) {
          setupWebViewJavascriptBridge(function(bridge) {
            //console.log("toShare ios bridge", bridge)
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
      },
      formateMoney(money) {
        return (Math.round(money * 100) / 100).toFixed(2)
      },
      toRule() {
        this.$router.push({
          name: "pullNewRule"
        })
      },
      clickTab(tab) {
        this.tabActive = tab;
      }
    }
  
  }
</script>

<style lang="less" scoped>
  .pullnew {
    background: url("../assets/images/bg.png") no-repeat center;
    height: 1680pr;
    background-size: cover;
    padding-top: 186pr;
    text-align: center;
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
    .pullnew-title {
      background: url("../assets/images/house.png") no-repeat center;
      background-size: cover;
      width: 650pr;
      height: 205pr;
      margin: 24px auto 0 auto;
      .share-button {
        background: url("../assets/images/share-button.png") no-repeat center;
        width: 341pr;
        height: 109pr;
        margin: 0 auto;
        background-size: cover;
      }
    }
    .content {
      position: relative;
      height: 673pr;
      border: 6pr solid #000000;
      background: #ffffff;
      border-radius: 10pr;
      text-align: center;
      margin: -40pr 17pr 17pr 21pr;
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
        margin: 0 30pr 25pr 30pr;
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
          font-size: 20pr;
        }
      }
      .progress-desc {
        display: flex;
        flex-direction: row;
        justify-content: center;
        color: #454545;
        font-size: 20pr;
        margin: 18pr 21pr 40pr 21pr;
        text-align: center;
        >div {
          width: 80pr;
          margin-left: 20pr;
        }
        .progress-desc-text1 {
          width: 80pr;
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
      .share-tips {
        margin-top: 20pr;
        font-size: 20pr;
        color: #747474;
      }
      .balance {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 20pr;
        .remain-money {
          color: #212121;
          font-size: 32pr;
          margin: 15pr 20pr 0 0;
        }
        .drawing {
          background: url("../assets/images/drawing.png") no-repeat center;
          background-size: cover;
          width: 197pr;
          height: 78pr;
        }
      }
    }
    .bottom {
      background-color: #025182;
      padding-bottom: 48pr;
      .friends-list {
        flex-shrink: 1;
        margin: 0 17pr 0 21pr;
        border: 6pr solid #000000;
        border-radius: 0 0 10pr 10pr;
        .remind-title {
          width: 100%;
          border-bottom: 6pr solid #000000;
          padding: 24pr 63pr 27pr 59pr;
          background-color: #1570A9;
          text-align: center;
          font-size: 28pr;
          line-height: 50pr;
          color: #ffffff;
        }
        .loadmore {
          background-color: #DC214C;
          padding-bottom: 83pr;
          .remind-content {
            .friend {
              position: relative;
              margin-top: 41pr;
              color: #ffffff;
              .self-top{
                   border: 6pr solid #feda02;
                }
              .top {
                display: flex;
                flex-direction: row;
                .headphoto {
                  width: 87pr;
                  height: 87pr;
                  margin-left: 23pr;
                }
                .info {
                  width: 300pr;
                  display: flex;
                  flex-direction: column;
                  margin-left: 20pr;
                  .name {
                    font-size: 28pr;
                    margin-right: 20pr;
                  }
                }
                .self {
                  color: #000000;
                }
                .amount {
                  width: 225pr;
                  height: 96pr;
                  text-align: center;
                  font-size: 32pr;
                  margin-top: 15pr;
                }
                .reminded {
                  position: absolute;
                  width: 225pr;
                  height: 96pr;
                  right: 18pr;
                  background: url("../assets/images/reminded.png") no-repeat center;
                  background-size: cover;
                }
                .remind-login {
                  position: absolute;
                  width: 225pr;
                  height: 96pr;
                  right: 18pr;
                  background: url("../assets/images/remind-login.png") no-repeat center;
                  background-size: cover;
                }
              }
              .middle {
                display: none;
                flex-direction: row;
                margin: 17pr 102pr 17pr 102pr;
                .dot {
                  background: url(../assets/images/dot1.png);
                  background-size: cover;
                  width: 33pr;
                  height: 33pr;
                }
                .dot-grey {
                  background: url(../assets/images/dot2.png);
                  background-size: cover;
                  width: 33pr;
                  height: 33pr;
                }
                .line {
                  margin: 12pr 2pr 12pr 2pr;
                  width: 209pr;
                  height: 4pr;
                  border: 4pr dashed #313131;
                  width: 200pr;
                }
              }
              .progress-bottom {
                display: none;
                font-size: 28pr;
                color: #FFC4D1;
                .desc-active {
                  color: #ffffff;
                }
                .desc1 {
                  margin-right: 100pr;
                }
                .desc2 {
                  margin-right: 76pr;
                }
                .desc3 {
                  margin-right: 43pr;
                }
              }
              .arrow {
                text-align: left;
                margin-top: 10pr;
                .progress-span {
                  font-size: 28pr;
                  color: #FDE9EE;
                  margin: 10pr 10pr 0 31pr;
                }
                .arrow-right:after {
                  content: '';
                  display: inline-block;
                  width: 14pr;
                  height: 14pr;
                  border-top: 2pr solid #ffffff;
                  border-right: 2pr solid #ffffff;
                  transform: rotate(45deg);
                  -webkit-transform: rotate(45deg);
                }
                .arrow-down:after {
                  content: '';
                  display: inline-block;
                  width: 14pr;
                  height: 14pr;
                  border-top: 2pr solid #ffffff;
                  border-right: 2pr solid #ffffff;
                  transform: rotate(135deg);
                  -webkit-transform: rotate(135deg);
                }
              }
            }
            .new-friend {
              background-color: #DC214C;
              padding-top: 30pr;
              .top {
                font-size: 26pr;
                color: #fde9ee;
                display: flex;
                flex-direction: row;
                .headphoto {
                  width: 60pr;
                  height: 60pr;
                  border-radius: 60pr;
                  margin-left: 20pr;
                }
                .nickname {
                  text-align: left;
                  margin-left: 19pr;
                  width: 424pr;
                }
              }
            }
          }
        }
      }
    }
  }
</style>

