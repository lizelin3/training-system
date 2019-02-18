<template >
  <div>
    <div class="card" v-for="item in items" :key="item.id">
      <div class="card-body">
        <h5 class="card-title">{{item.title}}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{item.brief}}</h6>
        <div class="row">
          <div class="col-md-4">指导教师 : {{item.realName}}</div>
          <div class="col-md-4">上课时间 : {{item.classTime}}</div>
          <div class="col-md-4">上课地点 : {{item.classroom}}</div>
          <div class="col-md-4">学分 : {{item.score}}</div>
          <div class="col-md-4">适用专业 : {{item.scienceName}}</div>
          <div class="col-md-4">班级 : {{item.originaName}}</div>
        </div>
        <router-link :to="{ name: 'attends', params: { id: item.id }}" class="card-link">查看考勤</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      items: [
        {
          id: "2",
          title: "面向对象程序设计综合实训",
          brief:
            "本实训是《面向对象程序设计》的理实一体化实践教学环节。通过本次实训，学生可以进一步巩固Java语言基本数据类型、基本控制结构、方法以及面向对象程序设计中类与对象、继承、多态性等基本概念；并且能够把所学的原理应用到具体的实践中去，能利用Java语言编写程序解决一些具体的问题，培养学生发现、分析和解决问题的能力等。培养学生自主查阅参考资料的习惯，提高综合运用所学知识的能力。",
          realName: "",
          classTime: "",
          classroom: "",
          score: "3",
          scienceName: "智能电网信息工程",
          originaName: "智电1811"
        },
        {
          id: "1",
          title: "程序设计项目实践（Java语言）实训",
          brief:
            "本标准依据我校《高等职业本科专业人才培养方案》软件工程专业职业目标定位方向，培养目标的要求而制定。学生通过本课程的学习，应能熟练运用Java语言进行软件开发。",
          realName: "赵银",
          classTime: "每周六 8:30~15:30",
          classroom: "明虹楼605",
          score: "2",
          scienceName: "智能电网信息工程",
          originaName: "智电1811"
        }
      ]
    };
  }
};
</script>