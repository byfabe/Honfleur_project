<template>
  <div class="main-container">
    <div class="slideshow-container" @mousedown="sliderMouseDown">
      <div class="slideshow">
        <div class="slide s1">
          <div class="overlay"></div>
          <h2>Home</h2>
          <a href="#">loupe</a>
        </div>
        <div class="slide s2">
          <div class="overlay"></div>
          <h2>Home</h2>
          <a href="#">loupe</a>
        </div>
        <div class="slide s3">
          <div class="overlay"></div>
          <h2>Home</h2>
          <a href="#">loupe</a>
        </div>
        <div class="slide s4">
          <div class="overlay"></div>
          <h2>Home</h2>
          <a href="#">loupe</a>
        </div>
        <div class="slide s5">
          <div class="overlay"></div>
          <h2>Home</h2>
          <a href="#">loupe</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    sliderMouseDown(e) {
        /* eslint-disable no-unused-vars */
      const slider = document.querySelector('.slideshow-container')
      let holding = false;
      let firstClickX;
      let alreadyLeftScrolled;

      holding = true;
      firstClickX = e.pageX - slider.offsetLeft;
      alreadyLeftScrolled = slider.scrollLeft;
      /* eslint-enable no-unused-vars */
    },
  },
};
</script>

<style scoped lang="scss">
.main-container {
  position: relative;
  width: 100%;
  left: 50%;
  top: 10%;
  padding: 3vw 5vw 5vw;
}
.slideshow-container {
  margin-top: 4vw;
  overflow: hidden;
  min-height: 60vmin;
  cursor: grab;
  position: relative;
  &:active {
    cursor: grabbing;
  }
}
.slideshow {
  position: absolute;
  height: 100%;
  display: flex;
  pointer-events: none;
}
.slide {
  flex-shrink: 0;
  height: 100%;
  width: 80vmin;
  background-size: cover;
  background-position: center;
  border-radius: 2px;
  position: relative;
}
.slide:not(:nth-child(1)) {
  margin-left: 10px;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.15);
}
.slide h2,
.slide a {
  color: white;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.39);
}
.slide h2 {
  position: absolute;
  top: clamp(10px, 2vw, 20px);
  left: clamp(10px, 2vw, 20px);
  font-size: clamp(20px, 3vw, 40px);
  font-weight: 300;
}
.slide a {
  position: absolute;
  bottom: clamp(10px, 2vw, 20px);
  right: clamp(10px, 2vw, 20px);
  font-size: clamp(16px, 3vw, 20px);
  font-weight: 300;
  text-decoration: none;
  pointer-events: auto;
}
.s1 {
  background-image: url("../assets/1.jpg");
}
.s2 {
  background-image: url("../assets/2.jpg");
}
.s3 {
  background-image: url("../assets/4.jpg");
}
.s5 {
  background-image: url("../assets/5.jpg");
}
.s6 {
  background-image: url("../assets/6.jpg");
}
.s7 {
  background-image: url("../assets/7.jpg");
}
.s8 {
  background-image: url("../assets/8.jpg");
}
</style>