<template>
  <div class="p-a">
    <h1>a 页面不需要权限访问</h1>
    <el-button type="primary">主要按钮</el-button>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {}
  },
  created() {
    //this.$message('欢迎来到A页面')
    this.loadData()
  },
  mounted() {},
  methods: {
    async loadData() {
      console.log(23, this.$api.user)
      const res = await this.$api.user.test({ userName: "aa", password: "123" })
      console.log(24, res.data)
    }
  }
}
</script>
<style lang="scss" scoped>
.p-a {
  height: 1500px;
}
</style>
