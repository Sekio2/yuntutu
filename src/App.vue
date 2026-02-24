<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import BasicLayout from './layouts/BasicLayout.vue'
import { healthUsingGet } from './api/mainController';
import { useLoginUserStore } from './stores/useLoginUserStore.ts'

const loginUserStore = useLoginUserStore()
loginUserStore.fetchLoginUser()

//测试后端是否调通
healthUsingGet().then(res => {
  console.log('后端健康检查结果:', res);
}).catch(err => {
  console.error('后端健康检查失败:', err);
});
</script>

<template>
  <div id="app">
    <BasicLayout />
  </div>
</template>

<style scoped></style>
