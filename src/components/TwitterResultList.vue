<template>
  <div class="col-sm-9">
    <ul class="m-0 p-0">
      <TweetCard :search-recent-data="getSearchRecentData" />
    </ul>
    <button type="button" class="btn btn-dark w-100">Load More</button>
  </div>
</template>

<script>
import TweetCard from '@/components/TweetCard.vue';

export default {
  name: 'TwitterResultList',
  components: {
    TweetCard,
  },
  created() {
    this.$store.dispatch('getSearchRecentData', '台灣'); // 操作 actions，後面可以帶參數
  },
  computed: {
    getSearchRecentData() {
      return this.$store.state.searchRecentData;
    },
  },
};
</script>
