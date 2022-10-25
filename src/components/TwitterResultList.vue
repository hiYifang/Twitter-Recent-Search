<template>
  <div class="col-sm-9">
    <ul class="m-0 p-0">
      <TweetCard />
    </ul>
    <button type="button" class="btn btn-dark w-100">Load More</button>
  </div>
</template>

<script>
import TweetCard from '@/components/TweetCard.vue';

export default {
  components: {
    TweetCard,
  },
};
</script>
