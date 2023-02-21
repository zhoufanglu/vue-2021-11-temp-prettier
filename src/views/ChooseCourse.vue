<template>
  <div class="p-choose-course">
    <div class="nav">
      <div>学生选课</div>
      <div>xxx</div>
    </div>
    <div class="content">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="学生信息" name="1">
          <div class="student-info" v-show="activeName === '1'">
            <el-descriptions title="用户信息">
              <el-descriptions-item label="姓名">kooriookami</el-descriptions-item>
              <el-descriptions-item label="性别">女</el-descriptions-item>
              <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
              <el-descriptions-item label="备注">
                <el-tag size="small">学校</el-tag>
              </el-descriptions-item>
            </el-descriptions>
          </div>
        </el-tab-pane>
        <el-tab-pane label="选课" name="2">
          <chooseCourse></chooseCourse>
        </el-tab-pane>
        <el-tab-pane label="退课" name="3">退课</el-tab-pane>
        <el-tab-pane label="查看课程" name="4">查看课程</el-tab-pane>
      </el-tabs>
      <el-divider></el-divider>
    </div>
  </div>
</template>
<script>
import chooseCourse from '@/views/components/ChooseCourse.vue'
export default {
  name: '',
  components: { chooseCourse },
  data() {
    return {
      activeName: '2',
    }
  },
  created() {},
  mounted() {},
  methods: {
    handleClick(tab) {
      console.log(typeof this.activeName)
    },
  },
}
</script>
<style lang="scss" scoped>
.p-choose-course {
  .nav {
    @include boxShadow;
    height: 50px;
    @include vertical-center;
    justify-content: space-between;
    padding: 0 40px;
    > div:first-child {
      font-size: 20px;
      font-weight: bolder;
    }
  }
  .content {
    padding: 20px;
  }
}
</style>
