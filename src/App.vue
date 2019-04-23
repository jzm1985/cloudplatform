<template>
  <div id="app">
    <!--<div class="title">框架</div>-->
    <myheader style="z-index: 10000"></myheader>
    <router-view/>
  </div>
</template>

<script>
  import myheader from "@/components/myheader"
    export default {
        name: 'App',
      components : {
        myheader,
      }
    }
</script>

<style lang="less">
  .size{
    width: 100%;
    height: 100%;
  }
  html,body{
    .size;
    overflow: auto;
    margin: 0;
    padding: 0;
  }
  #app {
    .size;
  }
  .title {
    height: 60px;
    width: 100%;
    background: #348EED;
    color: #ffffff;
    padding-top: 20px;
    font-size: 18px;
    padding-left: 20px;
  }
</style>
