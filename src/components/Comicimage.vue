<template>
  <div class="image">
    <img :src="dataComic.img" alt="comicImage" />
    <Rate />
  </div>
</template>

<script>
import Rate from './Rate';
export default {
  name: 'ComicImage',
  props: ['dataComic'],
  components: {
    Rate,
  },
};
</script>

<style scoped>
.image {
  margin: 2em 1.2em 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image img {
  width: 100%;
  margin-bottom: 1.2em;
}
</style>
