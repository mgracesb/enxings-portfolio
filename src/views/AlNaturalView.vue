<template>
  <div class="AlNaturalView">
    <div class="AlNaturalView__composition">
      <img
        :src="firstImage"
        alt="photo 1"
        class="AlNaturalView__composition__photo AlNaturalView__composition__photo--p1"
      />
      <img
        :src="secondImage"
        alt="photo 2"
        class="AlNaturalView__composition__photo AlNaturalView__composition__photo--p2"
      />
      <img
        :src="thirdImage"
        alt="photo 3"
        class="AlNaturalView__composition__photo AlNaturalView__composition__photo--p3"
      />

      <span class="AlNaturalView__composition__information">Estatura: 1.54m</span>
      <span class="AlNaturalView__composition__information">Peso:</span>
      <span class="AlNaturalView__composition__information">HIHIHI</span>
    </div>
  </div>
</template>

<script setup>
import firstImage from '@/assets/photos/natural/natural-1.jpg'
import secondImage from '@/assets/photos/natural/natural-2.jpg'
import thirdImage from '@/assets/photos/natural/natural-3.jpg'
</script>

<style scoped lang="scss">
@import '@/styles/breakpoints.scss';

.AlNaturalView {
  height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  overflow: hidden;

  &__composition {
    width: 90%;
    height: 100%;
    margin: 10% auto;
    position: relative;

    @media (min-width: $desktop) {
      width: 65%;
      height: 100%;
      margin: 10% auto;
    }

    &__photo {
      float: left;
      position: absolute;
      height: 35%;
      width: auto;
      object-fit: contain;
      border-radius: 2px;
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);

      @media (min-width: $tablet) {
        height: 50%;
      }

      @media (min-width: $desktop) {
        height: 80%;
        width: auto;
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.4);
        z-index: 10;
        transition: all 0.2s;
        outline-offset: 1rem;
      }

      &--p1 {
        top: 40%;
        left: 25%;
        transform: scale(1.2);
        transition: transform ease 300ms;

        &:hover,
        :focus {
          transform: scale(1.4);
        }

        @media (min-width: $big-mobile) and (max-width: $tablet) {
          left: 35%;
          transform: scale(1.4);
        }

        @media (min-width: $tablet) {
          top: 25%;
          left: 40%;
        }

        @media (min-width: $desktop) {
          left: 5%;
          top: 10%;
          transform: scale(1.4) rotate(-5deg);

          &:hover,
          :focus {
            transform: scale(1.6) rotate(-8deg);
          }
        }
      }
      &--p2 {
        right: 10%;
        bottom: 0;
        transform: scale(1.2) rotate(5deg);
        transition: transform ease 300ms;

        &:hover,
        :focus {
          transform: scale(1.4) rotate(8deg);
        }

        @media (min-width: $big-mobile) and (max-width: $tablet) {
          right: 20%;
          transform: scale(1.4) rotate(5deg);
        }

        @media (min-width: $tablet) {
          bottom: 5%;
        }

        @media (min-width: $desktop) {
          right: 5%;
          top: 10%;
          transform: scale(1.4) rotate(5deg);

          &:hover,
          :focus {
            transform: scale(1.6) rotate(8deg);
          }
        }
      }
      &--p3 {
        left: 10%;
        right: 0;
        top: 15%;
        transform: scale(1.2) rotate(-2deg);
        transition: transform ease 300ms;

        &:hover,
        :focus {
          transform: scale(1.4) rotate(-4deg);
        }

        @media (min-width: $big-mobile) and (max-width: $tablet) {
          transform: scale(1.4) rotate(-2deg);
        }

        @media (min-width: $tablet) {
          top: 5%;
        }

        @media (min-width: $desktop) {
          left: 35%;
          top: 10%;
          transform: scale(1.4);
          &:hover,
          :focus {
            transform: scale(1.6) translate3d(-1rem, 0, 2rem);
          }
        }
      }
      &:hover,
      :focus {
        box-shadow: 0 2.5rem 4rem rgba(0, 0, 0, 0.5);
        z-index: 20;
      }
    }
    &:hover &__photo:not(:hover) {
      animation: gradient 1s ease;
      z-index: 19;
    }

    &__information {
      color: #eee;
      z-index: 30;
      font-size: 4rem;
    }
  }
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
