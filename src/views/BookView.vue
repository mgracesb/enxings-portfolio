<template>
  <div class="BookView">
    <div class="BookView__grid">
      <img
        v-for="(image, index) in bookImages"
        :key="index"
        :src="getImagePath(bookID, image)"
        class="BookView__grid__item"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import DummyStore from '@/store/DummyStore.json'

const bookID = ref()
const bookImages = ref([])
const imageList = DummyStore

onMounted(() => {
  const route = useRoute()
  bookID.value = route.params.id

  // eslint-disable-next-line no-prototype-builtins
  if (imageList.DummyStore.hasOwnProperty(bookID.value)) {
    bookImages.value = imageList.DummyStore[bookID.value]
  }
})

const getImagePath = (bookID, image) => {
  const path = new URL('@/assets/photos/', import.meta.url)
  return `${path}/${bookID}/${bookID}-${image}.jpg`
}
</script>

<style scoped lang="scss">
@import '@/styles/breakpoints';
@import '@/styles/colors';

.BookView {
  background-color: $color__clear;
  padding-top: 2rem;
  padding-bottom: 1rem;
  height: calc(100vh - 4rem);
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-flow: row;
    overflow-y: scroll;
    justify-items: center;
    align-items: center;
    gap: 0.5rem;

    &__item {
      width: 70%;
      height: auto;
      object-fit: cover;
    }
  }

  @media (min-width: $desktop) {
    &__grid {
      padding: 5%;
      grid-template-columns: repeat(2, 1fr);
      align-items: stretch;

      &__item {
        width: 100%;
      }
    }
  }

  @include ipad-portrait {
    padding-top: 4rem;
    padding-bottom: 2rem;
  }
}
</style>
