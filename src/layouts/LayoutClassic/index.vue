<!-- 经典布局 -->
<template>
  <section class="flex flex-col h-full">
    <header class="h-60  bg-black shrink-0 flex w-full justify-center items-center sm:px-26 md:px-45 color-white">
      <div class="flex sm:w-100% md:w-450 lg:w-650 items-center justify-end">
        <button class="flex bg-transparent border-transparent  sm+:hover:bg-gray-200 mr-8 justify-between items-center">
                <svg-icon
                  class="cursor-pointer"
                  style="width: 22px;margin-right: 8px"
                  name="en"
                ></svg-icon>
          <span class="inline-block  fs-20 text-sm color-white">English</span>
        </button>
      </div>
    </header>
    <el-container class="flex-1 flex flex-col overflow-auto">
      <Main class=" flex flex-col items-center color-white">

      </Main>

    </el-container>
  </section>

</template>

<script setup lang="ts" name="layoutClassic">

import router from '@/routers';
import Main from '@/layouts/components/Main/index.vue';
import { LanguageType } from '@/stores/interface';
import { useGlobalStore } from '@/stores/modules/global';
import { googleInfo } from '@/api/modules/person'

import { reactive, ref } from 'vue'
import { useI18n } from "vue-i18n";
import { decodeCredential } from 'vue3-google-login'

const globalStore = useGlobalStore();
const i18n = useI18n();
// 登录弹窗
const dialogVisible = ref(false)
// 用户选择或登录谷歌账号后会触发此回调
const callback = (response) => {
  // 使用 decodeCredential 解码 JWT credential 获取用户信息
  console.log(response.credential);
  const userInfo = decodeCredential(response.credential)
  googleInfo({data:response.credential}).then(response => {
    console.log(response);
  })
}

// 菜单跳转路由
function getUrlClick(url) {
//跳转
router.push({ path: `/${url}` });
}

// 切换语言
const changeLang=(type)=>{
  i18n.locale.value = type;
  // globalStore.setGlobalState('language', 'zh');
}
</script>

<style scoped lang="scss">
@import './index.scss';

.logo {
  font-size: 24px;
  font-weight: bold;
}

.fixMenu {
  height: 40px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5px 0 25px;
  background-color: #fafbff;
}

.collapse {
  justify-content: center;
  padding: 0;
}
</style>
<style lang="scss">
.el-main{
  color: #ffffff;
  background: #000 !important;
  padding: 10px !important;

}
</style>
