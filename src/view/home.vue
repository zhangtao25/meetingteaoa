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
        <div style="display: flex;justify-content: space-between;align-items: center;padding: 0 5px 0 20px">
          <span style="color: #fff;line-height: 50px">meetingtea.top</span>
          <div style="background-color: #4cc1b2;width: 5px;height: 25px"></div>
        </div>
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
              <!--<i class="iconfont icon-shujuguanli"></i>-->
              <span class="iconfont icon-shujuguanli">数据管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <!--<i class="iconfont icon-shangpinliebiao"></i>-->
                <span class="iconfont icon-shangpinliebiao">商品列表</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <!--<i class="iconfont icon-tianjiashuju"></i>-->
              <span class="iconfont icon-tianjiashuju">添加数据</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">
                <!--<i class="iconfont icon-tianjiayonghu"></i>-->
                <span class="iconfont icon-tianjiayonghu">添加用户</span>
              </el-menu-item>
              <el-menu-item index="2-2">
                <!--<i class="iconfont icon-tianjiashangpin"></i>-->
                <span class="iconfont icon-tianjiashangpin">添加商品</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="3">
            <!--<i class="iconfont icon-dingdan"></i>-->
            <span slot="title" class="iconfont icon-dingdan">订单管理</span>
          </el-menu-item>
          <el-menu-item index="4">
            <!--<i class="iconfont icon-wenjianguanli"></i>-->
            <span slot="title" class="iconfont icon-wenjianguanli">后台文件管理</span>
          </el-menu-item>
          <el-menu-item index="5">
            <!--<i class="iconfont icon-shezhi"></i>-->
            <span slot="title" class="iconfont icon-shezhi">修改资料</span>
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
