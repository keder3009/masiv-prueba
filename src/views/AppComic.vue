<template>
  <div class="container">
    <section class="container-comic_content">
      <strong>{{ comic?.title }} - {{ comic?.num }}</strong>
      <div>
        <img :src="comic?.img" alt="" />
      </div>
      <section class="container-comic_content_start">
        <app-rate-starts />
      </section>
      <app-action-buttons />
    </section>
  </div>
</template>
<script>
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";
import AppRateStarts from "@/components/AppRateStarts.vue";
import AppActionButtons from "@/components/AppActionButtons.vue";
import { useComicStore } from "@/core/stores/comic.store";
export default defineComponent({
  name: "AppComic",
  components: { AppActionButtons, AppRateStarts },
  setup() {
    const { comic } = storeToRefs(useComicStore());
    return {
      comic,
    };
  },
});
</script>
<style lang="scss">
.container {
  &-comic_content {
    &_start{
      margin-bottom: 2rem;
    }
    img {
      padding: 2rem;
    }
  }
}
</style>