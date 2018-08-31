<template>
  <div class="commodity-management">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick" style="background-color: #fff;padding: 14px">
      <el-tab-pane label="红茶" name="红茶">
        <largeclass-management :smallclasses="smallclasses['红茶']"></largeclass-management>
      </el-tab-pane>
      <el-tab-pane label="绿茶" name="绿茶">
        <largeclass-management :smallclasses="smallclasses['绿茶']"></largeclass-management>
      </el-tab-pane>
      <el-tab-pane label="白茶" name="白茶">
        <largeclass-management :smallclasses="smallclasses['白茶']"></largeclass-management>
      </el-tab-pane>
      <el-tab-pane label="黑茶" name="黑茶">
        <largeclass-management :smallclasses="smallclasses['黑茶']"></largeclass-management>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  import LargeclassManagement from "./../components/largeclass-management"
  import AllTypesOfTea from "./../service/all-types-of-tea"
  export default {
    components:{
      'largeclass-management': LargeclassManagement
    },
    data() {
      return {
        activeName: '红茶',
        smallclasses:{}
      };
    },
    mounted(){
      let _this = this
      AllTypesOfTea.getAllTypesOfTea(this)
        .then(res=>{
          _this.smallclasses = res
        })
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
