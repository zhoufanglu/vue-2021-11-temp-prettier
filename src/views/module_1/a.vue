<template>
  <div class="p-a">
    <h1>a 页面不需要权限访问</h1>
    {{ message }}
    <el-button type="primary" @click="editTest">主要按钮</el-button>
    <div v-loading="loading">
      <div>内容{{ loading }}</div>
      <el-button @click="getData">接口请求测试</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      test: 1,
      message: '',
      loading: false,
      value1: '',
      value2: '',
    }
  },
  created() {
    //this.$message('欢迎来到A页面')
    this.loadData()
  },
  mounted() {
    this.message += 1
  },
  methods: {
    async loadData() {
      //console.log(23, this.$api.user)
      //const res = await this.$api.user.test({ userName: "aa", password: "123" })
      this.loading = true
      const { data: data1 } = await this.$api.eggTest.testA()
      console.log(36, data1)
      this.value1 = data1.data
      const { data: data2 } = await this.$api.eggTest.testB()
      console.log(37, data2)
      this.loading = false
      this.value2 = data2.data
      console.log('-----')
      console.log(this.value1)
      console.log(this.value2)

      //console.log(24, res.data)
    },
    getData() {
      this.loadData()
      //console.log('刷新数据')
    },
    editTest() {
      console.log('editFn')
      this.test = 2
    },
  },
  updated() {
    /*console.group("updated 更新完成状态(父）===============》")
    console.log("%c%s", "color:red", "el     : " + this.$el)
    console.log(this.$el)
    console.log("%c%s", "color:red", "data   : " + this.$data)
    console.log("%c%s", "color:red", "message: " + this.message)*/
    //this.message = this.message ++
  },
}
</script>
<style lang="scss" scoped>
.p-a {
  height: 1500px;
}
</style>
