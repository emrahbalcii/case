<template>
  <div class="storyList">
    <div class="urlList">
      <router-link class="link" :to="{ name: 'SprintPlanning', params: { id: '', storyName: storyName }}">Go To Master Page</router-link>
    </div>
    <active-sprint-list :list="storyList" />
    <set-story-point :title="storyName" :voterKey="voterId" />
  </div>
</template>

<script>
import ActiveSprintList from '@/components/ActiveSprintList';
import SetStoryPoint from '@/components/SetStoryPoint';

export default {
  name: 'SprintPlanningForDev',
  components: {
    'active-sprint-list': ActiveSprintList,
    'set-story-point': SetStoryPoint,
  },
  data() {
    return {
      sessionName: this.$store.state.sessionName,
      storyList: this.$store.state.stories,
      storyName: this.$route.params.story,
      voterId: this.$route.params.id,
      nextVoterId: ++this.$route.params.id,
    }
  },
  methods: {
  },
};
</script>

<style scoped>
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
