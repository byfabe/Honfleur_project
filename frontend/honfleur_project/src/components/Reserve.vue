<template>
  <div id="reserve-anchor" class="container-main">
    <div class="container-left">
      <i class="fas fa-map-marker-alt map-marker"></i>
      <div class="info-location">
        <p class="adress a1">Place, Jean de vienne</p>
        <p class="adress a2">14600 Honfleur</p>
        <div class="line"></div>
        <p class="adress a3">
          De Paris, autoroute A13 direction Le Havre/Honfleur/Pont de Normandie.
        </p>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2595.169677792121!2d0.225737615868515!3d49.42460606862493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e033b7919c7d7f%3A0xe524dcccdb3e33f!2sPl.%20Jean%20de%20Vienne%2C%2014600%20Honfleur!5e0!3m2!1sfr!2sfr!4v1633177311414!5m2!1sfr!2sfr"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
    <div class="container-right">
      <div class="container-content">
        <i class="far fa-calendar-alt agenda-icon"></i>
        <h2>Réserver</h2>
        <div class="line"></div>
        <p class="info-reserve">
          Nos sites partenaires pour réserver en ligne.
        </p>
        <div class="container-partner">
          <div class="partner p1">
            <a href="" class="btn-reserve">Abritel</a>
          </div>
          <div class="partner p2">
            <a href="" class="btn-reserve">Airbnb</a>
          </div>
          <div class="partner p3">
            <a href="" class="btn-reserve">Gites</a>
          </div>
        </div>
        <div class="info">
          <i class="fas fa-info info-icon"></i>
          <p class="info-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            accusamus corporis quidem iure optio adipisci amet magnam porro
            exercitationem deleniti.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped lang="scss">
.container-main {
  display: flex;
  height: 80%;
  width: 100vw;
  background: #f1f1f1;
  border-top: 5px solid rgba(0, 0, 0, 0.89);
}
.container-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  background: rgba(0, 0, 0, 0.863);
  & .map-marker {
    font-size: clamp(30px, 2.5vw, 50px);
    color: rgb(116, 116, 116);
    margin-bottom: 2vh;
  }
  & .info-location {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 3vh 0 3vh 0;
    & .adress {
      font-family: "Raleway", serif;
      color: #f1f1f1;
      font-size: clamp(16px, 1vw, 25px);
    }
    & .line {
      width: 10vw;
      height: 2px;
      background: rgb(153, 177, 18);
      border-radius: 5px;
      margin-top: 2vh;
    }
    & .a2 {
      margin-top: 1vh;
    }
    & .a3 {
      margin-top: 2vh;
    }
  }
  & iframe {
    width: 50%;
    height: 50%;
    border: 0;
    border-radius: 5px;
  }
}
.container-right {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  background: rgba(0, 0, 0, 0.863);
}
.agenda-icon {
  font-size: clamp(30px, 2.5vw, 50px);
  color: rgb(153, 177, 18);
  margin-bottom: 2vh;
}
.container-content {
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 500px;
  & h2 {
    font-family: "Raleway", serif;
    color: #f1f1f1;
    font-size: clamp(16px, 1.6vw, 40px);
    font-weight: 400;
  }
  & .line {
    width: 10vw;
    height: 2px;
    background: #f1f1f1;
    border-radius: 5px;
  }
  & .info-reserve {
    margin-top: 3vh;
    font-family: "Raleway", serif;
    color: #f1f1f1;
    font-size: clamp(16px, 1.1vw, 25px);
  }
  & .container-partner {
    display: flex;
    margin-top: 5vh;
    margin-bottom: 5vh;
    & .partner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 50%;
      font-family: "Raleway", serif;
      color: rgba(0, 0, 0, 0.904);
      font-size: clamp(16px, 1.2vw, 25px);
    }
    & .btn-reserve {
      display: flex;
      justify-content: center;
      align-items: center;
      width: clamp(60px, 5vw, 100px);
      height: clamp(60px, 5vw, 100px);
      font-family: "Raleway", serif;
      color: rgba(0, 0, 0, 0.849);
      font-size: clamp(16px, 1vw, 25px);
      font-weight: 600;
      background: rgb(153, 177, 18);
      text-decoration: none;
      border-radius: 5px;
      transition: 0.2s ease-in;
      &:hover {
        background: rgb(188, 218, 23);
        transition: 0.2s ease-in;
        transform: scale(1.1);
        box-shadow: 0px 0px 10px 0px rgba(204, 248, 6, 0.75);
      }
    }
  }
  & .info {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 3vh;
    & .info-text {
      font-family: "Raleway", serif;
      color: #f1f1f1;
      font-size: clamp(12px, 1vw, 25px);
      width: 90%;
    }
    & .info-icon {
      font-size: clamp(16px, 2vw, 50px);
      color: rgb(153, 177, 18);
      align-self: center;
    }
  }
}
@media screen and (max-width: 1350px) {
  .container-main {
    flex-direction: column;
  }
  .container-right {
    border-top: 5px solid rgb(153, 177, 18);
  }
  .container-content {
    width: 90%;
    height: auto;
    padding-top: 3%;
    & .container-partner {
      margin-top: 3vh;
      margin-bottom: 3vh;
      & .partner {
        justify-content: center;
      }
    }
    & .info-reserve {
      margin-top: 3%;
    }
    & .info {
      margin-top: 0vh;
      margin-bottom: 3%;
      height: 100%;
    }
  }
  .container-left {
    width: 100%;
    padding: 3% 0 3% 0;
    & iframe {
      width: 80%;
      height: auto;
    }
    & .adress {
      text-align: center;
    }
  }
  .container-right {
    width: 100%;
    height: auto;
  }
}
</style>