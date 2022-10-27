<template>
  <div class="col-sm-3 mb-3">
    <input
      class="form-control mb-3"
      type="text"
      placeholder="Search Keywords"
      v-model.trim="query"
      @keyup.enter="searchKeyword"
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
      query: '台灣',
    };
  },
  methods: {
    searchKeyword() {
      if (!this.query) return;
      this.$store.dispatch('getSearchRecentData', this.query); // 操作 actions，後面可以帶參數
    },
  },
};
</script>
