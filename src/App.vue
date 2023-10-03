<template>
  <component :is="viewsComponents[currentView].component"></component>
</template>
<script>
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";
import AppHome from "@/views/AppHome.vue";
import AppComic from "@/views/AppComic.vue";
import { useComicStore } from "@/core/stores/comic.store";
import viewsComponents from "@/core/constants/home.schema";
export default defineComponent({
  name: "App",
  components: {
    AppHome,
    AppComic,
  },
  setup() {
    const { currentView } = storeToRefs(useComicStore());
    return {
      currentView,
      viewsComponents,
    };
  },
});
</script>