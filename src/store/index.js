import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  strict: true,
  state: {
    searchRecentData: [],
  },
  mutations: {
    // state, status/payload
    GET_SEARCH_RECENT_DATA(state, payload) {
      if (payload) {
        state.searchRecentData = payload.data;
      }
    },
  },
  actions: {
    // 非同步行為
    // context, status/payload
    getSearchRecentData(context, payload) {
      axios.get('/api/tweets/search/recent', {
        params: { query: payload },
        headers: { Authorization: `Bearer ${process.env.VUE_APP_TOKEN}` },
      }).then((res) => {
        context.commit('GET_SEARCH_RECENT_DATA', res.data);
      }).catch((err) => {
        console.log(err);
      });
    },
  },
  modules: {
  },
});
