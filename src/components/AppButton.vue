<template>
  <div class="buttons">
    <button @click="$emit('click')">
      <app-loading v-if="isLoading" />
      <div v-else>
        <span>{{ title }}</span>
      </div>
    </button>
  </div>
</template>
<script>
import AppLoading from "./AppLoading.vue";
import { defineComponent } from "vue";
export default defineComponent({
  props: { title: { type: String }, isLoading: { type: Boolean } },
  components: { AppLoading },
  emits: ["click"],
});
</script>
<style lang="scss">
@import "../styles/variables.scss";
.buttons > button {
  height: 36px;
  min-width: 119px;
  border: none;
  font-size: 13px;
  border-radius: 0.5rem;
  cursor: pointer;
  color: white;
  background: $baseColor;
}
</style>