<template>
  <div class="main-container">
    <i
      class="fas fa-chevron-left display chevron-left"
      @click="scrollRightChevron"
    ></i>
    <i class="fas fa-chevron-right" @click="scrollLeftChevron"></i>
    <div
      class="slideshow-container"
      @mousedown="sliderMouseDown"
      @mousemove="sliderMouseMove"
      @mouseup="sliderMouseUp"
      @mouseleave="sliderMouseLeave"
    >
      <div class="slideshow">
        <div class="slide s1">
          <div class="overlay"></div>
          <i @click="zoomImage(0)" class="fas fa-search-plus"></i>
        </div>
        <div class="slide s2">
          <div class="overlay"></div>
          <i @click="zoomImage(1)" class="fas fa-search-plus"></i>
        </div>
        <div class="slide s3">
          <div class="overlay"></div>
          <i @click="zoomImage(2)" class="fas fa-search-plus"></i>
        </div>
        <div class="slide s4">
          <div class="overlay"></div>
          <i @click="zoomImage(3)" class="fas fa-search-plus"></i>
        </div>
        <div class="slide s5">
          <div class="overlay"></div>
          <i @click="zoomImage(4)" class="fas fa-search-plus"></i>
        </div>
        <div class="slide s6">
          <div class="overlay"></div>
          <i @click="zoomImage(5)" class="fas fa-search-plus"></i>
        </div>
        <div class="slide s7">
          <div class="overlay"></div>
          <i @click="zoomImage(6)" class="fas fa-search-plus"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let slider;
let holding = false;
let firstClickX;
let alreadyLeftScrolled;
let velocity;
let rafID;
let chevronLeft;
export default {
  methods: {
    sliderMouseDown(e) {
      holding = true;
      firstClickX = e.pageX - slider.offsetLeft;
      alreadyLeftScrolled = slider.scrollLeft;
      this.stopTransition();
    },
    sliderMouseMove(e) {
      if (!holding) return;
      const x = e.pageX - slider.offsetLeft;
      const scrolled = (x - firstClickX) * 2;
      const prevScrollLeft = slider.scrollLeft;
      slider.scrollLeft = alreadyLeftScrolled - scrolled;
      velocity = slider.scrollLeft - prevScrollLeft;
      if (slider.scrollLeft > 1) {
        chevronLeft.classList.remove("display");
      } else {
        chevronLeft.classList.add("display");
      }
    },
    sliderMouseUp() {
      holding = false;
      this.startTransition();
    },
    sliderMouseLeave() {
      holding = false;
    },
    startTransition() {
      this.stopTransition();
      rafID = requestAnimationFrame(this.decreasingTransition);
    },
    stopTransition() {
      cancelAnimationFrame(rafID);
    },
    decreasingTransition() {
      slider.scrollLeft += velocity;
      velocity *= 0.95;
      if (Math.abs(velocity) > 0.5) {
        rafID = requestAnimationFrame(this.decreasingTransition);
      }
    },
    zoomImage(data) {
      let zoomAttribute = document.querySelector(".zoom");
      zoomAttribute.classList.remove("display-zoom");
      this.$store.commit("ADD_COUNT", data);
    },
    scrollLeftChevron() {
      slider.scroll(slider.scrollLeft + 250, 0);
      if (slider.scrollLeft > 1) {
        chevronLeft.classList.remove("display");
      } else {
        chevronLeft.classList.add("display");
      }
    },
    scrollRightChevron() {
      slider.scroll(slider.scrollLeft - 250, 0);
      if (slider.scrollLeft === 0) {
        chevronLeft.classList.add("display");
      }
    },
  },
  mounted: function () {
    slider = document.querySelector(".slideshow-container");
    chevronLeft = document.querySelector(".chevron-left");
  },
};
/* eslint-enable no-unused-vars */
</script>

<style scoped lang="scss">
.main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background: #f1f1f1;
  width: 50%;
  height: 100%;
}
.fa-chevron-right {
  position: absolute;
  right: 0;
  top: 50%;
  font-size: clamp(10px, 3vw, 200px);
  font-weight: 400;
  color: rgba(255, 255, 255, 0.685);
  margin-right: 1vw;
  cursor: pointer;
  z-index: 1;
  &:hover {
    color: rgba(255, 255, 255, 0.89);
  }
}
.fa-chevron-left {
  position: absolute;
  left: 0;
  top: 50%;
  font-size: clamp(10px, 3vw, 200px);
  font-weight: 400;
  color: rgba(255, 255, 255, 0.685);
  margin-left: 1vw;
  cursor: pointer;
  z-index: 1;
  &:hover {
    color: rgba(255, 255, 255, 0.89);
  }
}
.display {
  display: none;
}
.slideshow-container {
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
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
.slide .fa-search-plus {
  position: absolute;
  bottom: clamp(10px, 2vw, 20px);
  right: clamp(10px, 2vw, 20px);
  font-size: clamp(16px, 3vw, 20px);
  font-weight: 300;
  text-decoration: none;
  pointer-events: auto;
  cursor: pointer;
  align-self: center;
  right: 45%;
  color: white;
}
.fa-search-plus:hover {
  transform: scale(1.3);
}
.chevron-container {
  width: 100%;
  height: 100%;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
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