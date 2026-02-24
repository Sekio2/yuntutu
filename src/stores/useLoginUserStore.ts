import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useLoginUserStore = defineStore('loginUser', () => {
  const loginUser = ref<any>({
    userName:"未登录"
  })

  //未完成
  async function fetchLoginUser() {
    // 这里可以调用后端接口获取登录用户信息
    //测试用户登录 3s后自动登录
    setTimeout(() => {
      loginUser.value = {
        id: 1,
        userName: '测试用户',
      }
    }, 3000)
  }
  function setLoginUser(newLoginUser:any) {
    loginUser.value = newLoginUser;
  }
  //定义怎么更改状态
 
//返回
  return { loginUser, setLoginUser, fetchLoginUser }
})