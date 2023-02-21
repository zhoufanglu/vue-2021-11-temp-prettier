<template>
  <div class="p-chose-com">
    <div>
      <el-form ref="form" :model="form" label-width="70px" inline>
        <el-form-item label="课程">
          <el-select v-model="form.userType" placeholder="">
            <el-option label="学生" value="1"></el-option>
            <el-option label="教师" value="2"></el-option>
            <el-option label="管理员" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="教师名">
          <el-input v-model="form.teacherName"></el-input>
        </el-form-item>
        <el-form-item label="课程名">
          <el-input v-model="form.courseName"></el-input>
        </el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      form: {
        courseId: 1,
        teacherName: '',
        courseName: '',
      },
    }
  },
  created() {},
  mounted() {},
  methods: {
    onSubmit() {},
  },
}
</script>
<style lang="scss">
.p-chose-com {
  .el-form {
    text-align: left;
  }
}
</style>
