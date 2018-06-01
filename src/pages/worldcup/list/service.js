export async function getList(payload) {
    console.log(payload)
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: {
            list: [
              {
                url: '../../assets/logo.png',
                desc: '这是描述信息啦啦啦啦啦1'
              },
              {
                url: '../../assets/logo.png',
                desc: '这是描述信息啦啦啦啦啦2'
              },
              {
                url: '../../assets/logo.png',
                desc: '这是描述信息啦啦啦啦啦3'
              },
              {
                url: '../../assets/logo.png',
                desc: '这是描述信息啦啦啦啦啦4'
              },
            ]
          }
        })
      }, 500);
    })
  }