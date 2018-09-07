<style>
  .add-goods .saleoff>li{width: 300px;display: flex;justify-content: space-between;margin-bottom: 14px}
  .add-goods .saleoff>li .el-input-number{width: 140px}
</style>
<template>
  <div class="add-goods">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" style="width: 800px">
      <el-form-item label="选择分类：" prop="classification">
        <el-select
          v-model="ruleForm.classification.largeclass" placeholder="请选择"
          @change="handleChange(ruleForm.classification.largeclass)">
          <el-option
            v-for="item in largeclassOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="ruleForm.classification.smallclass" placeholder="请选择">
          <el-option
            v-for="item in smallclassOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="中文标题：" prop="zh_title">
        <el-input v-model="ruleForm.zh_title"></el-input>
      </el-form-item>
      <el-form-item label="中文描述：" prop="zh_desc">
        <el-input v-model="ruleForm.zh_desc"></el-input>
      </el-form-item>
      <el-form-item label="英文标题：" prop="en_title">
        <el-input v-model="ruleForm.en_title"></el-input>
      </el-form-item>
      <el-form-item label="英文描述：" prop="en_desc">
        <el-input v-model="ruleForm.en_desc"></el-input>
      </el-form-item>
      <el-form-item label="折扣活动：" prop="saleoff">
        <ul class="saleoff">
          <li style="">
            <el-radio v-model="ruleForm.saleoff.saleoff_type" label="1" border>立减{{ruleForm.saleoff.saleoff_value['1']}}元</el-radio>
            <el-input-number v-model="ruleForm.saleoff.saleoff_value['1']" :step="1"></el-input-number>
          </li>
          <li>
            <el-radio v-model="ruleForm.saleoff.saleoff_type" label="2" border>享{{ruleForm.saleoff.saleoff_value['2']}}折</el-radio>
            <el-input-number v-model="ruleForm.saleoff.saleoff_value['2']" :step="1"></el-input-number>
          </li>
          <li>
            <el-radio v-model="ruleForm.saleoff.saleoff_type" label="3" border>新品</el-radio>
          </li>
        </ul>
      </el-form-item>
      <el-form-item label="折后价格：" prop="price">
        <el-input-number v-model="ruleForm.price" :step="1"></el-input-number>
      </el-form-item>
      <el-form-item label="价格：" prop="no_discount_price">
        <!--<el-input v-model="ruleForm.no_discount_price"></el-input>-->
        <el-input-number v-model="ruleForm.no_discount_price" :step="1"></el-input-number>
      </el-form-item>
      <el-form-item label="选择图片：" prop="figure_img">
        <img :src="ruleForm.figure_img" alt="" width="200">
        <div style="margin-bottom: 14px">
          <span>路径：</span><el-input v-model="ruleForm.figure_img" style="width: 600px" disabled=""></el-input>
        </div>
        <select-image @change="selectImageChange"></select-image>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">确认添加</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import AllTypesOfTea from './../service/all-types-of-tea'
  import SelectImage from './../view/select-image'
  import GoodsDbOperation from './../service/goods-db-operation'
  export default {
    components:{
      'select-image': SelectImage
    },
    data() {
      return {
        largeclassOptions: [],
        smallclassOptions: [],
        ruleForm: {
          classification: {
            largeclass:'',
            smallclass:''
          },
          zh_title: '西湖龙井',
          zh_desc: '买茶叶送老婆',
          en_title: 'Longjin',
          en_desc: 'very haohe',
          saleoff: {
            saleoff_type:'2',
            saleoff_value:{
              '1': '50',
              '2': '9'
            }
          },
          price: '90',
          no_discount_price: '100',
          figure_img: 'http://localhost:8080/elfinder/files/image-test/masichun0.jpg'
        },
        rules: {
          classification: [{ required: true, message: '请输入活动名称', trigger: 'blur' }],
          zh_title: [{ required: true, message: '请输入活动名称', trigger: 'blur' }],
          zh_desc: [{ required: true, message: '请输入活动名称', trigger: 'blur' }],
          zh_saleoff: [{ required: true, message: '请输入活动名称', trigger: 'blur' }],
          en_title: [{ required: true, message: '请输入活动名称', trigger: 'blur' }],
          en_desc: [{ required: true, message: '请输入活动名称', trigger: 'blur' }],
          en_saleoff: [{ required: true, message: '请输入活动名称', trigger: 'blur' }],
          price: [{ required: true, message: '请输入活动名称', trigger: 'blur' }],
          no_discount_price: [{ required: true, message: '请输入活动名称', trigger: 'blur' }],
          figure_img: [{ required: true, message: '请输入活动名称', trigger: 'blur' }]
        }
      };
    },
    mounted(){
      this.initData()
    },
    methods: {
      initData(){
        this.largeclassOptions = AllTypesOfTea.getLargeclass()
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            GoodsDbOperation.AddGoods(this.ruleForm).then(res => {
              if (res == 'ok'){
                this.$message({
                  message: '商品已入库',
                  type: 'success'
                });
              }else {
                this.$message.error('服务器错误！');
              }
            })
          } else {
            this.$message.error('表单校验未通过！');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      handleChange(val){
        let _this = this
        AllTypesOfTea.getSmallclass(val)
          .then(res=>{
            _this.smallclassOptions = res
          })
      },
      selectImageChange(val){
        this.ruleForm.figure_img = val
      }
    }
  }
</script>
