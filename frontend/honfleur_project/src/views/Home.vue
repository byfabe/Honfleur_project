<template>
  <div class="container_home">
    <Accueil/>
    <Slider/>
  </div>
</template>

<script>
// @ is an alias to /src
import Accueil from '@/components/Accueil.vue'
import Slider from '@/components/Slider.vue'

export default {
  name: 'Home',
  components: {
    Accueil, Slider
  }
}
</script>

<style lang="scss">
.container_home{
  display: flex;
  position: relative;
  height: 100vh;
}
</style>