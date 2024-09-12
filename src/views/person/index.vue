<template>
  <div class="person  flex flex-col items-center color-white">
    <div class="sm:w-100% md:w-450 lg:w-650  text-center">

      <h1 class="mb-20 fs-30">{{$t('person.title')}}</h1>
      <div class="mb-20 fs-14">
        {{$t('person.intro')}}
      </div>
       <div class="position-relative">
         <img class="w-100% blur-5" :src="ImgUrl">
         <!--    <img class=" sm:w-100% md:w-450 lg:w-650"  src="@/assets/images/home/Or.webp">-->
         <el-button class="position-absolute top-50% left-50% w-140 mt--25 ml--70 h-30 lg:h-50 fs-20" type="primary" @click="downLoadFn">{{$t('person.downloadButton')}}</el-button>
       </div>

    </div>

  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import { useI18n } from 'vue-i18n';
import  axios  from "axios";
// import { LanguageType } from '@/stores/interface';
import router from '@/routers';
import { useGlobalStore } from '@/stores/modules/global';
import Img from "@/components/Upload/Img.vue";

const globalStore = useGlobalStore();
const i18n = useI18n();

const ImgUrl = ref('');

onMounted(()=>{
  ImgUrl.value= localStorage.getItem('imgUrl');
})

// 下载图片
const downLoadFn=async ()=>{

  axios({method:"get",url:ImgUrl.value.replace('https://img.photoes.ai/',"/downloadImage"),responseType:"blob"}).then(response=>{
    const link = document.createElement("a");
    let blob = new Blob([response.data], { type: response.data.type });
    let url = URL.createObjectURL(blob);
    link.href = url;
    link.download = 'image';
    link.click();
    window.URL.revokeObjectURL(url)
  })
  // const image = new Image();
  // image.setAttribute('crossOrigin', 'anonymous');
  // image.onload = () => {
  //   const canvas = document.createElement('canvas');
  //   canvas.width = image.width;
  //   canvas.height = image.height;
  //   const context = canvas.getContext('2d');
  //   context.drawImage(image, 0, 0, image.width, image.height);
  //   const url = canvas.toDataURL('image/png');
  //   const a = document.createElement('a');
  //   const event = new MouseEvent('click');
  //   a.download =  'photo';
  //   a.href = url;
  //   a.dispatchEvent(event);
  // };
  // image.src = ImgUrl.value;
}

</script>

<style lang="scss">
.person{
  @media (max-width: 768px){
    h1{
      font-size: 24px !important;
    }
  }
  h2{
    font-size: 24px;
    margin-top: 20px;
  }
  p{
    font-size: 16px;
    margin-top: 10px;
    background-clip: text;
  }

  //background: url("../../assets/images/home/Or.webp");
  .el-form-item__label {
    color: #ffffff !important;

  }
  .el-form-item{
    margin-right: 10px !important;
  }
  .demo-form-inline .el-select {
    --el-select-width:100px;
  }
}

</style>
