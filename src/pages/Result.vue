<template>
  <div class="storyList">
    <h1>Done</h1>
    <active-sprint-list :list="storyList" />
  </div>
</template>

<script>
import ActiveSprintList from '@/components/ActiveSprintList';

export default {
  name: 'SprintPlanning',
  components: {
    'active-sprint-list': ActiveSprintList,
  },
  data() {
    return { 
      storyList: this.$store.state.stories,
    }
  },
};
</script>

<style scoped>
.masterSprintInfo {
  float: left;
  width: 33.3333%;
  padding: 55px 15px 0;
}
.link {
  float: right;
  margin: 0 30px;
  color: #000;
  text-decoration: none;
  padding: 4px;
  border: 1px solid #000;
  border-radius: 3px;
}
.urlList {
  position: absolute;
  right: 10px;
  top: 20px;
  width: 400px;
}
</style>
