<template>
  <div id="contact-anchor" class="container-contact">
    <div class="container-left-contact">
      <div class="content-left">
        <i class="far fa-envelope"></i>
        <h2>Contact</h2>
        <div class="line"></div>
        <div class="container-content-contact">
          <div class="icon-contact">
            <i class="fas fa-at"></i>
            <i class="fas fa-mobile-alt"></i>
          </div>
          <div class="content-contact">
            <a href="mailto:residencelephare@contact.fr"
              >residencelephare@contact.fr</a
            >
            <p>06.16.06.16.06</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-right-contact">
      <div class="icon-social">
        <a href="http://facebook.com"><img src="../assets/facebook.png" alt="Logo Facebook" class="social"></a>
        <a href="http://instagram.com"><img src="../assets/instagram.png" alt="Logo Instagram" class="social"></a>
        <a href="http://twitter.com"><img src="../assets/twitter.png" alt="Logo Twitter" class="social"></a>
        <a href="http://google.com"><img src="../assets/google.png" alt="Logo Google" class="social"></a>
      </div>
    </div>
    <footer>
      <a href="https://www.linkedin.com/in/fabien-rivet-382b01204/">Made by Fabien Rivet</a>
      <span class="space">|</span>
      <a href="mailto:byfabe@gmail.com" class="signature">byfabe@gmail.com</a
      ><span class="space">|</span>
      <a href="https://www.linkedin.com/in/fabien-rivet-382b01204/">linkedin</a>
      <span class="space">|</span>
      <a href="" class="mention">Mention légale</a>
    </footer>
  </div>
</template>

<style scoped lang="scss">
.container-contact {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 40vh;
  border-top: 5px solid rgb(153, 177, 18);
}
.container-left-contact {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  & .fa-envelope {
    font-size: clamp(30px, 2.5vw, 50px);
    color: rgb(153, 177, 18);
    margin-bottom: 2vh;
  }
  & h2 {
    font-family: "Raleway", serif;
    color: black;
    font-size: clamp(16px, 1.6vw, 40px);
    font-weight: 400;
  }
  & .line {
    width: 10vw;
    height: 2px;
    background: black;
    border-radius: 5px;
  }
  & .container-content-contact {
    display: flex;
    width: 100%;
    height: 80px;
  }
  & .content-contact {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 80px;
    margin-top: 2vh;
    margin-left: 1.5vw;
    & a {
      text-decoration: none;
      font-family: "Raleway", serif;
      color: black;
      font-size: clamp(16px, 1vw, 40px);
      font-weight: 400;
    }
    & p {
      font-family: "Raleway", serif;
      color: black;
      font-size: clamp(16px, 1vw, 40px);
      font-weight: 400;
    }
  }
  & .icon-contact {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 15%;
    height: 80px;
    margin-top: 2vh;
    & i {
      font-size: clamp(16px, 1.1vw, 40px);
      font-weight: 100;
    }
  }
}
.container-right-contact {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  & img {
    width: clamp(50px, 4vw, 100px);
    margin-left: 2vw;
    transition: ease-in 0.2s;
    &:hover {
        transform: scale(1.2);
        transition: ease-in 0.2s;
    }
}
}
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 5vh;
  background: rgba(0, 0, 0, 0.863);
  & a {
    font-family: "Raleway", serif;
    color: #f1f1f1;
    font-size: clamp(9px, 0.7vw, 40px);
    font-weight: 400;
    text-decoration: none;
  }
  & .space {
    color: #f1f1f1;
    margin: 0 1vw 0 1vw;
  }
}
@media screen and (max-width: 1350px){
  .container-contact {
    flex-direction: column;
    flex-wrap: nowrap;
    height: 100%;
  }
  .content-left {
    width: 90%;
    margin-top: 3%;
  }
  .container-left-contact {
    width: 100%;
  }
  .container-right-contact {
    width: 100%;
    margin-top: 10%;
    margin-bottom: 5%;
  }
}
</style>
