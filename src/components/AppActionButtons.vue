<template>
  <section class="content_actions">
    <app-button
      v-for="action in actions"
      :key="action.id"
      :title="action.name"
      :isLoading="action.loading"
      @click="handleClick(action)"
    />
  </section>
</template>
<script>
import { ref, onMounted } from "vue";
import { defineComponent } from "vue";
import AppButton from "./AppButton.vue";
import buttons from "@/core/constants/comic.schema";
import { useComicStore } from "@/core/stores/comic.store";
export default defineComponent({
  name: "AppActionButtons",
  components: { AppButton },
  setup() {
    const { getComicAction } = useComicStore();
    const actions = ref(buttons);
    const handleClick = async (action) => {
      action.loading = true;
      try {
        await getComicAction(action?.action);
      } catch (error) {
        console.log(error);
      } finally {
        action.loading = false;
      }
    };
    onMounted(async () => {
      await getComicAction("random");
    });
    return { actions, handleClick };
  },
});
</script>
<style lang="scss">
.content_actions {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}
</style>