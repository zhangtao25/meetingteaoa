<template>
  <div class="smallclass-list">
    <ul>
      <li style="border: 1px solid #f4f4f4;width: 234px;height: 300px;display: flex;flex-direction: column;justify-content: space-between;align-items: center;padding: 10px">
        <img style="width: 150px" src="http://101.132.46.146:3030/images/merchandiseDisplayPictures/GreenTea/maAnShan/testSupplier/0000.jpg" alt="">
        <div style="width: 200px">
          <p><span>名称：</span>name</p>
          <p><span>小分类：</span>嘻嘻嘻</p>
          <p><span>价格：</span>100</p>
        </div>
        <div>
          <el-button type="primary" size="small" icon="el-icon-edit" style="margin-right: 40px">编辑</el-button>
          <el-button type="danger" size="small" icon="el-icon-delete">删除</el-button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  import CommodityManagementService from "./../service/commodity-management"
  export default {
    mounted(){
      CommodityManagementService.getAllLargeclass()
    }
  }
</script>
