<template>
  <div class="addStoryList">
      <div class="col-6">
        <label>Session Name: </label>
        <input type="text" v-model="sessionName" maxlength="200">
      </div>
      <div class="col-6">
        <label>Number of Voters</label>
        <input type="number" v-model="numberOfVoters" value="1" min="1">
      </div>
      <div class="col-12">
        <label>Paste your story list</label>
        <textarea v-model="storyList"></textarea>
      </div>
      <div class="col-12">
        <button v-on:click="saveStory">Start Session</button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'AddStoryList',
  data() {
    return {
      sessionName: '',
      numberOfVoters: '',
      storyList: '',
    }
  },
  methods: {
    saveStory() {
      if (!this.sessionName || !this.numberOfVoters || !this.storyList) {
        window.alert('Lütfen tüm alanları eksiksiz doldurun.');
      } else {
        this.$store.commit('resetStories');
        this.$store.commit('editSessionName', this.sessionName);
        this.$store.commit('setVoterCount', parseInt(this.numberOfVoters, 10));
        this.$store.commit('addStoryList', this.storyList.split('\n'));
        window.location.href = '#/sprint/' + this.storyList.split('\n')[0];
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.addStoryList {
  float: left;
  width: 100%;
  margin: 25px 0;
}
.addStoryList .col-6 {
  float: left;
  width: 50%;
  padding: 0 25px;
}
.addStoryList .col-12 {
  float: left;
  width: 100%;
  padding: 0 25px;
}
.addStoryList label {
  display: block;
  font-size: 14px;
  line-height: 40px;
}
.addStoryList input {
  display: block;
  font-size: 14px;
  width: 100%;
  height: 40px;
}
.addStoryList textarea {
  display: block;
  font-size: 14px;
  width: 100%;
  height: 120px;
}
.addStoryList button {
  display: block;
  font-size: 14px;
  width: 100%;
  height: 40px;
  margin-top: 30px;
}
</style>
