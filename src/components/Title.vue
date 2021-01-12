<template>
  <div class="title">
    <h1>{{ dataComic.title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: ['dataComic'],
};
</script>

<style scoped>
.title {
  font-family: 'Gravitas One', cursive;
  text-align: center;
  color: white;
  text-shadow: 3px 0 0 #000, -3px 0 0 #000, 0 3px 0 #000, 0 -3px 0 #000, 2px 2px #000,
    -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000;
  font-size: 1.5em;
  padding: 0.5em;
  margin-top: 1em;
}

.title:hover {
  transform: scale(1.2);
}
</style>
