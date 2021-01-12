<template>
  <div class="number">
    <div class="date">
      <h1>Num. {{ dataComic.num }}</h1>
      <h2>Day: {{ dataComic.day }} Month: {{ dataComic.month }} Year: {{ dataComic.year }}</h2>
    </div>
    <a href="http://www.freepik.com" target="_blank" rel="noreferrer">
      <img src="@/assets/barcode.jpg" alt="Barcode" />
    </a>
  </div>
</template>

<script>
export default {
  name: 'Number',
  props: ['dataComic'],
};
</script>

<style scoped>
.number {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5em;
}

.number a {
  background-color: white;
  border: 4px solid black;
  margin: 1em;
}

.number a img {
  padding: 0.5em;
  height: 10em;
  width: 7em;
}

.number a:hover {
  transform: scale(1.2);
}

.date {
  display: flex;
  flex-direction: column;
  margin: 1.5em;
}

.date h1 {
  background-color: black;
  color: white;
  padding: 0.2em;
  margin-bottom: 0.2em;
  width: fit-content;
}

.date h1:hover {
  transform: scale(1.2);
}

.date h2 {
  background-color: black;
  color: white;
  padding: 0.3em;
}

.date h2:hover {
  transform: scale(1.2);
}
</style>
