<template>
  <div class="container_home">
    <Accueil/>
  </div>
</template>

<script>
// @ is an alias to /src
import Accueil from '@/components/Accueil.vue'

export default {
  name: 'Home',
  components: {
    Accueil
  }
}
</script>

<style lang="scss">
.container_home{
  position: relative;
  height: 100vh;
}
</style>