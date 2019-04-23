<template>
    <div class="page-title">
        <div style="height: 60px">
            <span style="position: absolute;left: 200px;top: 30px;font-size: 20px;color:#348EED;">时空信息平台云</span>
            <span style="position: absolute;right: 200px;top:30px">
                    <span>
                       <Icon type="md-person" size="24"/>
                    </span>
                    <span>
                      当前用户：
                    </span>
                    <span>
                       游客|
                    </span>
                    <span>
                       登录 |
                    </span>
                    <span>
                       注册
                    </span>
                </span>
        </div>
        <Menu class="menu-view" mode="horizontal" :theme="theme1" active-name="1" @on-select="navigateTo">
            <MenuItem name="/homepage">
                <Icon type="ios-paper" />
                首页
            </MenuItem>
            <Submenu name="/resourcespage">
                <template slot="title">
                    <Icon type="ios-stats" />
                    资源中心
                </template>
                <!--                    <MenuGroup title="使用">-->
                <MenuItem name="2-1">数据服务</MenuItem>
                <MenuItem name="2-2">功能服务</MenuItem>
                <!--                    </MenuGroup>-->
            </Submenu>
            <MenuItem name="/newspage">
                <Icon type="ios-people" />
                新闻中心
            </MenuItem>
            <MenuItem name="/framepage">
                <Icon type="ios-construct" />
                应用框架
            </MenuItem>
            <MenuItem name="/developpage">
                <Icon type="ios-construct" />
                开发中心
            </MenuItem>
            <MenuItem name="/applicationpage">
                <Icon type="ios-construct" />
                典型应用
            </MenuItem>
        </Menu>
    </div>
</template>

<script>
    import './header.less'
    export default {
        data(){
            return{
                theme1: 'light'
            }
        },
        methods: {
            navigateTo (name) {
                this.$router.push({path:name});
            }
     }
    }
</script>

<style scoped>

</style>