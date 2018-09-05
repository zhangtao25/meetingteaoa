<template>
  <div class="add-goods">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="分类" prop="classification">
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
      <el-form-item label="中文标题" prop="zh_title">
        <el-input v-model="ruleForm.zh_title"></el-input>
      </el-form-item>

      <el-form-item label="中文描述" prop="zh_desc">
        <el-input v-model="ruleForm.zh_desc"></el-input>
      </el-form-item>

      <el-form-item label="中文打折" prop="zh_saleoff">
        <el-input v-model="ruleForm.zh_saleoff"></el-input>
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
  export default {
    data() {
      return {
        largeclassOptions: [],
        smallclassOptions: [],
        ruleForm: {
          classification: {
            largeClass:'',
            smallClass:''
          },
          zh_title: 'xxxxx',
          zh_desc: '描述',
          zh_saleoff: '促销'
        },
        rules: {
          classification: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
          ],
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
            alert('submit!');
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
      }
    }
  }
</script>
