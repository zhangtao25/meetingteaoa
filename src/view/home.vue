<style>
#home{height: 100%}
</style>
<template>
  <div id="home">
    <el-container style="height: 100%;">
      <el-aside style="width: 236px;background-color: #343c4a">
        <p style="height:60px;width:236px;
                  background-color:#3a4556;
                  color: rgb(191, 202, 217);
                  font-size: 25px;
                  line-height: 60px;
                  text-align: center">MeetingTea</p>
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          @select="handleSelect"
          text-color="rgb(191, 202, 217)"
          active-text-color="#38aaf2"
          background-color="#343c4a"
          style="border-right: none;">
          <el-submenu index="1">
            <template slot="title">
              <i class="iconfont icon-shujuguanli"></i>
              <span>数据管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">商品列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="iconfont icon-tianjiashuju"></i>
              <span>添加数据</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">添加用户</el-menu-item>
              <el-menu-item index="2-2">添加商品</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="3">
            <i class="iconfont icon-dingdan"></i>
            <span slot="title">订单管理</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="iconfont icon-wenjianguanli"></i>
            <span slot="title">后台文件管理</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="iconfont icon-shezhi"></i>
            <span slot="title">修改资料</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header height="60px" style="background:#EFF2F7">

        </el-header>
        <el-main style="background:#fff">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleSelect(key, keyPath){
        console.log(key, keyPath);
        if(key == "4"){
          this.$router.push({name:"file-manager"})
        }else if (key == "1-1"){
          this.$router.push({name:"list-of-goods"})
        }else if (key == "2-2"){
          this.$router.push({name:"add-goods"})
        }
      }
    }
  }
</script>
