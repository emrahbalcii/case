<template>
  <div class="masterSprintInfo">
    <fieldset>
      <legend>Scrum Master</legend>
      {{title}} is active
      <table border="0" cellpadding="0" cellspacing="0">
        <tr v-for="(item, key) in list[title].voters">
          <td>Voter {{key}}</td>
          <td>:</td>
          <td>{{item.point}}</td>
        </tr>
      </table>
      <div class="netPoint" v-if="isCompleted">
        <p>Seems team has different votes.</p>
        <p>Please discuss and finaliaze the score below textbox</p>
        <b>Final Score:</b>
        <input type="number" v-model="netPoint">
        <a v-on:click="setNetPoint">End Voiting For {{ title }}</a>
      </div>
    </fieldset>
  </div>
</template>

<script>
export default {
  data() {
    return {
      completed: true,
      netPoint: 0,
      list: this.$store.state.stories,
    }
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  computed: {
    isCompleted: function() {
      const voters = this.list[this.title].voters;
      Object.keys(voters).map((i, item) => {
        if (voters[i].point === 0) {
          this.completed = false;
        }
      });
      return this.completed;
    },
  },
  methods: {
    setNetPoint: function() {
      if (this.netPoint !== null) {
        this.$store.commit('setNetPoint', { type: 'setNetPoint', title: this.title, point: this.netPoint });
        let keys = Object.keys(this.list);
        let nextIndex = keys.indexOf(this.title) +1;
        let nextItem = keys[nextIndex];
        if (nextItem) {
          this.$router.push('/sprint/' + nextItem);
        } else {
          this.$router.push('/result');
        }
        
      } else {
        window.alert('Lütfen sprint puanını giriniz.');
      }
    },
  },
};
</script>

<style scoped>
.netPoint {
  text-align: center;
  display: block;
  margin: 30px 0;
}
.netPoint a {
  display: block;
  margin: 10px;
  border: 1px solid #000;
  text-decoration: none;
  padding: 5px;
  cursor: pointer;
}
</style>
