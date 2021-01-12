<template>
  <div class="cover">
    <a href="/">
      <h1>xkcd</h1>
    </a>
    <div>
      <p>A webcomic of romance, sarcasm, math, and language.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
.cover {
  background-color: black;
  display: flex;
  color: white;
  justify-content: space-around;
  padding: 0.5em;
  align-items: center;
  text-align: center;
}

.cover h1 {
  font-family: 'Gravitas One', cursive;
  color: #dc143c;
}

.cover h1:hover {
  transform: scale(1.2);
}

.cover p {
  font-size: 1.2em;
}
</style>
