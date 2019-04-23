<template>
  <div class="container">
    <div class="menu">
      <div style="width: 45px;height: 45px;display: inline-block;position: absolute;top: 10px;left: 10px" @click="handleMenuClk">
        <img src="@/assets/images/layer/menu/selected/selectLayer.png"/>
        <div>图层</div>
      </div>
      <div style="width: 45px;height: 45px;display: inline-block;position: absolute;top: 60px;left: 10px">
        <img src="@/assets/images/layer/menu/selected/selectQuery.png"/>
        <div>查询</div>
      </div>
      <div style="width: 45px;height: 45px;display: inline-block;position: absolute;top: 110px;left: 10px">
        <img src="@/assets/images/layer/menu/selected/selectCompare.png"/>
        <div>对比</div>
      </div>
      <div style="width: 45px;height: 45px;display: inline-block;position: absolute;top: 160px;left: 10px">
        <img src="@/assets/images/layer/menu/selected/selectAnayle.png"/>
        <div>分析</div>
      </div>
    </div>
    <div class="content">
      <div class="panel" :class="{show:showPanel}"></div>
      <map-view class="mapview"></map-view>
      </div> 

  </div>
</template>
<script>
  import './mainview.less'
  import mapview from '@/components/mapview'
  export default {
    name: "homepage",
    data(){
      return{
        showPanel:false
      }
    },
    components:{
      'map-view':mapview
    },methods: {
      handleMenuClk(){
this.showPanel=!this.showPanel;
      }
    },
  }
</script>
