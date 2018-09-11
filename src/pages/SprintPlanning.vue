<template>
  <div class="storyList">
    <div class="urlList">
      <router-link class="link" :to="{ name: 'SprintPlanning', params: { id: '', storyName: storyName }}">Go To Master Page</router-link>
      <div v-for="(item, key) in storyList[storyName].voters">
        <router-link v-if="key!=='master'" class="link" :to="{ name: 'SprintPlanningForDev', params: { id: key, storyName: storyName }}">localhost:8080/#/sprint/{{storyName}}/{{key}} - Go To Voter {{key}}</router-link>
      </div>
    </div>
    <active-sprint-list :list="storyList" />
    <set-story-point :title="storyName" :voterKey="'master'" />
    <master-info :title="storyName" :list="storyList" />
  </div>
</template>

<script>
import ActiveSprintList from '@/components/ActiveSprintList';
import SetStoryPoint from '@/components/SetStoryPoint';
import MasterInfo from '@/components/MasterInfo';

export default {
  name: 'SprintPlanning',
  components: {
    'active-sprint-list': ActiveSprintList,
    'set-story-point': SetStoryPoint,
    'master-info': MasterInfo,
  },
  data() {
    return { 
      sessionName: this.$store.state.sessionName,
      storyList: this.$store.state.stories,
      storyName: this.$route.params.story,
      votersCount: this.$store.state.votersCount,
    }
  },
  methods: {
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
