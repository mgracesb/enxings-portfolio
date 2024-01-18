<template>
  <div class="AlNaturalView">
    <div class="AlNaturalView__container">
      <div class="AlNaturalView__composition">
        <img
          :src="secondImage"
          alt="photo 2"
          class="AlNaturalView__composition__photo AlNaturalView__composition__photo--p2"
        />
        <img
          :src="firstImage"
          alt="photo 1"
          class="AlNaturalView__composition__photo AlNaturalView__composition__photo--p1"
        />

        <img
          :src="thirdImage"
          alt="photo 3"
          class="AlNaturalView__composition__photo AlNaturalView__composition__photo--p3"
        />

        <img
          :src="fourthImage"
          alt="photo 4"
          class="AlNaturalView__composition__photo AlNaturalView__composition__photo--p4"
        />

        <img
          :src="fifthImage"
          alt="photo 5"
          class="AlNaturalView__composition__photo AlNaturalView__composition__photo--p5"
        />
      </div>
    </div>
    <div class="AlNaturalView__information">
      <div>
        <p class="AlNaturalView__information__item">
          <span class="AlNaturalView__icon--height icon"></span>1.54m
        </p>
        <p class="AlNaturalView__information__item">
          <span class="AlNaturalView__icon--weight icon"></span>45kg
        </p>
      </div>

      <div class="AlNaturalView__information__item">
        <span class="AlNaturalView__icon--sizing icon--big"></span>
        <div>
          <p class="AlNaturalView__information__item">Pecho: 78cm</p>
          <p class="AlNaturalView__information__item">Cintura: 62.5cm</p>
          <p class="AlNaturalView__information__item">Caderas: 81cm</p>
        </div>
      </div>

      <div>
        <p class="AlNaturalView__information__item">
          <span class="AlNaturalView__icon--tops icon"></span>XS
        </p>
        <p class="AlNaturalView__information__item">
          <span class="AlNaturalView__icon--bottoms icon"></span>34
        </p>
        <p class="AlNaturalView__information__item">
          <span class="AlNaturalView__icon--shoes icon"></span>36
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import firstImage from '@/assets/photos/natural/natural-1.jpg'
import secondImage from '@/assets/photos/natural/natural-2.jpg'
import thirdImage from '@/assets/photos/natural/natural-3.jpg'
import fourthImage from '@/assets/photos/natural/natural-4.jpg'
import fifthImage from '@/assets/photos/natural/natural-5.jpg'
</script>

<style scoped lang="scss">
@import '@/styles/breakpoints.scss';
@import '@/styles/colors.scss';

.AlNaturalView {
  position: relative;
  height: calc(100vh - 4rem);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__container {
    height: 100%;
    width: 100%;
    bottom: 0;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  &__icon {
    &--height {
      background-image: url('../assets/icons/height.png');
    }

    &--weight {
      background-image: url('../assets/icons/weight.png');
    }

    &--sizing {
      background-image: url('../assets/icons/sizing.png');
    }

    &--tops {
      background-image: url('../assets/icons/tops.png');
    }

    &--bottoms {
      background-image: url('../assets/icons/bottoms.png');
    }

    &--shoes {
      background-image: url('../assets/icons/shoes.png');
    }
  }

  &__information {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;

    @media (min-width: $tablet) {
      max-width: 800px;
      margin: auto;
      right: 0;
      bottom: 5%;
    }

    &__item {
      margin-bottom: 0.3rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 0.75rem;
      color: $color__clear;
    }
  }

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
      box-shadow: 0 0.5rem 1rem $color__black__transparency--light;

      @media (min-width: $tablet) {
        height: 50%;
      }

      @media (min-width: $desktop) {
        height: 60%;
        width: auto;
        box-shadow: 0 0.5rem 1rem $color__black__transparency--medium;
        z-index: 10;
        transition: all 0.3s;
        outline-offset: 1rem;
      }

      &--p1 {
        z-index: 3;
        left: 10%;
        right: 0;
        top: 10%;
        transform: scale(1.2) rotate(-2deg);
        transition: transform ease 300ms;

        &:hover,
        :focus {
          transform: scale(1.4);
        }

        @media (min-width: $big-mobile) and (max-width: $tablet) {
          transform: scale(1.4) rotate(-2deg);
        }

        @media (min-width: $tablet) {
          top: 5%;
        }

        @media (min-width: $desktop) {
          left: 47%;
          top: 10%;
          transform: scale(1.4);
          &:hover,
          :focus {
            transform: scale(1.6) translate3d(-1rem, 0, 2rem);
          }
        }

        @include ipad-portrait {
          left: -5%;
          top: 5%;
          transform: scale(1) rotate(-4deg);
          &:hover,
          :focus {
            transform: scale(1.2);
          }
        }
      }

      &--p3 {
        z-index: 2;
        top: 25%;
        left: 25%;
        transform: scale(1.2) ;
        transition: transform ease 300ms;

        &:hover,
        :focus {
          transform: scale(1.4);
        }

        @media (min-width: $big-mobile) and (max-width: $tablet) {
          transform: scale(1.4) rotate(4deg);
        }

        @media (min-width: $tablet) {
          top: 25%;
          left: 40%;
        }

        @media (min-width: $desktop) {
          left: 20%;
          top: 10%;
          transform: scale(1.4);

          &:hover,
          :focus {
            transform: scale(1.6);
          }
        }

        @include ipad-portrait {
          top: 25%;
          left: 25%;
          transform: scale(1) rotate(4deg);
          &:hover,
          :focus {
            transform: scale(1.2);
          }
        }
      }
      &--p2 {
        z-index: 2;
        right: 10%;
        top: 40%;
        transform: scale(1.2) rotate(5deg);
        transition: transform ease 300ms;

        &:hover,
        :focus {
          transform: scale(1.4);
        }

        @media (min-width: $big-mobile) and (max-width: $tablet) {
          right: 20%;
          transform: scale(1.4) rotate(5deg);
        }

        @media (min-width: $tablet) {
          bottom: 5%;
        }

        @media (min-width: $desktop) {
          right: 15%;
          top: 10%;
          transform: scale(1.4) rotate(5deg);

          &:hover,
          :focus {
            transform: scale(1.6);
          }
        }

        @include ipad-portrait {
          top: 15%;
          bottom: 0;
          right: -5%;
          transform: scale(1) rotate(5deg);
          &:hover,
          :focus {
            transform: scale(1.2);
          }
        }
      }

      &--p4 {
        z-index: 1;
        left: 10%;
        right: 0;
        top: 40%;
        transform: scale(1.2) rotate(-4deg);
        transition: transform ease 300ms;

        &:hover,
        :focus {
          transform: scale(1.4) rotate(-4deg);
        }

        @media (min-width: $big-mobile) and (max-width: $tablet) {
          bottom: 10%;
          top: initial;
          left: -10%;
          transform: scale(1.4) rotate(-2deg);
        }

        @media (min-width: $tablet) {
          bottom: 15%;
          top: initial;
          bottom: 10%;
          top: initial;
          left: -10%;
        }

        @media (min-width: $desktop) {
          left: 0;
          top: 10%;
          transform: scale(1.4) rotate(-4deg);
          &:hover,
          :focus {
            transform: scale(1.6) translate3d(-1rem, 0, 2rem);
          }
        }

        @include ipad-portrait {
          bottom: 10%;
          top: initial;
          left: -10%;
          transform: scale(1) rotate(-2deg);
          &:hover,
          :focus {
            transform: scale(1.2);
          }
        }
      }

      &--p5 {
        z-index: 0;
        right: 10%;
        top: 10%;
        transform: scale(1.2) rotate(5deg);
        transition: transform ease 300ms;

        &:hover,
        :focus {
          transform: scale(1.3);
        }

        @media (min-width: $big-mobile) and (max-width: $tablet) {
          top: 0;
          right: -10%;
          transform: scale(1.4) rotate(5deg);
        }

        @media (min-width: $tablet) {
          bottom: 5%;
          top: 0;
          right: -10%;
        }

        @media (min-width: $desktop) {
          right: 0;
          top: 10%;
          transform: scale(1.4) rotate(5deg);

          &:hover,
          :focus {
            transform: scale(1.6);
          }
        }

        @include ipad-portrait {
          top: 0;
          right: -10%;
          transform: scale(1);
          &:hover,
          :focus {
            transform: scale(1.2);
          }
        }
      }

      &:hover,
      :focus {
        box-shadow: 0 2.5rem 4rem $color__black__transparency--medium;
        z-index: 20;
      }

      &:hover &__photo:not(:hover) {
        animation: gradient 1s ease;
        z-index: 19;
      }
    }
  }
}

span.icon {
  display: inline-block;
  width: 1.2rem;
  height: 1.2rem;
  margin-right: 0.3rem;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  &--big {
    display: inline-block;
    margin-right: 0.3rem;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    min-width: 2.5rem;
    min-height: 3.5rem;
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
