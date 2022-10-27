<template>
  <li
    class="card mb-3 p-3"
    v-for="item in cardData"
    :key="item.id"
  >
    <div class="row g-0">
      <div class="col-5 col-sm-4">
        <a href="#" class="stretched-link" @click.prevent="open(item.id)">
          <img
            :src="item.profile_image_url"
            class="position-absolute bottom-50 start-15 rounded"
            :alt="item.username"
          />
        </a>
      </div>
      <div class="col-7 col-sm-8">
        <div class="card-body">
          <h2 class="card-title h5 m-0">{{ item.username }}</h2>
          <p class="card-text text-gray my-3">
            {{ item.text }}
          </p>
          <p class="card-text m-0">
            <small class="d-block text-muted">
              {{ item.created_at.replace(/T/g,' ').replace(/\.[\d]{3}Z/,'') }}
            </small>
          </p>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'TweetCard',
  props: {
    searchRecentData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  watch: {
    searchRecentData() {
      this.cardData = this.searchRecentData;
    },
  },
  data() {
    return {
      cardData: {},
    };
  },
  methods: {
    // 另開新視窗
    open(id) {
      window.open(`https://twitter.com/TwitterDev/status/${id}`, '_blank');
    },
  },
};
</script>
