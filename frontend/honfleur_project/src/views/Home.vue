<template>
  <div class="container_home">
    <ZoomImage/>
    <Accueil/>
    <Slider/>
    <Reserve/>
    <Contact/>
  </div>
</template>

<script>
// @ is an alias to /src
import Accueil from '@/components/Accueil.vue'
import Slider from '@/components/Slider.vue'
import Reserve from '@/components/Reserve.vue'
import ZoomImage from '@/components/ZoomImage.vue'
import Contact from '@/components/Contact.vue'

export default {
  name: 'Home',
  components: {
    Accueil, 
    Slider, 
    Reserve, 
    ZoomImage,
    Contact
  }
}
</script>

<style lang="scss">
.container_home{
  display: flex;
  position: relative;
  flex-wrap: wrap;
  height: 90vh;
  background: #f1f1f1 repeat;
}
@media screen and (max-width: 1350px){
  .container_home {
    flex-direction: column;
    flex-wrap: nowrap;
    height: 100%;
  }
}
</style>