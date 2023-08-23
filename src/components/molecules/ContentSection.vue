<script setup>
import { defineProps } from 'vue'

const { contentImage } = defineProps({
  contentImage: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="ContentSection">
    <div class="ContentSection__polaroid">
      <img :src="contentImage" class="ContentSection__polaroid__image" />
      <div class="ContentSection__content">
        <p class="ContentSection__content__text">Nombre de sesión</p>
        <p class="ContentSection__content__date">xx.xx.xxxx</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/styles/breakpoints.scss';

.ContentSection {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: appear 1s ease 0s 1 normal forwards;

  &__polaroid {
    width: 70%;
    height: 70%;
    border: 5px solid #fff;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 80% 20%;
    box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.9);

    &__image {
      grid-row: 1;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px;
    }
  }

  &__content {
    grid-row: 2;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    color: #000;
    background-color: #fff;
    padding: 0 0.75rem;

    &__date {
      font-size: 0.75rem;
    }
  }

  @media (min-width: $desktop) {
    &__polaroid {
      width: 35%;
      height: 85%;
      overflow: hidden;
      background-color: #fff;

      &__image {
        transition: transform 0.3s ease;

        &:hover {
          transform: scale(0.9);
          object-fit: contain;
        }
      }
    }
  }
}

@keyframes appear {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
