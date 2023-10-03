<template>
  <div class="star-rating">
    <label
      class="star-rating__star"
      v-for="(rating, index) in ratings"
      :key="index"
      :class="{
        'is-selected': valueData >= rating && valueData != null,
        'is-disabled': disabled,
      }"
      @click="set(rating)"
      @mouseover="star_over(rating)"
      @mouseout="star_out"
    >
      <input
        class="star-rating star-rating__checkbox"
        type="radio"
        :value="rating"
        :name="name"
        v-model="valueData"
        :disabled="disabled"
      />★</label
    >
  </div>
</template>
<script>
import { storeToRefs } from "pinia";
import { defineComponent, ref, watch } from "vue";
import { useComicStore } from "@/core/stores/comic.store";
export default defineComponent({
  name: "AppRateStarts",
  props: {
    name: String,
    id: String,
    disabled: Boolean,
    required: Boolean,
  },
  setup(props) {
    const temp_value = ref(null);
    const { getStart } = storeToRefs(useComicStore());
    const { setRate } = useComicStore();
    const valueData = ref(null);
    const ratings = ref([1, 2, 3, 4, 5]);
    const star_over = (index) => {
      if (!props.disabled) {
        temp_value.value = getStart.value;
        return (valueData.value = index);
      }
    };
    const star_out = () => {
      if (!props.disabled) {
        return (valueData.value = temp_value.value);
      }
    };
    const set = (value) => {
      if (!props.disabled) {
        temp_value.value = value;
        setRate(value);
        return (valueData.value = value);
      }
    };
    watch(
      () => getStart.value,
      (value) => {
        valueData.value = value;
      }
    );
    return { ratings, star_over, star_out, set, valueData };
  },
});
</script>
<style lang="scss">
%visually-hidden {
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
}

.star-rating {
  &__star {
    display: inline-block;
    padding: 3px;
    vertical-align: middle;
    line-height: 1;
    font-size: 1.5em;
    color: #ababab;
    transition: color 0.2s ease-out;

    &:hover {
      cursor: pointer;
    }

    &.is-selected {
      color: #ffd700;
    }

    &.is-disabled:hover {
      cursor: default;
    }
  }

  &__checkbox {
    @extend %visually-hidden;
  }
}
</style>