<template>
  <div class="sprintList">
    <h3>Active Sprint</h3>
    <table border="1" cellspacing="0" cellpadding="0">
      <tr>
        <th>Story</th>
        <th>Story Point</th>
        <th>Status</th>
      </tr>
      <tr v-for="story in list">
        <td>{{story.name}}</td>
        <td>{{story.sprintPoint || ''}}</td>
        <td>{{story.isActive ? story.sprintPoint !== null ? 'Done' : 'Active' : 'Not Voted'}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: this.$store.state.stories,
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sprintList {
  float: left;
  width: 33.3333%;
}
.sprintList h3 {
  font-size: 18px;
  margin-bottom: 15px;
}
.sprintList table {
  width: 100%;
}
.sprintList table tr:nth-child(2n) {
  background: #e0e0e0;
}
.sprintList table td {
  padding: 0 15px;
  width: 33.33333%;
  height: 40px;
}
</style>
