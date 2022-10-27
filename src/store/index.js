import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  strict: true,
  state: {
    isLoading: false,
    searchRecentData: [],
  },
  mutations: {
    // state, status/payload
    LOADING(state, payload) {
      state.isLoading = payload;
    },
    GET_SEARCH_RECENT_DATA(state, payload) {
      if (payload) {
        state.searchRecentData = payload;
      }
    },
  },
  actions: {
    // 非同步行為
    // context, status/payload
    updateLoading(context, payload) {
      context.commit('LOADING', payload);
    },
    getSearchRecentData(context, payload) {
      context.commit('LOADING', true);
      const promise = new Promise((resolve) => {
        // (1) 搜尋文章
        axios.get('/api/tweets/search/recent', {
          params: { query: payload },
          headers: { Authorization: `Bearer ${process.env.VUE_APP_TOKEN}` },
        }).then((resSearch) => {
          resolve(resSearch.data.data);
        }).catch((err) => {
          console.log(err);
        });
      });
      promise.then(async (resData) => {
        const allData = [];
        const promises = [];
        for (let index = 0; index < resData.length; index += 1) {
          promises.push(
            // (2) 單一文章
            axios.get(`/api/tweets/${resData[index].id}?tweet.fields=author_id,created_at,id,text`, {
              headers: { Authorization: `Bearer ${process.env.VUE_APP_TOKEN}` },
            }).then((resTweet) => {
              resData[index].author_id = resTweet.data.data.author_id;
              resData[index].created_at = resTweet.data.data.created_at;
              allData.push(resData[index]);
            }).catch((error) => {
              console.log(error);
            }),
          );
        }
        await Promise.all(promises).then(() => console.log(allData));
        return allData;
      }).then(async (allData) => {
        const promises = [];
        for (let index = 0; index < allData.length; index += 1) {
          promises.push(
            // (3) 作者身份
            axios.get(`/api/users/${allData[index].author_id}?user.fields=profile_image_url`, {
              headers: { Authorization: `Bearer ${process.env.VUE_APP_TOKEN}` },
            }).then((resAuthor) => {
              allData[index].username = resAuthor.data.data.username;
              allData[index].profile_image_url = resAuthor.data.data.profile_image_url;
              context.commit('LOADING', false);
            }).catch((error) => {
              console.log(error);
            }),
          );
        }
        await Promise.all(promises).then(() => context.commit('GET_SEARCH_RECENT_DATA', allData));
      });
    },
  },
  modules: {
  },
});
