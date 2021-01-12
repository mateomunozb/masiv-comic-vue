import Vue from 'vue';
import Vuex from 'vuex';
import fetch from 'node-fetch';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dataComic: {},
  },
  mutations: {
    SET_COMIC(state, dataComic) {
      state.dataComic = dataComic;
    },
  },
  actions: {
    getDataComic: async ({ commit }) => {
      try {
        const response = await fetch('https://xkcd.com/info.0.json');
        const currentComic = await response.json();
        const randomComicNumber = Math.round(Math.random() * (currentComic.num - 1) + 1);
        const data = await fetch(`https://xkcd.com/${randomComicNumber}/info.0.json`);
        const randomComic = await data.json();
        commit('SET_COMIC', randomComic);
      } catch (error) {
        console.log('TLC ~ file: index.js ~ line 26 ~ getDataComic: ~ error', error.response);
      }
    },
  },
  modules: {},
});
