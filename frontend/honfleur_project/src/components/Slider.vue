<template>
  <div class="main-container">
    <div class="slideshow-container" @mousedown="sliderMouseDown" @mousemove="sliderMouseMove" @mouseup="sliderMouseUp" @mouseleave="sliderMouseLeave">
      <div class="slideshow">
        <div class="slide s1">
          <div class="overlay"></div>
          <a href="#"><i class="fas fa-search-plus"></i></a>
        </div>
        <div class="slide s2">
          <div class="overlay"></div>
          <a href="#"><i class="fas fa-search-plus"></i></a>
        </div>
        <div class="slide s3">
          <div class="overlay"></div>
          <a href="#"><i class="fas fa-search-plus"></i></a>
        </div>
        <div class="slide s4">
          <div class="overlay"></div>
          <a href="#"><i class="fas fa-search-plus"></i></a>
        </div>
        <div class="slide s5">
          <div class="overlay"></div>
          <a href="#"><i class="fas fa-search-plus"></i></a>
        </div>
        <div class="slide s6">
          <div class="overlay"></div>
          <a href="#"><i class="fas fa-search-plus"></i></a>
        </div>
        <div class="slide s7">
          <div class="overlay"></div>
          <a href="#"><i class="fas fa-search-plus"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
let slider
let holding = false;
let firstClickX;
let alreadyLeftScrolled;
let velocity;
let rafID;
export default {
  methods: {
    sliderMouseDown(e) {
      holding = true;
      firstClickX = e.pageX - slider.offsetLeft;
      alreadyLeftScrolled = slider.scrollLeft;
      this.stopTransition();
    },
    sliderMouseMove(e) {
        if(!holding) return;
        const x = e.pageX - slider.offsetLeft;
        const scrolled = (x - firstClickX) * 2;
        const prevScrollLeft = slider.scrollLeft;
        slider.scrollLeft = alreadyLeftScrolled - scrolled;
        velocity = slider.scrollLeft - prevScrollLeft;
    },
    sliderMouseUp() {
        holding = false;
        this.startTransition();
    },
    sliderMouseLeave() {
        holding = false;
    },
    startTransition () {
      this.stopTransition();
      rafID = requestAnimationFrame(this.decreasingTransition);
    },
    stopTransition() {
      cancelAnimationFrame(rafID)
    },
    decreasingTransition() {
      slider.scrollLeft += velocity;
      velocity *= 0.98;
      if(Math.abs(velocity) > 0.5) {
        rafID = requestAnimationFrame(this.decreasingTransition)
      }
    }
  },
  mounted: function() {
    slider = document.querySelector(".slideshow-container");
  }
};
/* eslint-enable no-unused-vars */
</script>

<style scoped lang="scss">
.main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 50%;
  height: 100%;
}
.slideshow-container {
  border-radius: 100px;
  overflow: hidden;
  min-height: 60vmin;
  cursor: grab;
  position: relative;
  margin-top: 7vh;
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
  border-radius: 100px;
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
  border-radius: 100px;
}
.slide a {
  position: absolute;
  bottom: clamp(10px, 2vw, 20px);
  right: clamp(10px, 2vw, 20px);
  font-size: clamp(16px, 3vw, 20px);
  font-weight: 300;
  text-decoration: none;
  pointer-events: auto;
  align-self: center;
  right: 45%;
  color: white;
}
.s1 {
  background-image: url("../assets/1.jpg");
}
.s2 {
  background-image: url("../assets/2.jpg");
}
.s3 {
  background-image: url("../assets/3.jpg");
}
.s4 {
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
</style>