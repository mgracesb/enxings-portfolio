<template>
  <div class="ScrollHelper" :class="{ revert: scrollUp }">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  props: { scrollUp: { type: Boolean, default: false } }
})
</script>

<style scoped lang="scss">
@import '@/styles/breakpoints';

.ScrollHelper {
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, -50%);

  span:nth-child(2) {
    animation-delay: -0.2s;
  }
  span:nth-child(3) {
    animation-delay: -0.4s;
  }
  span {
    display: block;
    width: 20px;
    height: 20px;
    border-bottom: 1px solid #fff;
    border-right: 1px solid #fff;
    transform: rotate(45deg);
    margin: -10px;
    animation: animate 2s infinite;
  }

  &.revert {
    transform: rotate(180deg);
    bottom: initial;
    top: 15%;
  }
}

@keyframes animate {
  0% {
    opacity: 0;
    transform: rotate(45deg) translate(-20px, -20px);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: rotate(45deg) translate(20px, 20px);
  }
}
</style>
