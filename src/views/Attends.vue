<template>
    <div class="list-group" >
      <router-link v-for="item in items" :key="item.id" :to="{ name: 'attend' + item.id, params: { id: item.id }}" class="list-group-item list-group-item-action">
        {{item.title}}
      </router-link>
    </div>
</template>

<script>
export default {
  created:function(){
    let id = this.$route.params.id;
    if(id == 1){
      this.items = [
        {
          id: "20181222",
          title: "JAVA 实训 2018.12.22 考勤"
        },
        {
          id: "20181208",
          title: "JAVA 实训 2018.12.08 考勤"
        },
        {
          id: "20181201",
          title: "JAVA 实训 2018.12.01 考勤"
        },
        {
          id: "20181124",
          title: "JAVA 实训 2018.11.24 考勤"
        },
        {
          id: "20181110",
          title: "JAVA 实训 2018.11.10 考勤"
        },
        {
          id: "20181027",
          title: "JAVA 实训 2018.10.27 考勤"
        },
        {
          id: "20181013",
          title: "JAVA 实训 2018.10.13 考勤(无)"
        }
      ];
    } else {
      this.items = [];
    }
  },
  data: function() {
    return {
      items: []
    };
  }
};
</script>