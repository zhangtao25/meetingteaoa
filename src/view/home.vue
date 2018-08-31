<template>
  <div id="home">
    <el-container>
      <el-aside width="236px" style="background:rgb(52, 60, 74)">
        <!-- <el-row class="tac">
          <el-col :span="12"> -->
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">
              <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                <span slot="title">用户管理</span>
              </el-menu-item>
              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">商品管理</span>
              </el-menu-item>
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
          <!-- </el-col>
        </el-row> -->
      </el-aside>
      <el-container>
        <el-header height="60px" style="background:#fff">
          
        </el-header>
        <el-main style="background:#e9eef2">
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