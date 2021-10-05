<template>
  <div
    class="zoom display-zoom"
    @click="zoomOut"
    @scroll.prevent
    @wheel.prevent
    @touchmove.prevent
  >
    <img src="../assets/ `{this.image}` .jpg" alt="" />
    <div class="chevron">
      <i class="fas fa-chevron-right"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        image: 1
    };
  },
  methods: {
    zoomOut() {
      let zoomAttribute = document.querySelector(".zoom");
      zoomAttribute.classList.add("display-zoom");
    },
    chevronNext() {},
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
  font-size: clamp(16px, 4vw, 400px);
  font-weight: 400;
  cursor: pointer;
  &:hover {
    color: white;
    transform: scale(1.1);
  }
}
</style>