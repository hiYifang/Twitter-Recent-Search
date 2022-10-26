<template>
  <div class="col-sm-3 mb-3">
    <input
      class="form-control mb-3"
      type="text"
      placeholder="Search Keywords"
      v-model.trim="keywords"
      @keyup.enter="search"
    />
    <button type="button" class="btn btn-dark w-100" @click="searchKeyword">
      Search
    </button>
  </div>
</template>

<script>
export default {
  name: 'TwitterSearchBox',
  data() {
    return {
      keywords: '台灣',
    };
  },
  methods: {
    searchKeyword() {
      this.$store.dispatch('getSearchRecentData', this.keywords);
    },
  },
};
</script>
