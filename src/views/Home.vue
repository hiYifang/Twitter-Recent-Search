<template>
  <Loading :active="isLoading" />
  <div class="p-3">
    <div class="container-fluid">
      <div class="row">
        <TwitterSearchBox />
        <TwitterResultList />
      </div>
    </div>
  </div>
</template>

<script>
import TwitterSearchBox from '@/components/TwitterSearchBox.vue';
import TwitterResultList from '@/components/TwitterResultList.vue';

export default {
  components: {
    TwitterSearchBox,
    TwitterResultList,
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
  },
};
</script>
