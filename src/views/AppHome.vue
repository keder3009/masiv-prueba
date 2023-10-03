<template>
  <div class="container">
    <h1>Próximamente: Un emocionante cómic</h1>
    <p>
      Estamos emocionados de presentarte nuestro nuevo cómic. ¡No te lo pierdas!
    </p>
    <a @click="changeView" class="comic-link">Ver cómic</a>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { useComicStore } from "@/core/stores/comic.store";
export default defineComponent({
  name: "AppHome",
  setup() {
    const { changeView } = useComicStore();
    return { changeView };
  },
});
</script>
