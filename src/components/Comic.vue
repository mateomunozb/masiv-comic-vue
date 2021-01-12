<template>
  <div class="comiccover">
    <Header />
    <Title :dataComic="dataComic" />
    <ComicImage :dataComic="dataComic" />
    <Number :dataComic="dataComic" />
    <Description :dataComic="dataComic" />
    <div class="foot"></div>
  </div>
</template>

<script>
import Header from './Header';
import Title from './Title';
import ComicImage from './Comicimage';
import Number from './Number';
import Description from './Description';
import { mapState } from 'vuex';

export default {
  name: 'Comic',
  components: {
    Header,
    Title,
    ComicImage,
    Number,
    Description,
  },
  data: () => {
    dataComic;
  },
  computed: {
    ...mapState(['dataComic']),
  },
  mounted() {
    this.$store.dispatch('getDataComic');
  },
};
</script>

<style scoped>
.comiccover {
  width: 700px;
  background-image: url(~@/assets/background_comic.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin: auto;
  font-family: 'Nerko One', cursive;
}
.foot {
  height: 2em;
}
</style>
