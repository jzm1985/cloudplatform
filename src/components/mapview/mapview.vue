<template>
 <div id="mapContent">
   <div style="display: inline-block;height: 40px;width: 600px;position: fixed;right: 10px;top: 80px;z-index: 1000">
     <Button style="height: 30px;width:80px;position: relative;">
      <img style="position: absolute;top:7px" src="@/assets/images/layer/tool/default/zoomOut.png"/>
       <span style="position: absolute;top:7px;left: 35px">放大</span>
     </Button>
     <Button style="height: 30px;width:80px;position: relative;">
       <img style="position: absolute;top:7px" src="@/assets/images/layer/tool/default/zoomIn.png"/>
       <span style="position: absolute;top:7px;left: 35px">缩小</span>
     </Button>
     <Button style="height: 30px;width:80px;position: relative;">
       <img style="position: absolute;top:7px" src="@/assets/images/layer/tool/default/move.png"/>
       <span style="position: absolute;top:7px;left: 35px">移动</span>
     </Button>
     <Button style="height: 30px;width:100px;position: relative;">
       <img style="position: absolute;top:7px" src="@/assets/images/layer/tool/default/feel.png"/>
       <span style="position: absolute;top:7px;left: 35px">态势感知</span>
     </Button>
     <Button style="height: 30px;width:80px;position: relative;">
       <img style="position: absolute;top:7px" src="@/assets/images/layer/tool/default/tool.png"/>
       <span style="position: absolute;top:7px;left: 35px">工具</span>
     </Button>
     <Button style="height: 30px;width:80px;position: relative;">
       <img style="position: absolute;top:7px" src="@/assets/images/layer/tool/default/clear.png"/>
       <span style="position: absolute;top:7px;left: 35px">清空</span>
     </Button>
     <Button style="height: 30px;width:80px;position: relative;">
       <img style="position: absolute;top:7px" src="@/assets/images/layer/tool/default/full.png"/>
       <span style="position: absolute;top:7px;left: 35px">全屏</span>
     </Button>
   </div>
 </div>
</template>
<script>
  import './mapview.less'
  import Map from 'ol/Map.js';
  import View from 'ol/View.js';
  import {Tile} from 'ol/layer.js';
  import {OSM, TileWMS,Vector as VectorSource} from 'ol/source.js';
  import 'ol/ol.css'
  var raster = new Tile({
    source: new OSM()
  });
    export default {
      // data() {
        //
        // },
      mounted () {
        this.initMap();
      },
      methods:{
          initMap(){
            new Map({
              target: "mapContent",
              layers: [
                raster
              ],
              view: new View({
                center: [0, 0],
                zoom: 2
              })
              // view: new View({
              //   center: [103.3, 35.5],
              //   zoom: 4
              // })
            });
          }
      }
    }
</script>
