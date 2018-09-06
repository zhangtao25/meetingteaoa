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
      <el-form-item label="中文打折：" prop="zh_saleoff">
        <el-input v-model="ruleForm.zh_saleoff"></el-input>
      </el-form-item>
      <el-form-item label="英文标题：" prop="en_title">
        <el-input v-model="ruleForm.en_title"></el-input>
      </el-form-item>
      <el-form-item label="英文描述：" prop="en_desc">
        <el-input v-model="ruleForm.en_desc"></el-input>
      </el-form-item>
      <el-form-item label="英文打折：" prop="en_saleoff">
        <el-input v-model="ruleForm.en_saleoff"></el-input>
      </el-form-item>
      <el-form-item label="折后价格：" prop="price">
        <el-input v-model="ruleForm.price"></el-input>
      </el-form-item>
      <el-form-item label="价格：" prop="no_discount_price">
        <el-input v-model="ruleForm.no_discount_price"></el-input>
      </el-form-item>
      <el-form-item label="选择图片：" prop="figure_img">
        <img :src="ruleForm.figure_img" alt="" width="200">
        <div style="margin-bottom: 14px">
          <span>路径：</span><el-input v-model="ruleForm.figure_img" style="width: 600px" disabled=""></el-input>
        </div>
        <select-image @change="selectImageChange"></select-image>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import AllTypesOfTea from './../service/all-types-of-tea'
  import SelectImage from './../view/select-image'
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
          zh_saleoff: '立减100元',
          en_title: 'Longjin',
          en_desc: 'very haohe',
          en_saleoff: 'lijian100yuan',
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
            // alert('submit!');
            console.log(this.ruleForm)
          } else {
            console.log('error submit!!');
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
