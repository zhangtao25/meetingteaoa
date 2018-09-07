<template>
  <div class="list-of-goods">
    <el-table
      :data="goodsData"
      style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="商品 ID">
              <span>{{ props.row._id }}</span>
            </el-form-item>
            <el-form-item label="商品分类">
              <span>{{handleClassification(JSON.parse(props.row.classification))}}</span>
            </el-form-item>
            <el-form-item label="中文名称">
              <span>{{ props.row.zh_title }}</span>
            </el-form-item>
            <el-form-item label="英文名称">
              <span>{{ props.row.en_title }}</span>
            </el-form-item>
            <el-form-item label="中文描述">
              <span>{{ props.row.zh_desc }}</span>
            </el-form-item>
            <el-form-item label="英文描述">
              <span>{{ props.row.en_desc }}</span>
            </el-form-item>
            <el-form-item label="折扣活动">
              <span>{{handleSaleoff(JSON.parse(props.row.saleoff))}}</span>
            </el-form-item>
            <el-form-item label="商品图片">
              <!--<span>{{JSON.parse(props.row.saleoff).saleoff_type}}</span>-->
              <span>{{props.row.figure_img}}</span>
              <img width="300" :src="props.row.figure_img" alt="">
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="商品 ID"
        prop="_id">
      </el-table-column>
      <el-table-column
        label="中文标题"
        prop="zh_title">
      </el-table-column>
      <el-table-column
        label="中文描述"
        prop="zh_desc">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>

<script>
  import GoodsDbOperation from './../service/goods-db-operation'
  import AllTypesOfTea from './../service/all-types-of-tea'
  // import xxx from './../service/all-types-of-tea'
  export default {
    data() {
      return {
        goodsData:[],
      }
    },
    mounted(){
      this.init();

    },
    methods:{
      init(){
        GoodsDbOperation.GetGoods().then(res => {
          this.goodsData = res
        })
      },
      handleSaleoff(val){
        if (val.saleoff_type==1){
          return '立减'+ val.saleoff_value['1'] +'元'
        }else if (val.saleoff_type==2) {
          return '满减'+ val.saleoff_value['2'] +'元'
        }else {
          return '新品'
        }
      },
      handleClassification(val){
        let xxx = 'a'
        AllTypesOfTea.getSmallclass(val.largeclass).then(res=>{
          for(let i=0;i<res.length;i++){
            if (val.smallclass == res[i].value){
              console.log(val.smallclass,res[i].value)
              xxx = res[i]
              // return
            }
          }
        })

        setTimeout(()=>{
          return xxx
        },1000)


        // for(let i=0;i<AllTypesOfTea.getLargeclass().length;i++){
        //   if (val.largeclass == AllTypesOfTea.getLargeclass()[i].value){
        //     return AllTypesOfTea.getLargeclass()[i].label
        //   }
        // }
      }
    }
  }
</script>
