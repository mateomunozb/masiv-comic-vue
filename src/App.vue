<template>
  <div id="app">
    <Comic />
  </div>
</template>

<script>
import Comic from './components/Comic';

export default {
  name: 'App',

  components: {
    Comic,
  },
};
</script>

<style>
#app {
  background-image: url(.~@/assets/background.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-color: whitesmoke;
  min-height: 100vh;
  display: flex;
}

a {
  text-decoration: none;
}
</style>
