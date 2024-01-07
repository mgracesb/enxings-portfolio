<template>
  <div class="PerformanceView">
    <div class="PerformanceView__list">
      <div class="PerformanceView__images">
        <img v-for="image in bookImages" class="PerformanceView__image" :key="image" :src="image" />
      </div>
      <div class="PerformanceView__videos">

      </div>
      <!-- <VideoPlayer /> -->
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import DummyStore from '../store/DummyStore.json'
import VideoPlayer from '@/components/organisms/VideoPlayer.vue';

export default defineComponent({
  components: { VideoPlayer },
  setup() {
    const bookID = ref()
    const bookImages = ref([])
    const imageList = DummyStore

    onMounted(() => {
      const route = useRoute()
      bookID.value = route.params.id
      console.log('books',imageList.DummyPerformance)

      // eslint-disable-next-line no-prototype-builtins
      if (imageList.DummyPerformance.hasOwnProperty('images')) {
        
        const transformURLs = imageList.DummyPerformance['images'].map((el) => `/enxings-portfolio/photos/performance/performance-${el}.jpg`)
        bookImages.value = transformURLs
      }
    })

    return {
      bookImages
    }
  }
})
</script>

<style scoped lang="scss">
@import '@/styles/breakpoints';
@import '@/styles/colors';
$optionDefaultColours: #ed5565, #fc6e51, #ffce54, #2ecc71, #5d9cec, #ac92ec;

.PerformanceView {
  &__images {
    width: 100%;
    padding: 20% 10%;
    display: grid;
    grid-template-columns: 1fr;
    overflow: hidden;
  }
  &__image {
    width: 100%;
    object-fit: cover;
    padding-top: 1rem;
    &:first-of-type {
      padding-top: 0;
    }
  }
}
</style>
