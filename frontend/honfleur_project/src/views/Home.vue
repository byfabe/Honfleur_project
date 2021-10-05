<template>
  <div class="container_home">
    <ZoomImage/>
    <Accueil/>
    <Slider/>
    <Reserve/>
  </div>
</template>

<script>
// @ is an alias to /src
import Accueil from '@/components/Accueil.vue'
import Slider from '@/components/Slider.vue'
import Reserve from '@/components/Reserve.vue'
import ZoomImage from '@/components/ZoomImage.vue'

export default {
  name: 'Home',
  components: {
    Accueil, 
    Slider, 
    Reserve, 
    ZoomImage
  }
}
</script>

<style lang="scss">
.container_home{
  display: flex;
  position: relative;
  flex-wrap: wrap;
  height: 90vh;
}
</style>