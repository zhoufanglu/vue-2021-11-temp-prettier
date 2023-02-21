<template>
  <div class="p-login">
    <el-card class="box-card">
      <div slot="header">
        <h2>登录</h2>
      </div>
      <el-form ref="form" :model="form" label-width="70px">
        <el-form-item label="活动区域">
          <el-select v-model="form.userType" placeholder="选取角色">
            <el-option label="学生" value="1"></el-option>
            <el-option label="教师" value="2"></el-option>
            <el-option label="管理员" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-button type="primary" @click="onSubmit">登 录</el-button>
      </el-form>
    </el-card>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      form: {
        userType: '1',
      },
    }
  },
  created() {},
  mounted() {},
  methods: {
    onSubmit() {
      this.$router.push('/choose-course')
      console.log('submit!')
    },
  },
}
</script>
<style lang="scss">
.p-login {
  @include vertical-center;
  height: 100vh;
  margin-top: -150px;
  .el-card {
    width: 500px;
  }
}
</style>
