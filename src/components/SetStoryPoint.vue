<template>
  <div class="setSprintPoint">
  <h3>Active Story</h3>
  <fieldset>
    <legend>{{ title }}</legend>
    <a class="item" v-bind:class="num === 1 ? 'active': ''" v-on:click="setPoint(1)">1</a>
    <a class="item" v-bind:class="num === 2 ? 'active': ''" v-on:click="setPoint(2)">2</a>
    <a class="item" v-bind:class="num === 3 ? 'active': ''" v-on:click="setPoint(3)">3</a>
    <a class="item" v-bind:class="num === 5 ? 'active': ''" v-on:click="setPoint(5)">5</a>
    <a class="item" v-bind:class="num === 8 ? 'active': ''" v-on:click="setPoint(8)">8</a>
    <a class="item" v-bind:class="num === 13 ? 'active': ''" v-on:click="setPoint(13)">13</a>
    <a class="item" v-bind:class="num === 21 ? 'active': ''" v-on:click="setPoint(21)">21</a>
    <a class="item" v-bind:class="num === 34 ? 'active': ''" v-on:click="setPoint(34)">34</a>
    <a class="item" v-bind:class="num === 55 ? 'active': ''" v-on:click="setPoint(55)">55</a>
    <a class="item" v-bind:class="num === 89 ? 'active': ''" v-on:click="setPoint(89)">89</a>
    <a class="item" v-bind:class="num === 134 ? 'active': ''" v-on:click="setPoint(134)">134</a>

    <div class="result" v-if="num">{{num}} Voted</div>
  </fieldset>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: null,
    }
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    voterKey: {
      type: [String, Number],
      required: true,
    },
  },
  methods: {
    setPoint: function (num) {
      this.$store.commit('setPoint', { type: 'setPoint', key: this.voterKey, title: this.title, point: num });
      this.num = num;
    }
  },
};
</script>

<style scoped>
.setSprintPoint {
  float: left;
  width: 33.3333%;
  padding: 0 15px;
}
.setSprintPoint h3 {
  font-size: 18px;
  margin-bottom: 15px;
}
.setSprintPoint .item {
  display: inline-block;
  border: 2px solid #000;
  font-size: 14px;
  width: 40px;
  text-align: center;
  padding: 7px;
  margin: 10px;
  cursor: pointer;
}
.setSprintPoint .item.active {
  border-color: green;
}
.result {
  text-align: center;
  font-weight: 700;
  display: block;
  margin: 50px 0;
}
</style>
