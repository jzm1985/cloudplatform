<template>
    <div style="overflow: auto;margin-top: 125px">
<!--        <div class="page-title">-->
<!--            <div style="height: 60px">-->
<!--                <span style="position: absolute;left: 200px;top: 30px;font-size: 20px;color:#348EED;">时空信息平台云</span>-->
<!--                <span style="position: absolute;right: 200px;top:30px">-->
<!--                    <span>-->
<!--                       <Icon type="md-person" size="24"/>-->
<!--                    </span>-->
<!--                    <span>-->
<!--                      当前用户：-->
<!--                    </span>-->
<!--                    <span>-->
<!--                       游客|-->
<!--                    </span>-->
<!--                    <span>-->
<!--                       登录 |-->
<!--                    </span>-->
<!--                    <span>-->
<!--                       注册-->
<!--                    </span>-->
<!--                </span>-->
<!--            </div>-->
<!--            <Menu class="menu-view" mode="horizontal" :theme="theme1" active-name="1">-->
<!--                <MenuItem name="1">-->
<!--                    <Icon type="ios-paper" />-->
<!--                    首页-->
<!--                </MenuItem>-->
<!--                <Submenu name="2">-->
<!--                    <template slot="title">-->
<!--                        <Icon type="ios-stats" />-->
<!--                        资源中心-->
<!--                    </template>-->
<!--&lt;!&ndash;                    <MenuGroup title="使用">&ndash;&gt;-->
<!--                        <MenuItem name="2-1">数据服务</MenuItem>-->
<!--                        <MenuItem name="2-2">功能服务</MenuItem>-->
<!--&lt;!&ndash;                    </MenuGroup>&ndash;&gt;-->
<!--                </Submenu>-->
<!--                <MenuItem name="3">-->
<!--                    <Icon type="ios-people" />-->
<!--                    新闻中心-->
<!--                </MenuItem>-->
<!--                <MenuItem name="4">-->
<!--                    <Icon type="ios-construct" />-->
<!--                    应用框架-->
<!--                </MenuItem>-->
<!--                <MenuItem name="5">-->
<!--                    <Icon type="ios-construct" />-->
<!--                    典型应用-->
<!--                </MenuItem>-->
<!--            </Menu>-->
<!--        </div>-->
        <div class="page-carousel">
            <Carousel v-model="value1" loop>
                <CarouselItem>
                    <div class="demo-carousel" style="background: #348EED;height: 400px">1</div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel" style="background: blueviolet;height: 400px">2</div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel" style="background: antiquewhite;height: 400px">3</div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel" style="background: brown;height: 400px">4</div>
                </CarouselItem>
            </Carousel>
        </div>
        <div class="page-resource">
            <div style="text-align: center;color: crimson;font-size: 24px">资源中心</div>
            <div style="text-align: center;font-size: 20px;width: 80%;padding-left: 10%;padding-top: 20px">智慧时空信息云平台遵循开放地理空间联盟（OGC）的服务标准，提供了包括WMS（Web地图服务）、WFS（Web要素服务）、
                WFS-G（地名地址服务）等，以及影像数据服务、三维数据服务，还着重增加了新型产品数据服务、时态数据服务及功能服务。</div>
        </div>
        <div class="page-tab">
            <Tabs value="name1">
                <TabPane label="影像数据服务" name="name1">
                    <div class="yxClass" style="background: #031527;height: 350px;width: 300px;margin-left: 20px;display: inline-block"></div>
                    <div class="yxClass" style="background: #031527;height: 350px;width: 300px;margin-left: 20px;display: inline-block"></div>
                    <div class="yxClass" style="background: #031527;height: 350px;width: 300px;margin-left: 20px;display: inline-block"></div>
                </TabPane>
                <TabPane label="矢量数据服务" name="name2"><div style="background: aqua;height: 400px"></div></TabPane>
                <TabPane label="功能服务" name="name3"><div style="background: blueviolet;height: 400px"></div></TabPane>
            </Tabs>
        </div>
        <div class="page-news">
            <div style="text-align: center;color: crimson;font-size: 24px">新闻中心</div>
            <div></div>
        </div>
        <div class="page-frame">
            <div style="text-align: center;color: crimson;font-size: 24px">应用框架</div>
            <div></div>
        </div>
        <div class="page-application">
            <div style="text-align: center;color: crimson;font-size: 24px">应用中心</div>
            <div></div>
        </div>
    </div>
</template>

<script>
    import './homepage.less'
    export default {
        name: "homepage",
        data(){
            return{
                showPanel:false,
                value1: 0,
                theme1: 'light'
            }
        },

    }
</script>