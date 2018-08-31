<template>
  <div class="largeclass-management">
    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
    <div style="margin: 15px 0;"></div>
    <el-checkbox-group v-model="checkedSmallclasses" @change="handleCheckedSmallclassesChange">
      <el-checkbox v-for="city in smallclasses" :label="city" :key="city">{{city}}</el-checkbox>
    </el-checkbox-group>
    <smallclass-list>
    </smallclass-list>
  </div>
</template>
<script>
  import SmallclassList from "./../components/smallclass-list"
  export default {
    components:{
      'smallclass-list': SmallclassList
    },
    data(){
      return{
        checkAll: false,
        checkedSmallclasses: [],
        isIndeterminate: true
      }
    },
    props:["smallclasses"],
    mounted(){
      setTimeout(()=>{
        console.log(this.smallclasses)
      },1000)
    },
    methods:{
      handleCheckAllChange(val) {
        this.checkedSmallclasses = val ? this.smallclasses : [];
        this.isIndeterminate = false;
      },
      handleCheckedSmallclassesChange(value) {
      }
    }
  }
</script>
