<template>
  <div
    class="zoom display-zoom"
    @scroll.prevent
    @wheel.prevent
    @touchmove.prevent
  >
    <div class="container-img" @click="zoomOut">
      <img :src="require('../assets/' + getImages[this.count])" alt="" />
      <i class="fas fa-times"></i>
    </div>
    <div class="chevron">
      <i class="fas fa-chevron-right" @click="chevronNext"></i>
      <i class="fas fa-chevron-left" @click="chevronPrevious"></i>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    zoomOut() {
      let zoomAttribute = document.querySelector(".zoom");
      zoomAttribute.classList.add("display-zoom");
      this.count = 0;
    },
    chevronNext() {
      let nbImg = this.getImages.length;

      if (this.count < nbImg - 1) {
        this.count++;
      } else {
        this.count = 0;
      }
    },
    chevronPrevious() {
      let nbImg = this.getImages.length;

      if (this.count > 0) {
        this.count--;
      } else {
        this.count = nbImg - 1;
      }
    },
  },
  computed: {
    ...mapGetters(["getImages"]),
  },
};
</script>


<style scoped lang="scss">
.zoom {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.938);
  z-index: 2;
}
.display-zoom {
  display: none;
}
.fa-chevron-right {
  position: absolute;
  right: 0;
  margin-right: 5vw;
  color: rgba(255, 255, 255, 0.692);
  font-size: clamp(16px, 4vw, 90px);
  font-weight: 400;
  cursor: pointer;
  z-index: 3;
  &:hover {
    color: white;
    transform: scale(1.1);
  }
}
.fa-chevron-left {
  position: absolute;
  left: 0;
  margin-left: 5vw;
  color: rgba(255, 255, 255, 0.692);
  font-size: clamp(16px, 4vw, 90px);
  font-weight: 400;
  cursor: pointer;
  z-index: 3;
  &:hover {
    color: white;
    transform: scale(1.1);
  }
}
.container-img {
  position: relative;
}
img {
  height: 100%;
  width: 120vmin;
  border-radius: 10px;
}
.fa-times {
  position: absolute;
  top: 0;
  right: 0;
  color: rgba(223, 223, 223, 0.966);
  padding: 2vh;
  font-size: clamp(16px, 2vw, 40px);
  font-weight: 400;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
}
</style>