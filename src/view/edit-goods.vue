<template>
  <div class="edit-goods">
    <el-dialog
      title="修改商品信息"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        dialogVisible: false
      };
    },
    // props:[dialogVisible],
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  }
</script>
