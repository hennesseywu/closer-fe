import api from '../../utils/api';

export default {
  async wechatConfig(payload) {
    console.log('service--', payload)
    return await axios.post(api.admin.wechat_config, payload);
  },
  async wechatAuthorization(payload) {
    let params = {
      path: (Cookies.get("IS_DEV") ? api.wxLoginDevUrl : api.wxLoginUrl) + payload
    };
    return await Axios.post(api.admin.get_auth_path, params)
  },
  async checkWxCode(payload) {
    return await Axios.post(api.admin.check_wechat, payload)
  },
  async loginByWx(payload) {
    return await Axios.post(api.admin.login_with_wechat, payload)
  },
  async startTest(payload) {
    // return await Axios.post(api.activity.tuzhu.start_test, payload)
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: {
            list:
              [
                {
                  questionId: '2390',
                  title: '天赋无天赋无机物天赋无天赋无机物天赋无机物机物天赋无天赋无机物天赋无机物机物天赋无机物机物',
                  answers: [
                    {
                      title: '答东方闪发电房电案',
                      seq: '1'
                    },
                    {
                      title: '大大大大',
                      seq: '2'
                    },
                    {
                      title: '答颠三大大大倒四案',
                      seq: '3'
                    },
                    {
                      title: '答发发发发的发生的案',
                      seq: '4'
                    }
                  ]
                },
                {
                  questionId: '23',
                  title: '天赋无机物阿达地方',
                  answers: [
                    {
                      title: '答东方发发发闪电案',
                      seq: '1'
                    },
                    {
                      title: '答阿道反倒是夫撒多案',
                      seq: '2'
                    },
                    {
                      title: '答颠三倒师德师风四案',
                      seq: '3'
                    },
                    {
                      title: '手动阀',
                      seq: '4'
                    }
                  ]
                },
                {
                  questionId: '987',
                  title: '天赋打发士大夫撒旦法胜多负少的无机物',
                  answers: [
                    {
                      title: '打发点',
                      seq: '1'
                    },
                    {
                      title: '发大幅度发',
                      seq: '2'
                    },
                    {
                      title: '发达的',
                      seq: '3'
                    },
                    {
                      title: '阿道夫的份儿',
                      seq: '4'
                    }
                  ]
                },
                {
                  questionId: '12321',
                  title: '天赋无爱迪生发所多付撒多若翁群翁人气二无若群无群二群群机物',
                  answers: [
                    {
                      title: '答东方闪的范德萨发斯蒂芬电案',
                      seq: '1'
                    },
                    {
                      title: '打发',
                      seq: '2'
                    },
                    {
                      title: '大师傅的',
                      seq: '3'
                    },
                    {
                      title: '打发',
                      seq: '4'
                    }
                  ]
                },
                {
                  questionId: '332',
                  title: '天赋无生发所多付撒多若翁群翁机物',
                  answers: [
                    {
                      title: '发达地方',
                      seq: '1'
                    },
                    {
                      title: '和句句',
                      seq: '2'
                    },
                    {
                      title: '即可将哦哦',
                      seq: '3'
                    },
                    {
                      title: '破看到过',
                      seq: '4'
                    }
                  ]
                },
                {
                  questionId: '1234',
                  title: '天赋无生发所多付撒多若翁群翁机大法师打发第三方物',
                  answers: [
                    {
                      title: '们拍摄风格',
                      seq: '1'
                    },
                    {
                      title: '浪费',
                      seq: '2'
                    },
                    {
                      title: '公司发给第三方',
                      seq: '3'
                    },
                    {
                      title: '发送到',
                      seq: '4'
                    }
                  ]
                },
                {
                  questionId: '123',
                  title: '天赋无ad发送到发斯蒂芬斯蒂芬机物',
                  answers: [
                    {
                      title: '烦死个人',
                      seq: '1'
                    },
                    {
                      title: '二人台',
                      seq: '2'
                    },
                    {
                      title: '答而台湾人颠三倒四案',
                      seq: '3'
                    },
                    {
                      title: '大大方方',
                      seq: '4'
                    }
                  ]
                },
                {
                  questionId: '12',
                  title: '天赋无阿达地方地方机物',
                  answers: [
                    {
                      title: '师傅告诉告诉',
                      seq: '1'
                    },
                    {
                      title: '爱对方答复',
                      seq: '2'
                    },
                    {
                      title: '大大方方付付',
                      seq: '3'
                    },
                    {
                      title: '卡没得法',
                      seq: '4'
                    }
                  ]
                }
              ]
          }
        })
      }, 500)
    })
  },
  async endTest(payload) {
    // return await Axios.post(api.activity.tuzhu.end_test, payload)
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: {
            code: 0,
            result: {
              data: {
                level: 2,
                score: 80,
                awardAmt: 444,
              }
            }
          }
        })
      }, 500)
    })
  },
  async userShare(payload) {
    return await Axios.post(api.activity.tuzhu.share_user_answer, payload)
  }
}