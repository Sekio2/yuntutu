<template>
  <div id="globalheader">
    <a-row :wrap="false">
      <a-col flex="200px">
        <router-link to="/" class="titlebar">
          <img src="../assets/logo.jpg" alt="logo" class="logo" />
          <div class="title">云图图☁️</div>
        </router-link>
      </a-col>
      <a-col flex="auto">
        <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" @click="handleMenuClick"/>
      </a-col>
      <a-col flex="100px">
        <div class="user-login-status">
          <div v-if="loginUserStore.loginUser.id">{{ loginUserStore.loginUser.userName??'无名' }}</div>
          <div v-else><a-button type="primary" style="margin-left: 16px">登录</a-button></div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts" setup>
import { h, ref } from 'vue'
import { HomeOutlined } from '@ant-design/icons-vue'
import type { MenuProps } from 'ant-design-vue'
import { useRouter } from 'vue-router'  
import { useLoginUserStore } from '../stores/useLoginUserStore.ts'

const loginUserStore = useLoginUserStore()
const router = useRouter()  
// 当前选中的菜单项
const current = ref<string[]>(['mail'])
const items = ref<MenuProps['items']>([
  {
    key: '/',
    icon: () => h(HomeOutlined),
    label: '主页',
    title: '主页',
  },
  {
    key: '/about',
    label: '关于',
    title: '关于',
  },
  {
    key: 'others',
    label: h('a', { href: 'https://www.baidu.com', target: '_blank' }, '百度'),
    title: '百度',
  },
])
const handleMenuClick = ({key}) => {
  router.push({
    path:key
  })
}
// 监听路由变化，更新当前选中的菜单项
router.afterEach((to,from,next)=>{
  current.value=[to.path]
})
</script>

<style scoped>
.titlebar {
  display: flex;
  align-items: center;
}
.logo {
  height: 40px;
}
.title {
  color: black;
  font-size: 24px;
  margin-left: 16px;
}
</style>

