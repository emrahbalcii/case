<template>
  <div id="app">
    <router-link id="logo" to="/">Scrum Poker</router-link>
    <main>
      <router-view :key="$route.fullPath" />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  color: #2c3e50;
  margin-top: 40px;
}
#logo {
  float: left;
  font-size: 24px;
  padding: 20px;
  border: 1px solid #e0e0e0;
  text-decoration: none;
  color: #000;
}
main {
  float: left;
  display: block;
  margin-top: 30px;
  width: 100%;
}

* {
  box-sizing: border-box;
}
</style>
