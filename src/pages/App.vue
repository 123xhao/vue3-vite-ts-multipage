<script setup lang="ts">
function goLogin(index:number){
  let url=''
  if(index===1){
    url=window.location.href+'login/index.html'
    window.open(url,'_self')
  }else if(index===2){
    url=window.location.href+'login/index.html'
    window.open(url,'_blank')
  }else if(index===3){
    url=window.location.href+'admin/index.html'
    window.open(url,'_self')
  }else{
    url=window.location.href+'admin/index.html'
    window.open(url,'_blank')
  }
}
</script>

<template>
  <!--Vue3组件中的模板结构可以没有根标签-->
  <!-- <router-view /> -->
  首页
  <a-button type="primary" @click="goLogin(1)">去登录系统当前页</a-button>
  <a-button type="primary" @click="goLogin(2)">去登录系统新网页</a-button>
  <a-button @click="goLogin(3)">去admin系统当前页</a-button>
  <a-button @click="goLogin(4)">去admin系统新网页</a-button>
</template>

<style lang="scss" scoped>
.ant-btn-primary{
  margin: 0 $p-10;
}
</style>
