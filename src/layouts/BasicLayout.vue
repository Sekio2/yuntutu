<template>
  <div id="basiclayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header"><GlobalHeader /></a-layout-header>
      <a-layout-content class="content"><router-view /></a-layout-content>
      <a-layout-footer class="footer">
        <a href="www.baidu.com">云图图☁️ by Dori </a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import GlobalHeader from '../components/GlobalHeader.vue'
</script>

<style scoped>
#basiclayout .footer {
  text-align: center;
  background: #efefef;
  padding: 16px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
#basiclayout .content {
  padding: 30px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  margin-bottom: 48px; /* 为了避免内容被固定的 footer 遮挡 */
}
#basiclayout .header {
  padding-inline: 20px;
  color: black;
  margin-bottom: 16px;
  background: white;
}
</style>
