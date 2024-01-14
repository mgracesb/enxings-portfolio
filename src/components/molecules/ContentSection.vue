<template>
  <div class="ContentSection" @click="openBook">
    <div class="ContentSection__polaroid">
      <img :src="contentImage" class="ContentSection__polaroid__image" />
      <div class="ContentSection__content">
        <p class="ContentSection__content__text">Album {{ title }}</p>
        <p class="ContentSection__content__text--small">++ ver más ++</p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    contentImage: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
})
</script>

<style scoped lang="scss">
@import '@/styles/breakpoints.scss';
@import '@/styles/colors.scss';

.ContentSection {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: appear 1s ease 0s 1 normal forwards;

  &__polaroid {
    cursor: pointer;
    width: 70%;
    height: 70%;
    border: 5px solid $color__white;
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
    background-color: $color__white;
    padding: 0 0.75rem;

    &__date {
      font-size: 0.75rem;
    }
    &__text {
      &--small {
        font-size: 0.75rem;
        color: rgb(47, 47, 255);
        font-style: italic;
      }
    }
  }

  @media (min-width: $desktop) {
    &__polaroid {
      width: 35%;
      height: 85%;
      overflow: hidden;
      background-color: $color__white;

      &__image {
        transition: transform 0.3s ease;

        &:hover {
          transform: scale(2) translateY(18%);
          object-fit: cover;
        }
      }
    }
  }

  @include ipad-portrait {
    &__polaroid {
      width: 60%;
      height: 70%;
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
