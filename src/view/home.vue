<template>
  <div id="home">
    <el-container>
      <el-aside width="236px" style="background:rgb(52, 60, 74)">
        <div style="height:60px;width:234px">MeetingTea</div>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#48576a"
          text-color="#fff"
          active-text-color="red">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>数据管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">商品列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>添加数据</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">添加用户</el-menu-item>
              <el-menu-item index="2-2">添加商品</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">订单管理</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">留言管理</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-setting"></i>
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
      }
    }
  }
</script>