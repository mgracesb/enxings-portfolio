<template>
  <div class="SpotsView">
    <div class="SpotsView__container">
      <div
        class="SpotsView__panel panel__one"
        @click="handleClickOption(1)"
        :class="{ active: activeOption === 1 }"
      >
        <h3 class="SpotsView__panel__text">G.O.A.T</h3>
      </div>

      <div
        class="SpotsView__panel panel__two"
        @click="handleClickOption(2)"
        :class="{ active: activeOption === 2 }"
      >
        <h3 class="SpotsView__panel__text">G.O.A.T</h3>
      </div>

      <div
        class="SpotsView__panel panel__three"
        @click="handleClickOption(3)"
        :class="{ active: activeOption === 3 }"
      >
        <h3 class="SpotsView__panel__text">G.O.A.T</h3>
      </div>

      <div
        class="SpotsView__panel panel__four"
        @click="handleClickOption(4)"
        :class="{ active: activeOption === 4 }"
      >
        <h3 class="SpotsView__panel__text">Bendito Bocado</h3>
      </div>

      <div
        class="SpotsView__panel panel__five"
        @click="handleClickOption(5)"
        :class="{ active: activeOption === 5 }"
      >
        <h3 class="SpotsView__panel__text">Escuela Antonio Eloy</h3>
      </div>

      <div
        class="SpotsView__panel panel__six"
        @click="handleClickOption(6)"
        :class="{ active: activeOption === 6 }"
      >
        <h3 class="SpotsView__panel__text">Mayas</h3>
      </div>

      <div
        class="SpotsView__panel panel__seven"
        @click="handleClickOption(7)"
        :class="{ active: activeOption === 7 }"
      >
        <h3 class="SpotsView__panel__text">Mayas</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import DummyStore from '../store/DummyStore.json'

const bookID = ref()
const bookImages = ref([])
const activeOption = ref(1)
const imageList = DummyStore

onMounted(() => {
  const route = useRoute()
  bookID.value = route.params.id

  // eslint-disable-next-line no-prototype-builtins
  if (imageList.DummyStore.hasOwnProperty(bookID.value)) {
    bookImages.value = imageList.DummyStore[bookID.value]
  }
})

const handleClickOption = (num) => {
  activeOption.value = num
}
</script>

<style scoped lang="scss">
@import '@/styles/breakpoints';
@import '@/styles/colors';

.SpotsView {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 100vh;
  transition: 0.25s;

  &__container {
    display: flex;
    width: 85vw;
  }

  &__panel {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 70vh;
    border-radius: 25px;
    color: $color__white;
    cursor: pointer;
    flex: 1;
    margin: 10px;
    position: relative;
    box-shadow: inset 0 0 0.5rem $color__dark;
    border: 1px solid $color__gray__transparency--light;
    transition: flex 0.7s ease-in;

    &__text {
      font-size: 2rem;
      position: absolute;
      bottom: 20px;
      left: 40px;
      margin: 0;
      opacity: 0;
    }

    &.active {
      flex: 10;

      h3 {
        opacity: 1;
        transition: opacity 0.3s ease-in 0.4s;
        text-shadow: 1px 1px 2px $color__dark;
      }
    }
  }

  .panel__one {
    background-image: url('@/assets/spots/spot-1.jpg');
  }
  .panel__two {
    background-image: url('@/assets/spots/spot-2.jpg');
    background-position-y: 35%;
  }
  .panel__three {
    background-image: url('@/assets/spots/spot-3.jpg');
  }
  .panel__four {
    background-image: url('@/assets/spots/spot-4.jpg');
  }
  .panel__five {
    background-image: url('@/assets/spots/spot-5.jpg');
  }
  .panel__six {
    background-image: url('@/assets/spots/spot-6.jpg');
    background-position: bottom;
  }
  .panel__seven{
    background-image: url('@/assets/spots/spot-7.jpg');
    background-position-y: 10%;
  }

  @media (max-width: 480px) {
    &__container {
      width: 90vw;
    }

    &__panel {
      height: 60vh;
      margin: 5px;

      &__text {
        font-size: 1.3rem;
        bottom: 15px;
        left: 20px;
      }
    }

    // &__panel:nth-of-type(4),
    // &__panel:nth-of-type(5) {
    //   display: none;
    // }
  }
}
</style>
