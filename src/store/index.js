import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sessionName: '',
    votersCount: 0,
    stories: {},
  },
  mutations: {
    editSessionName(state, newValue) {
      state.sessionName = newValue;
    },
    addStoryList(state, list) {
      list.map((item, index) => {
	  	  state.stories[item] = {name: item, sprintPoint: null, isActive: false, voters: {}};
        if(index === 0) {
          state.stories[item].isActive = true;
        }
        for(var i=1; i<=this.state.votersCount; i++) {
          state.stories[item].voters[i] = {point: 0};
        }
        state.stories[item].voters['master'] = {point: 0};
	    });
    },
    setVoterCount(state, count) {
      state.votersCount = count;
    },
    setPoint(state, val) {
      state.stories[val.title].voters[val.key] = {point: val.point};
    },
    resetStories(state) {
      state.stories = {};
    },
    setNetPoint(state, val) {
      let keys = Object.keys(state.stories);
      let nextIndex = keys.indexOf(val.title) +1;
      state.stories[val.title].sprintPoint = val.point;
      if (state.stories[keys[nextIndex]]) {
        state.stories[keys[nextIndex]].isActive = true;
      }
    }
  },
});
