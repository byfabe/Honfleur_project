<template>
  <div class="container" id="home-anchor">
    <header>
      <ul>
        <li><router-link to="/#home-anchor"><i class="fas fa-home"></i></router-link></li>
        <li><router-link to="/#reserve-anchor">Réserver</router-link></li>
        <li><router-link to="/#contact-anchor">Contact</router-link></li>
      </ul>
    </header>
    <div class="container-titre">
      <h1><span>Résidence </span><span>le </span><span>Phare</span></h1>
      <div class="line">
        <div class="l1"></div>
      </div>
      <h2>Honfleur</h2>
      <p class="quote q1"><i class="fas fa-quote-left qicon"></i> J’ouvre la porte et le toit de la chapelle apparaît, comme dans un tableau,</p>
      <p class="quote q2">Je tourne mon regard et j’aperçois le phare qui signalait l’entrée d’Honfleur.</p>
      <p class="quote q5">Je vous invite à partager cette découverte. <i class="fas fa-quote-right qicon"></i></p>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
export default {
  methods: {
    animLoad() {
      const titreSpans = document.querySelectorAll("h1 span");
      const line = document.querySelector(".l1");
      const h2 = document.querySelector("h2");
      window.addEventListener("load", () => {
        const tl = gsap.timeline({ paused: true });

        tl.from(titreSpans, {
          top: -50,
          opacity: 0,
          ease: "power3.out",
          stagger: 0.3,
          duration: 1,
        })
          .from(line, {
            width: 0,
            ease: "power1.out",
            duration: 0.4,
          })
          .from(h2, {
            y: 20,
            opacity: 0,
            ease: "bounce",
            duration: 1,
          });
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
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  background: #f1f1f1;
}
header {
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: clamp(50px, 6vh, 8vh);;
  background: rgba(0, 0, 0, 0.863);
  z-index: 1;
}
ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  height: 100%;
  list-style-type: none;
  & a {
    text-decoration: none;
    font-family: "Raleway", serif;
    color: #f1f1f1;
    font-size: clamp(16px, 1vw, 20px);
    transition: ease-out 0.2s;
    &:hover {
      color: rgba(131, 151, 14, 0.829);
      transition: ease-out 0.2s;
    }
  }
}
.container-titre {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
}
h1 {
  font-family: "Prata", serif;
  font-size: clamp(30px, 5vw, 80px);
  text-align: center;
  font-weight: 100;
  color: rgba(0, 0, 0, 0.884);
  & span {
    position: relative;
  }
}
h2 {
  position: relative;
  font-family: "Raleway", cursive;
  font-size: clamp(20px, 2vw, 80px);;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.884);
  margin-top: 20px;
}
.quote {
  font-family: 'Reenie Beanie', cursive;
  font-size: clamp(18px, 1.6vw, 30px);
  color: rgba(0, 0, 0, 0.856);
  width: 50%;
  text-align: center;
}
.q1 {
  margin-top: 6%;
}
.qicon {
  font-size: clamp(16px, 1vw, 30px);
  color: rgba(130, 151, 14, 0.658);
}
.line {
  left: 40%;
  margin-top: 20px;
  & .l1 {
    width: 20vw;
    height: 3px;
    background: rgba(131, 151, 14, 0.829);
    border-radius: 5px;
  }
}
@media screen and (max-width: 1350px){
  ul {
    width: 100%;
  }
  .container {
    width: 100%;
    height: 100%;
  }
  .container-titre {
    width: 100%;
    height: 50vh;
    margin-top: 10%;
  }
  .quote {
    width: 80%;
  }
}
</style>
