<template>
  <div class="VideoPlayer">
    <video ref="VideoPlayer">
      <source
        src="performance-1.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
    <div class="VideoPlayer__buttons">
      <button class="VideoPlayer__button" @click="play">
        <span class="button__play"></span>
      </button>
      <button class="VideoPlayer__button" @click="pause">
        <span class="button__pause"></span>
      </button>
      <button class="VideoPlayer__button" @click="stop">
        <span class="button__stop"></span>
      </button>
    </div>
  </div>
  
</template>

<script>
import { defineComponent } from 'vue'
import { ref } from 'vue'

export default defineComponent({
  name: "VideoPlayer",
  setup() {
    const VideoPlayer = ref(null);

    const play = () => {
      VideoPlayer.value.play();
    };
    const pause = () => {
      VideoPlayer.value.pause();
    };
    const stop = () => {
      VideoPlayer.value.pause();
      VideoPlayer.value.currentTime = 0;
    };
    const setSpeed = (speed) => {
      VideoPlayer.value.playbackRate = speed;
    };

    return {
      VideoPlayer,
      play,
      pause,
      stop,
      setSpeed
    }
  },
});
</script>

<style scoped lang="scss">
  .VideoPlayer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &__buttons {
      width: 50%;
      padding-top: 1rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
    }
    &__button {
      height: 50px;
      width: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background-color: white;
      border: 2px solid #bdbdbd;
      box-shadow: none;

      > span {
        display: inline-block;
        height: 15px;
        width: 15px;
        background-size: contain;
      }
      .button__play {
        background-image: url('../../assets/icons/play.png');
      }
      .button__pause {
        background-image: url('../../assets/icons/pause.png');
      }
      .button__stop {
        background-image: url('../../assets/icons/stop.png');
      }
    }
  }

</style>
