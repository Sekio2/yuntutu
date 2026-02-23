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
        <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" />
      </a-col>
      <a-col flex="100px">
        <div class="user-login-status">
          <a-button type="primary" style="margin-left: 16px">登录</a-button>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts" setup>
import { h, ref } from 'vue'
import { HomeOutlined } from '@ant-design/icons-vue'
import type { MenuProps } from 'ant-design-vue'
import type router from '@/router'
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
>
