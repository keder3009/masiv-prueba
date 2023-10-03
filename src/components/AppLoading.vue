<template>
  <div class="lds-ellipsis">
    <div v-for="data in [1, 2, 3, 4]" :key="data" style="background: #fff"></div>
  </div>
</template>
  
  <script>
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    return {};
  },
});
</script>
  
<style lang="scss">
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 12px;
}
.lds-ellipsis div {
  position: absolute;
  top: 0;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: #fff;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 6px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 6px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 26px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 45px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(19px, 0);
  }
}
</style>
  