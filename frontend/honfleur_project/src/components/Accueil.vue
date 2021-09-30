<template>
  <div class="container">
    <h1><span>Résidence </span><span>du </span><span>Phare</span></h1>
    <div class="line">
      <div class="l1"></div>
    </div>
    <h2>Honfleur</h2>
  </div>
</template>

<script>
import { gsap } from "gsap";
export default {
  methods: {
    animLoad() {
      const titreSpans = document.querySelectorAll("h1 span");
      const line = document.querySelector('.l1');
      const h2 = document.querySelector('h2');
      window.addEventListener("load", () => {
      const tl = gsap.timeline({ paused: true });
  
        tl
        .from(
          titreSpans,
          {
            top: -50,
            opacity: 0,
            ease: "power3.out",
            stagger: 0.3,
            duration: 1,
          },
        )
        .from(
          line,
          {
            width: 0,
            ease: "power1.out",
            duration: 0.4,
          }, 
        )
        .from(
          h2,
          {
            y: 20,
            opacity: 0,
            ease: "bounce",
            duration: 1,
          }, 
        )
        tl.play();
      });
    },
    
  },

  mounted: function () {
    this.animLoad();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 30%;
  left: 5%;
}
h1 {
  font-family: "Prata", serif;
  font-size: 5rem;
  text-align: center;
  font-weight: 100;
  color: rgba(0, 0, 0, 0.884);
  & span {
    position: relative;
  }
}
h2 {
  position: relative;
  font-family: 'Raleway', cursive;
  font-size: 1.8rem;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.884);
  margin-top: 20px;
}
.line{
  left: 40%;
  margin-top: 20px;
  & .l1 {
    width: 500px;
    height: 3px;
    background: rgba(131, 151, 14, 0.829);
    border-radius: 5px;
  }
}
</style>
